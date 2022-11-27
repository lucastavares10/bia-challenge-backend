import { FindAllByConversationIdMessage } from '@/domain/usecases/message/findAllByConversationIdMessage'
import { FindAllByConversationIdMessageRepository } from '@/data/protocols/message/findAllByConversationIdMessageRepository'

export class FindAllByConversationIdMessageUseCase
  implements FindAllByConversationIdMessage
{
  constructor(
    private readonly findAllByConversationIdMessageRepository: FindAllByConversationIdMessageRepository
  ) {}

  async execute(id: string): Promise<FindAllByConversationIdMessage.Result> {
    return this.findAllByConversationIdMessageRepository.findAllByConversationIdMessage(
      id
    )
  }
}
