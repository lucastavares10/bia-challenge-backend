import { StartConversation } from '@/domain/usecases/conversation/startConversation'
import { FindByIdBotRepository } from '@/data/protocols/bot/findByIdBotRepository'
import { NotFound } from '@/data/errors/notFound'
import { Conversation } from '@/infra/mongo/entities/Conversation'

export class StartConversationUseCase implements StartConversation {
  constructor(private readonly findByIdBotRepository: FindByIdBotRepository) {}

  async execute(
    data: StartConversation.Params
  ): Promise<StartConversation.Result> {
    const bot = await this.findByIdBotRepository.findById(data.botId)

    if (!bot) throw new NotFound('Bot não encontrado!')

    //conversation id

    // return this.createBotRepository.startConversation({
    //   ...data,
    // })

    return new Conversation()
  }
}
