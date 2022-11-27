import { RegisterMessageRepository } from '@/data/protocols/message/registerMessageRepository'

import { AppDataSource } from '@/loaders'
import { Message } from '../../entities/Message'

export class MessageRepository implements RegisterMessageRepository {
  async registerMessage(
    data: RegisterMessageRepository.Params
  ): Promise<RegisterMessageRepository.Result> {
    const conversationRepository = AppDataSource.getRepository(Message)

    return await conversationRepository.save({ ...data, timestamp: new Date() })
  }
}
