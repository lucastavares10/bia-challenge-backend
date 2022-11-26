import { Conversation } from '@/domain/entities'

export interface StartConversation {
  execute(data: StartConversation.Params): Promise<StartConversation.Result>
}

type StartConversationParams = {
  botId: string
  socketId: string
}

export namespace StartConversation {
  export type Params = StartConversationParams
  export type Result = Conversation
}
