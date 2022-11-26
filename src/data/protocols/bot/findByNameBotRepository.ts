import { BotModel } from '@/data/models'

export interface FindByNameBotRepository {
  findByName(name: string): Promise<FindByNameBotRepository.Result>
}

export namespace FindByNameBotRepository {
  export type Params = { name: string }
  export type Result = BotModel | null
}
