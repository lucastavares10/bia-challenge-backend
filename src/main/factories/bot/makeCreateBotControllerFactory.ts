import { CreateBotUseCase } from '@/data/usecases/bot/createBot'
import { CreateBotController } from '@/presentation/controllers/bot/createBot'
import { BotRepository } from '@/infra/mongo/repositories/bot/createBotRepository'

export const makeCreateBotControllerFactory = (): CreateBotController => {
  const botRepository = new BotRepository()
  const createBotUseCase = new CreateBotUseCase(botRepository, botRepository)

  return new CreateBotController(createBotUseCase)
}
