import { BotModel } from '@/data/models'

export interface CreateBotRepository {
  createBot(params: CreateBotRepository.Params): Promise<CreateBotRepository.Result>
}

export namespace CreateBotRepository {
  export type Params = { name: string }
  export type Result = BotModel | null
}
