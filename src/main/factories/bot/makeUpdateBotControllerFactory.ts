import { UpdateBotUseCase } from '@/data/usecases/bot/updateBot'
import { UpdateBotController } from '@/presentation/controllers/bot/updateBot'
import { BotRepository } from '@/infra/mongo/repositories/bot/createBotRepository'

export const makeUpdateBotControllerFactory = (): UpdateBotController => {
  const botRepository = new BotRepository()
  const createBotUseCase = new UpdateBotUseCase(botRepository, botRepository)

  return new UpdateBotController(createBotUseCase)
}
