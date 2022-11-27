import { Bot } from '@/domain/entities'

export interface CreateBot {
  execute(data: CreateBot.Params): Promise<CreateBot.Result>
}

export namespace CreateBot {
  export type Params = { name: string }
  export type Result = Bot | null
}
