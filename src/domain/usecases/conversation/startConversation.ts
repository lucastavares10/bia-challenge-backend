import { Conversation } from '@/domain/entities'
import { Message } from '@/domain/entities'

export interface StartConversation {
  execute(data: StartConversation.Params): Promise<StartConversation.Result>
}

type StartConversationParams = {
  botId: string
  socketId: string
}

type StartConversationResult = { conversation: Conversation; message: Message }

export namespace StartConversation {
  export type Params = StartConversationParams
  export type Result = StartConversationResult
}
