import { FindByIdMessageRepository } from '@/data/protocols/message/findByIdMessageRepository'
import { RegisterMessageRepository } from '@/data/protocols/message/registerMessageRepository'
import { FindAllByConversationIdMessageRepository } from '@/data/protocols/message/findAllByConversationIdMessageRepository'

import { AppDataSource } from '@/loaders'
import { Message } from '../../entities/Message'

export class MessageRepository
  implements
    RegisterMessageRepository,
    FindByIdMessageRepository,
    FindAllByConversationIdMessageRepository
{
  async registerMessage(
    data: RegisterMessageRepository.Params
  ): Promise<RegisterMessageRepository.Result> {
    const conversationRepository = AppDataSource.getRepository(Message)

    return await conversationRepository.save({ ...data, timestamp: new Date() })
  }

  async findByIdMessage(id: string): Promise<FindByIdMessageRepository.Result> {
    const conversationRepository = AppDataSource.getRepository(Message)

    return await conversationRepository.findOne(id)
  }

  async findAllByConversationIdMessage(
    conversationId: string
  ): Promise<FindAllByConversationIdMessageRepository.Result> {
    const conversationRepository = AppDataSource.getRepository(Message)

    return await conversationRepository.find({
      where: { conversationId },
      order: { timestamp: 'ASC' },
    })
  }
}
