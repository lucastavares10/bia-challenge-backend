import { Request, Response } from 'express'
import { IResponse, ResponseStatus } from '@/utils/service'
import ControllersExceptionHandler from '@/presentation/helpers/ControllersExceptionHandler'
import { Controller } from '@/presentation/protocols/controller'
import { FindByIdMessage } from '@/domain/usecases/message/findByIdMessage'
import { ParamRequired } from '@/data/errors/paramRequired'

export class FindByIdMessageController implements Controller {
  constructor(private readonly findByIdUseCase: FindByIdMessage) {}

  async handle(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const { id } = req.params

      if (!id) throw new ParamRequired('Id é obrigatório!')

      const message = await this.findByIdUseCase.execute(id)
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
