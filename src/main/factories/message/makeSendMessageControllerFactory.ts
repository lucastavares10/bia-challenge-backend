import { MessageRepository } from '@/infra/mongo/repositories/message/messageRepository'
import { ConversationRepository } from '@/infra/mongo/repositories/conversation/createConversationRepository'
import { SendMessageController } from '@/presentation/controllers/message/sendMessage'
import { SendMessageUseCase } from '@/data/usecases/message/sendMessage'

export const makeSendMessageControllerFactory = (): SendMessageController => {
  const conversationRepository = new ConversationRepository()
  const messageRepository = new MessageRepository()
  const sendMessageUseCase = new SendMessageUseCase(
    conversationRepository,
    messageRepository
  )

  return new SendMessageController(sendMessageUseCase)
}
