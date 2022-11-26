import { FindAllBot } from '@/domain/usecases/bot/findAllBot'
import { FindAllBotRepository } from '@/data/protocols/bot/findAllBotRepository'

export class FindAllBotUseCase implements FindAllBot {
  constructor(private readonly findAllBotRepository: FindAllBotRepository) {}

  async execute(): Promise<FindAllBot.Result> {
    return this.findAllBotRepository.findAllBot()
  }
}
