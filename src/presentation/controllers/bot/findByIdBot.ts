import { Request, Response } from 'express'
import { IResponse, ResponseStatus } from '@/utils/service'
import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { FindByIdBot } from '@/domain/usecases/bot/findByIdBot'
import { ParamRequired } from '@/data/errors/paramRequired'

export class FindByIdBotController implements Controller {
  constructor(private readonly findByIdBotUseCase: FindByIdBot) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const { id } = req.params

      const bot = await this.findByIdBotUseCase.execute(id)
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
