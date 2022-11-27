import { MessageRepository } from '@/infra/mongo/repositories/message/messageRepository'
import { ConversationRepository } from '@/infra/mongo/repositories/conversation/createConversationRepository'
import { SendMessageController } from '@/presentation/controllers/message/sendMessage'
import { SendMessageUseCase } from '@/data/usecases/message/sendMessage'
import { SocketMessageDispatcher } from '@/infra/socketIO/socketMessageDispatcher'
import { ResponsesTextGeneratorRepository } from '@/infra/fake/responsesTextGeneratorRepository'

export const makeSendMessageControllerFactory = (): SendMessageController => {
  const conversationRepository = new ConversationRepository()
  const messageRepository = new MessageRepository()
  const socketMessageDispatcher = new SocketMessageDispatcher()
  const responsesTextGeneratorRepository =
    new ResponsesTextGeneratorRepository()
  const sendMessageUseCase = new SendMessageUseCase(
    conversationRepository,
    messageRepository,
    responsesTextGeneratorRepository,
    socketMessageDispatcher
  )

  return new SendMessageController(sendMessageUseCase)
}
