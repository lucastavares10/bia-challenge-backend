import { CreateConversationRepository } from '@/data/protocols/conversation/createConversationRepository'
import { FindByIdConversationRepository } from '@/data/protocols/conversation/findByIdConversationRepository'

import { AppDataSource } from '@/loaders'
import { Conversation } from '../../entities/Conversation'

export class ConversationRepository
  implements CreateConversationRepository, FindByIdConversationRepository
{
  async createConversation(
    data: CreateConversationRepository.Params
  ): Promise<CreateConversationRepository.Result> {
    const conversationRepository = AppDataSource.getRepository(Conversation)

    return await conversationRepository.save({ ...data, createdAt: new Date() })
  }

  async findByIdConversation(
    conversationId: string
  ): Promise<FindByIdConversationRepository.Result> {
    const conversationRepository = AppDataSource.getRepository(Conversation)

    return await conversationRepository.findOne(conversationId)
  }
}
