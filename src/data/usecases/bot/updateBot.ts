import { UpdateBot } from '@/domain/usecases/bot/updateBot'
import { FindByIdBotRepository } from '@/data/protocols/bot/findByIdBotRepository'
import { UpdateBotRepository } from '@/data/protocols/bot/updateBotRepository'
import { NotFound } from '@/data/errors/notFound'
import { ParamRequired } from '@/data/errors/paramRequired'

export class UpdateBotUseCase implements UpdateBot {
  constructor(
    private readonly findByIdBotRepository: FindByIdBotRepository,
    private readonly updateBotRepository: UpdateBotRepository
  ) {}

  async execute(
    id: string,
    newData: UpdateBot.Params
  ): Promise<UpdateBot.Result> {
    if (!id) {
      throw new ParamRequired('id é obrigatório!')
    }

    if (!newData) {
      throw new ParamRequired('data é obrigatório!')
    }

    const bot = await this.findByIdBotRepository.findById(id)

    if (!bot || bot?.id.toString() !== id)
      throw new NotFound('Bot não encontrado!')

    return this.updateBotRepository.updateBot(id, {
      ...newData,
    })
  }
}
