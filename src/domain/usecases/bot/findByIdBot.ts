import { Bot } from '@/domain/entities'

export interface FindByIdBot {
  execute(id: string): Promise<FindByIdBot.Result>
}

export namespace FindByIdBot {
  export type Result = Bot | null
}
