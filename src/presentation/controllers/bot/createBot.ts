import { Request, Response } from 'express'
import { IResponse, ResponseStatus } from '@/utils/service'
import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { CreateBot } from '@/domain/usecases/bot/createBot'
import { botYupValidationSchema } from './validation/yupSchemaValidation'

export class CreateBotController implements Controller {
  constructor(private readonly createBotUseCase: CreateBot) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      await botYupValidationSchema.validate(req.body, {
        abortEarly: false,
      })

      const bot = await this.createBotUseCase.execute(req.body)
      return res.status(201).json({
        status: ResponseStatus.OK,
        data: bot,
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
