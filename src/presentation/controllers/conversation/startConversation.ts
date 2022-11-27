import { Request, Response } from 'express'
import { IResponse, ResponseStatus } from '@/utils/service'
import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { StartConversation } from '@/domain/usecases/conversation/startConversation'
import { conversationYupValidationSchema } from '../validation/yupSchemaValidation'

export class StartConversationController implements Controller {
  constructor(private readonly startConversationUseCase: StartConversation) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      await conversationYupValidationSchema.validate(req.body, {
        abortEarly: false,
      })

      const conversation = await this.startConversationUseCase.execute(req.body)
      return res.status(201).json({
        status: ResponseStatus.OK,
        data: conversation,
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
