import { SendMessage } from '@/domain/usecases/message/sendMessage'
import { RegisterMessageRepository } from '@/data/protocols/message/registerMessageRepository'
import { FindByIdConversationRepository } from '@/data/protocols/conversation/findByIdConversationRepository'
import { NotFound } from '@/data/errors/notFound'

export class SendMessageUseCase implements SendMessage {
  constructor(
    private readonly findByIdConversationRepository: FindByIdConversationRepository,
    private readonly registerMessageRepository: RegisterMessageRepository
  ) {}

  async execute(data: SendMessage.Params): Promise<SendMessage.Result> {
    const conversation =
      await this.findByIdConversationRepository.findByIdConversation(
        data.conversationId
      )

    if (!conversation) throw new NotFound('Conversa não encontrada!')

    return this.registerMessageRepository.registerMessage({
      ...data,
    })
  }
}
