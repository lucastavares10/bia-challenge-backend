import { ConversationModel } from '@/data/models'

export interface FindByIdConversationRepository {
  findByIdConversation(
    conversationId: string
  ): Promise<FindByIdConversationRepository.Result>
}

export namespace FindByIdConversationRepository {
  export type Result = ConversationModel | null
}
