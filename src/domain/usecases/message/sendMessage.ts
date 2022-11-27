import { Message } from '@/domain/entities'

export interface SendMessage {
  execute(data: SendMessage.Params): Promise<SendMessage.Result>
}

type SendMessageParams = {
  conversationId: string
  from: string
  to: string
  text: string
  socketId: string
}

type SendMessageResult = {
  messageId: string
  reply: Message
}

export namespace SendMessage {
  export type Params = SendMessageParams
  export type Result = SendMessageResult
}
