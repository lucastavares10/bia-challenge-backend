import { Request, Response } from 'express'
import { IResponse, ResponseStatus } from '@/utils/service'
import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { FindAllBot } from '@/domain/usecases/bot/findAllBot'

export class FindAllBotController implements Controller {
  constructor(private readonly findAllBotUseCase: FindAllBot) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const bot = await this.findAllBotUseCase.execute()
      return res.status(200).json({
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
