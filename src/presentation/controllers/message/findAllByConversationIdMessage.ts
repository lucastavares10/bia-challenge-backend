import { Request, Response } from 'express'
import { IResponse, ResponseStatus } from '@/utils/service'
import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { FindAllByConversationIdMessage } from '@/domain/usecases/message/findAllByConversationIdMessage'
import { ParamRequired } from '@/data/errors/paramRequired'

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

      if (!conversationId)
        throw new ParamRequired('Query param conversationId é obrigatório!')

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
