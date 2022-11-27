import { Message } from '@/domain/entities'

export interface SendMessage {
  execute(data: SendMessage.Params): Promise<SendMessage.Result>
}

type SendMessageParams = {
  conversationId: string
  from: string
  to: string
  text: string
}

export namespace SendMessage {
  export type Params = SendMessageParams
  export type Result = Message
}
