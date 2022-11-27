import { CreateBot } from '@/domain/usecases/bot/createBot'
import { CreateBotRepository } from '@/data/protocols/bot/createBotRepository'
import { FindByNameBotRepository } from '@/data/protocols/bot/findByNameBotRepository'
import { AlreadyInUseError } from '@/data/errors/alreadyInUseError'
import { ParamRequired } from '@/data/errors/paramRequired'

export class CreateBotUseCase implements CreateBot {
  constructor(
    private readonly createBotRepository: CreateBotRepository,
    private readonly findByNameBotRepository: FindByNameBotRepository
  ) {}

  async execute(data: CreateBot.Params): Promise<CreateBot.Result> {
    if (!data.name) {
      throw new ParamRequired('name é obrigatório!')
    }

    const alreadyInUse = await this.findByNameBotRepository.findByName(
      data.name
    )

    if (alreadyInUse?.name === data.name)
      throw new AlreadyInUseError('Nome já está sendo utilizado!')

    return this.createBotRepository.createBot({
      ...data,
    })
  }
}
