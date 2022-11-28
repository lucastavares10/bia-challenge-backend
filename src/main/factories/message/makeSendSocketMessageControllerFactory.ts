import { MessageRepository } from '@/infra/mongo/repositories/message/messageRepository'
import { ConversationRepository } from '@/infra/mongo/repositories/conversation/createConversationRepository'
import { SendSocketMessageController } from '@/presentation/controllers/message/sendSocketMessage'
import { SendMessageUseCase } from '@/data/usecases/message/sendMessage'
import { SocketMessageDispatcher } from '@/infra/socketIO/socketMessageDispatcher'
import { ResponsesTextGeneratorRepository } from '@/infra/fake/responsesTextGeneratorRepository'

export const makeSendSocketMessageControllerFactory =
  (): SendSocketMessageController => {
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

    return new SendSocketMessageController(sendMessageUseCase)
  }
