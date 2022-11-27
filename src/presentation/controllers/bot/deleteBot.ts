import { Request, Response } from 'express'
import { IResponse, ResponseStatus } from '@/utils/service'
import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { DeleteBot } from '@/domain/usecases/bot/deleteBot'
import { ParamRequired } from '@/data/errors/paramRequired'

export class DeleteBotController implements Controller {
  constructor(private readonly deleteBotUseCase: DeleteBot) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const { id } = req.params

      if (!id) {
        throw new ParamRequired('Id é obrigatório!')
      }

      const deleted = await this.deleteBotUseCase.execute(id)
      return res.status(204).json({
        status: ResponseStatus.OK,
        data: deleted,
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
