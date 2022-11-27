import { Message } from '@/domain/entities'

export interface FindByIdMessage {
  execute(id: string): Promise<FindByIdMessage.Result>
}

export namespace FindByIdMessage {
  export type Result = Message | null
}
