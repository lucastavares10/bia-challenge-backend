import { Request, Response } from 'express'
import { IResponse, ResponseStatus } from '@/utils/service'
import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { UpdateBot } from '@/domain/usecases/bot/updateBot'
import { botYupValidationSchema } from './validation/yupSchemaValidation'
import { ParamRequired } from '@/data/errors/paramRequired'

export class UpdateBotController implements Controller {
  constructor(private readonly updateBotUseCase: UpdateBot) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const { id } = req.params

      if (!id) {
        throw new ParamRequired('Id é obrigatório!')
      }

      await botYupValidationSchema.validate(req.body, {
        abortEarly: false,
      })

      const updated = await this.updateBotUseCase.execute(id, req.body)
      return res.status(201).json({
        status: ResponseStatus.OK,
        data: updated,
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
