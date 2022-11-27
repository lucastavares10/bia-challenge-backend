import { CreateConversationRepository } from '@/data/protocols/conversation/createConversationRepository'

import { AppDataSource } from '@/loaders'
import { Conversation } from '../../entities/Conversation'

export class ConversationRepository implements CreateConversationRepository {
  async createConversation(
    data: CreateConversationRepository.Params
  ): Promise<Conversation> {
    const conversationRepository = AppDataSource.getRepository(Conversation)

    return await conversationRepository.save({ ...data, createdAt: new Date() })
  }
}
