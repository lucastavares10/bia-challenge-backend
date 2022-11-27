import { MessageModel } from '@/data/models'

export interface FindByIdMessageRepository {
  findByIdMessage(id: string): Promise<FindByIdMessageRepository.Result>
}

export namespace FindByIdMessageRepository {
  export type Result = MessageModel | null
}
