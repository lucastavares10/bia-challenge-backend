import { MessageModel } from '@/data/models'

export interface RegisterMessageRepository {
  registerMessage(
    params: RegisterMessageRepository.Params
  ): Promise<RegisterMessageRepository.Result>
}

type RegisterMessageRepositoryParams = {
  conversationId: string
  from: string
  to: string
  text: string
}

export namespace RegisterMessageRepository {
  export type Params = RegisterMessageRepositoryParams
  export type Result = MessageModel
}
