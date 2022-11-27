import { ConversationModel } from '@/data/models'

export interface CreateConversationRepository {
  createConversation(
    params: CreateConversationRepository.Params
  ): Promise<CreateConversationRepository.Result>
}

export namespace CreateConversationRepository {
  export type Params = { botId: string; sessionId: string; socketId: string }
  export type Result = ConversationModel
}
