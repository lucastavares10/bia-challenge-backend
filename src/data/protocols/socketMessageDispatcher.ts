import { Message } from '@/domain/entities'

export interface MessageDispatcher {
  dispatch(data: MessageDispatcher.Params): Promise<void>
}

export namespace MessageDispatcher {
  export type Params = { socketId: string; data: Message }
}
