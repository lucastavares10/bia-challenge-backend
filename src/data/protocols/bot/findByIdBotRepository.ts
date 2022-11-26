import { BotModel } from '@/data/models'

export interface FindByIdBotRepository {
  findById(id: string): Promise<FindByIdBotRepository.Result>
}

export namespace FindByIdBotRepository {
  export type Result = BotModel | null
}
