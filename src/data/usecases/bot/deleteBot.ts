import { DeleteBot } from '@/domain/usecases/bot/deleteBot'
import { FindByIdBotRepository } from '@/data/protocols/bot/findByIdBotRepository'
import { DeleteBotRepository } from '@/data/protocols/bot/deleteBotRepository'
import { NotFound } from '@/data/errors/notFound'

export class DeleteBotUseCase implements DeleteBot {
  constructor(
    private readonly findByIdBotRepository: FindByIdBotRepository,
    private readonly deleteBotRepository: DeleteBotRepository
  ) {}

  async execute(id: string): Promise<DeleteBot.Result> {
    const bot = await this.findByIdBotRepository.findById(id)

    if (!bot) throw new NotFound('Bot não encontrado!')

    return this.deleteBotRepository.deleteBot(id)
  }
}
