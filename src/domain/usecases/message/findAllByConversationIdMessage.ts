import { Message } from '@/domain/entities'

export interface FindAllByConversationIdMessage {
  execute(
    conversationId: string
  ): Promise<FindAllByConversationIdMessage.Result>
}

export namespace FindAllByConversationIdMessage {
  export type Result = Message[]
}
