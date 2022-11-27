import { Request, Response } from 'express'
import { IResponse, ResponseStatus } from '@/utils/service'
import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { FindAllByConversationIdMessage } from '@/domain/usecases/message/findAllByConversationIdMessage'

export class FindAllByConversationIdMessageController implements Controller {
  constructor(
    private readonly findAllByConversationIdMessageUseCase: FindAllByConversationIdMessage
  ) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const { conversationId } = req.query

      const listMessage =
        await this.findAllByConversationIdMessageUseCase.execute(
          conversationId as string
        )
      return res.status(200).json({
        status: ResponseStatus.OK,
        data: listMessage,
      })
    } catch (error) {
      const { statusCode, status, message } =
        ControllersExceptionHandler.handleError(error as Error)

      return res.status(statusCode).json({
        status,
        message,
      })
    }
  }
}
