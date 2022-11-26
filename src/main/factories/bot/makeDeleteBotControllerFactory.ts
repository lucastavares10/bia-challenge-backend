import { DeleteBotUseCase } from '@/data/usecases/bot/deleteBot'
import { DeleteBotController } from '@/presentation/controllers/bot/deleteBot'
import { BotRepository } from '@/infra/mongo/repositories/bot/createBotRepository'

export const makeDeleteBotControllerFactory = (): DeleteBotController => {
  const botRepository = new BotRepository()
  const createBotUseCase = new DeleteBotUseCase(botRepository, botRepository)

  return new DeleteBotController(createBotUseCase)
}
