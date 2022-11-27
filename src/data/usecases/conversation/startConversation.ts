import { StartConversation } from '@/domain/usecases/conversation/startConversation'
import { CreateConversationRepository } from '@/data/protocols/conversation/createConversationRepository'
import { RegisterMessageRepository } from '@/data/protocols/message/registerMessageRepository'
import { FindByIdBotRepository } from '@/data/protocols/bot/findByIdBotRepository'
import { CreateUserSessionRepository } from '@/data/protocols/user/createUserSessionRepository'
import { ResponsesTextGeneratorRepository } from '@/data/protocols/responsesTextGeneratorRepository'
import { MessageDispatcher } from '@/data/protocols/socketMessageDispatcher'
import { NotFound } from '@/data/errors/notFound'
import { InternalError } from '@/data/errors/internalError'

export class StartConversationUseCase implements StartConversation {
  constructor(
    private readonly findByIdBotRepository: FindByIdBotRepository,
    private readonly createUserSessionRepository: CreateUserSessionRepository,
    private readonly createConversationRepository: CreateConversationRepository,
    private readonly responsesTextGeneratorRepository: ResponsesTextGeneratorRepository,
    private readonly registerMessageRepository: RegisterMessageRepository,
    private readonly socketMessageDispatcher: MessageDispatcher
  ) {}

  async execute(
    data: StartConversation.Params
  ): Promise<StartConversation.Result> {
    const bot = await this.findByIdBotRepository.findById(data.botId)

    if (!bot) throw new NotFound('Bot não encontrado!')

    const userSessionId =
      await this.createUserSessionRepository.createUserSession()

    if (!userSessionId) throw new InternalError('Error ao iniciar sessão!')

    const conversation =
      await this.createConversationRepository.createConversation({
        botId: data.botId,
        sessionId: userSessionId.toString(),
        socketId: data.socketId,
      })

    if (!conversation) throw new InternalError('Error ao iniciar conversa!')

    const initialMessage =
      await this.responsesTextGeneratorRepository.generateInitialMessage()

    const message = await this.registerMessageRepository.registerMessage({
      conversationId: conversation.id.toString(),
      from: data.botId,
      to: userSessionId.toString(),
      text: initialMessage,
    })

    if (conversation.socketId) {
      await this.socketMessageDispatcher.dispatch({
        socketId: conversation.socketId,
        data: message,
      })
    }

    return { conversation, message }
  }
}
