import { FindAllBotController } from '@/presentation/controllers/bot/findAllBot'
import { FindAllBotUseCase } from '@/data/usecases/bot/findAllBot'
import { BotRepository } from '@/infra/mongo/repositories/bot/createBotRepository'

export const makeFindAllBotControllerFactory = (): FindAllBotController => {
  const botRepository = new BotRepository()
  const listAllBotUseCase = new FindAllBotUseCase(botRepository)

  return new FindAllBotController(listAllBotUseCase)
}
