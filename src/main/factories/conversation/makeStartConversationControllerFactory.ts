import { StartConversationUseCase } from '@/data/usecases/conversation/startConversation'
import { StartConversationController } from '@/presentation/controllers/conversation/startConversation'
import { BotRepository } from '@/infra/mongo/repositories/bot/createBotRepository'
import { ConversationRepository } from '@/infra/mongo/repositories/conversation/createConversationRepository'
import { UserRepository } from '@/infra/mongo/repositories/user/userRepository'
import { MessageRepository } from '@/infra/mongo/repositories/message/messageRepository'
import { SocketMessageDispatcher } from '@/infra/socketIO/socketMessageDispatcher'

export const makeStartConversationControllerFactory =
  (): StartConversationController => {
    const botRepository = new BotRepository()
    const userRepository = new UserRepository()
    const conversationRepository = new ConversationRepository()
    const messageRepository = new MessageRepository()
    const socketMessageDispatcher = new SocketMessageDispatcher()
    const startConversationUseCase = new StartConversationUseCase(
      botRepository,
      userRepository,
      conversationRepository,
      messageRepository,
      socketMessageDispatcher
    )

    return new StartConversationController(startConversationUseCase)
  }
