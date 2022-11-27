import { FindByIdMessageController } from '@/presentation/controllers/message/findByIdMessage'
import { FindByIdMessageUseCase } from '@/data/usecases/message/findByIdMessage'
import { MessageRepository } from '@/infra/mongo/repositories/message/messageRepository'

export const makeFindByIdMessageControllerFactory =
  (): FindByIdMessageController => {
    const messageRepository = new MessageRepository()
    const findByIdMessageUseCase = new FindByIdMessageUseCase(messageRepository)

    return new FindByIdMessageController(findByIdMessageUseCase)
  }
