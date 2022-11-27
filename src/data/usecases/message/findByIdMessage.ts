import { FindByIdMessage } from '@/domain/usecases/message/findByIdMessage'
import { FindByIdMessageRepository } from '@/data/protocols/message/findByIdMessageRepository'

export class FindByIdMessageUseCase implements FindByIdMessage {
  constructor(
    private readonly findByIdMessageRepository: FindByIdMessageRepository
  ) {}

  async execute(id: string): Promise<FindByIdMessage.Result> {
    return this.findByIdMessageRepository.findByIdMessage(id)
  }
}
