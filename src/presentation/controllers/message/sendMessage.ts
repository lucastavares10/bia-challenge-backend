import { Request, Response } from 'express'
import { IResponse, ResponseStatus } from '@/utils/service'
import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { SendMessage } from '@/domain/usecases/message/sendMessage'
import { messageYupValidationSchema } from '../validation/yupSchemaValidation'

export class SendMessageController implements Controller {
  constructor(private readonly sendMessageUseCase: SendMessage) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      await messageYupValidationSchema.validate(req.body, {
        abortEarly: false,
      })

      const message = await this.sendMessageUseCase.execute(req.body)
      return res.status(201).json({
        status: ResponseStatus.OK,
        data: message,
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
