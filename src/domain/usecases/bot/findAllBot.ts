import { Bot } from '@/domain/entities'

export interface FindAllBot {
  execute(): Promise<FindAllBot.Result>
}

export namespace FindAllBot {
  export type Result = Bot[]
}
