import { FindByIdBotController } from '@/presentation/controllers/bot/findByIdBot'
import { FindByIdBotUseCase } from '@/data/usecases/bot/findByIdBot'
import { BotRepository } from '@/infra/mongo/repositories/bot/createBotRepository'

export const makeFindByIdBotControllerFactory = (): FindByIdBotController => {
  const botRepository = new BotRepository()
  const findByIdBotUseCase = new FindByIdBotUseCase(botRepository)

  return new FindByIdBotController(findByIdBotUseCase)
}
