import { MessageModel } from '@/data/models'

export interface FindAllByConversationIdMessageRepository {
  findAllByConversationIdMessage(
    id: string
  ): Promise<FindAllByConversationIdMessageRepository.Result>
}

export namespace FindAllByConversationIdMessageRepository {
  export type Result = MessageModel[]
}
