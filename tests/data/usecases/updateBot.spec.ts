import { BotModel } from '@/data/models'
import { FindByIdBotRepository } from '@/data/protocols/bot/findByIdBotRepository'
import { UpdateBotRepository } from '@/data/protocols/bot/updateBotRepository'
import { UpdateBotUseCase } from '@/data/usecases/bot/updateBot'

const makeFindByIdBotRepositoryStub = (): FindByIdBotRepository => {
  class FindByIdBotRepositoryStub implements FindByIdBotRepository {
    async findById(id: string): Promise<FindByIdBotRepository.Result> {
      return Promise.resolve(makeFakeBot())
    }
  }
  return new FindByIdBotRepositoryStub()
}

const makeUpdateBotRepositoryStub = (): UpdateBotRepository => {
  class UpdateBotRepositoryStub implements UpdateBotRepository {
    async updateBot(
      id: string,
      data: UpdateBotRepository.Params
    ): Promise<UpdateBotRepository.Result> {
      return Promise.resolve(true)
    }
  }
  return new UpdateBotRepositoryStub()
}

interface SutTypes {
  sut: UpdateBotUseCase
  findByIdBotRepositoryStub: FindByIdBotRepository
  updateBotRepositoryStub: UpdateBotRepository
}

const makeSut = (): SutTypes => {
  const findByIdBotRepositoryStub = makeFindByIdBotRepositoryStub()
  const updateBotRepositoryStub = makeUpdateBotRepositoryStub()

  const sut = new UpdateBotUseCase(
    findByIdBotRepositoryStub,
    updateBotRepositoryStub
  )

  return {
    sut,
    findByIdBotRepositoryStub,
    updateBotRepositoryStub,
  }
}

const makeFakeBot = (): BotModel => ({
  name: 'Ghost Bot',
  id: '12345',
})

const makeFakeAnotherBot = (): BotModel => ({
  name: 'Devil Bot',
  id: '12346',
})

describe('UpdateUseCase', () => {
  test('Should throw if a invalid data', async () => {
    const { sut } = makeSut()
    let checkError: any

    try {
      await sut.execute({})
    } catch (error) {
      checkError = error
    }

    expect(checkError.name).toBe('ParamRequired')
    expect(checkError.statusCode).toBe(400)
  })

  test('Should update bot', async () => {
    const { sut } = makeSut()

    const result = await sut.execute(makeFakeBot().id, makeFakeBot())

    expect(result).toEqual(true)
  })

  test('Should return not found bot', async () => {
    const { sut } = makeSut()

    let checkError: any

    try {
      await sut.execute(makeFakeAnotherBot().id, makeFakeAnotherBot())
    } catch (error) {
      checkError = error
    }

    expect(checkError.name).toBe('NotFound')
    expect(checkError.statusCode).toBe(404)
  })

  test('Should verify use case use correct dependencies', async () => {
    const { sut, findByIdBotRepositoryStub, updateBotRepositoryStub } =
      makeSut()

    const findByIdBotRepositorySpy = jest.spyOn(
      findByIdBotRepositoryStub,
      'findById'
    )

    const updateBotRepositorySpy = jest.spyOn(
      updateBotRepositoryStub,
      'updateBot'
    )

    await sut.execute(makeFakeBot().id, makeFakeBot())

    expect(findByIdBotRepositorySpy).toHaveBeenCalledTimes(1)
    expect(updateBotRepositorySpy).toHaveBeenCalledTimes(1)
  })
})
