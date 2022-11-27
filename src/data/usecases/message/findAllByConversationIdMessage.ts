import { FindAllByConversationIdMessage } from '@/domain/usecases/message/findAllByConversationIdMessage'
import { FindAllByConversationIdMessageRepository } from '@/data/protocols/message/findAllByConversationIdMessageRepository'
import { ParamRequired } from '@/data/errors/paramRequired'

export class FindAllByConversationIdMessageUseCase
  implements FindAllByConversationIdMessage
{
  constructor(
    private readonly findAllByConversationIdMessageRepository: FindAllByConversationIdMessageRepository
  ) {}

  async execute(id: string): Promise<FindAllByConversationIdMessage.Result> {
    if (!id) {
      throw new ParamRequired('Query param conversationId é obrigatório!')
    }

    return this.findAllByConversationIdMessageRepository.findAllByConversationIdMessage(
      id
    )
  }
}
