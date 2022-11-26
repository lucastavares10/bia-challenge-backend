import { CreateBot } from '@/domain/usecases/bot/createBot'
import { CreateBotRepository } from '@/data/protocols/bot/createBotRepository'
import { FindByNameBotRepository } from '@/data/protocols/bot/findByNameBotRepository'
import { AlreadyInUseError } from '@/data/errors/alreadyInUseError'

export class CreateBotUseCase implements CreateBot {
  constructor(
    private readonly createBotRepository: CreateBotRepository,
    private readonly findByNameBotRepository: FindByNameBotRepository
  ) {}

  async execute(data: CreateBot.Params): Promise<CreateBot.Result> {
    const alreadyInUse = await this.findByNameBotRepository.findByName(
      data.name
    )

    if (alreadyInUse)
      throw new AlreadyInUseError('Nome já está sendo utilizado!')

    return this.createBotRepository.createBot({
      ...data,
    })
  }
}
