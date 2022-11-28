import { SendMessage } from '@/domain/usecases/message/sendMessage'

export class SendSocketMessageController {
  constructor(private readonly sendMessageUseCase: SendMessage) {}

  async handle(data: any): Promise<void> {
    try {
      await this.sendMessageUseCase.execute(data)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject()
    }
  }
}
