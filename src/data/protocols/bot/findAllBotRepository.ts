import { BotModel } from '@/data/models'

export interface FindAllBotRepository {
  findAllBot(): Promise<FindAllBotRepository.Result>
}

export namespace FindAllBotRepository {
  export type Result = BotModel[]
}
