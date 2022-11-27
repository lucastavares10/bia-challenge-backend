import { FindAllByConversationIdMessageUseCase } from '@/data/usecases/message/findAllByConversationIdMessage'
import { FindAllByConversationIdMessageController } from '@/presentation/controllers/message/findAllByConversationIdMessage'
import { MessageRepository } from '@/infra/mongo/repositories/message/messageRepository'

export const makeFindAllByConversationIdMessageControllerFactory =
  (): FindAllByConversationIdMessageController => {
    const messageRepository = new MessageRepository()

    const findAllByConversationIdMessageUseCase =
      new FindAllByConversationIdMessageUseCase(messageRepository)

    return new FindAllByConversationIdMessageController(
      findAllByConversationIdMessageUseCase
    )
  }
