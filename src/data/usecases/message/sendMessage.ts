import { SendMessage } from '@/domain/usecases/message/sendMessage'
import { RegisterMessageRepository } from '@/data/protocols/message/registerMessageRepository'
import { FindByIdConversationRepository } from '@/data/protocols/conversation/findByIdConversationRepository'
import { ResponsesTextGeneratorRepository } from '@/data/protocols/responsesTextGeneratorRepository'
import { NotFound } from '@/data/errors/notFound'
import { MessageDispatcher } from '@/data/protocols/socketMessageDispatcher'

export class SendMessageUseCase implements SendMessage {
  constructor(
    private readonly findByIdConversationRepository: FindByIdConversationRepository,
    private readonly registerMessageRepository: RegisterMessageRepository,
    private readonly responsesTextGeneratorRepository: ResponsesTextGeneratorRepository,
    private readonly socketMessageDispatcher: MessageDispatcher
  ) {}

  async execute(data: SendMessage.Params): Promise<SendMessage.Result> {
    const conversation =
      await this.findByIdConversationRepository.findByIdConversation(
        data.conversationId
      )

    if (!conversation) throw new NotFound('Conversa não encontrada!')

    const message = await this.registerMessageRepository.registerMessage({
      ...data,
    })

    const fakeReply =
      await this.responsesTextGeneratorRepository.generateRandomMessage()

    const reply = await this.registerMessageRepository.registerMessage({
      conversationId: data.conversationId,
      from: data.to,
      to: data.from,
      text: fakeReply,
    })

    if (data.socketId) {
      await this.socketMessageDispatcher.dispatch({
        socketId: data.socketId,
        data: reply,
      })
    }

    return { messageId: message.id, reply: reply }
  }
}
