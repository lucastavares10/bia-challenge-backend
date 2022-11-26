import { FindByIdBot } from '@/domain/usecases/bot/findByIdBot'
import { FindByIdBotRepository } from '@/data/protocols/bot/findByIdBotRepository'

export class FindByIdBotUseCase implements FindByIdBot {
  constructor(private readonly findByIdBotRepository: FindByIdBotRepository) {}

  async execute(id: string): Promise<FindByIdBot.Result> {
    return this.findByIdBotRepository.findById(id)
  }
}
