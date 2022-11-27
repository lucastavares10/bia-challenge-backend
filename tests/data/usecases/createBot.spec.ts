import { BotModel } from '@/data/models'
import { CreateBotRepository } from '@/data/protocols/bot/createBotRepository'
import { FindByNameBotRepository } from '@/data/protocols/bot/findByNameBotRepository'
import { CreateBotUseCase } from '@/data/usecases/bot/createBot'

const makeCreateBotRepositoryStub = (): CreateBotRepository => {
  class CreateBotRepositoryStub implements CreateBotRepository {
    async createBot(
      params: CreateBotRepository.Params
    ): Promise<CreateBotRepository.Result> {
      return Promise.resolve(makeFakeBot())
    }
  }
  return new CreateBotRepositoryStub()
}

const makeFindByNameBotRepositoryStub = (): FindByNameBotRepository => {
  class FindByNameBotRepositoryStub implements FindByNameBotRepository {
    findByName(name: string): Promise<FindByNameBotRepository.Result> {
      return Promise.resolve(makeFakeAnotherBot())
    }
  }
  return new FindByNameBotRepositoryStub()
}

interface SutTypes {
  sut: CreateBotUseCase
  createBotRepositoryStub: CreateBotRepository
  findByNameBotRepositoryStub: FindByNameBotRepository
}

const makeSut = (): SutTypes => {
  const createBotRepositoryStub = makeCreateBotRepositoryStub()
  const findByNameBotRepositoryStub = makeFindByNameBotRepositoryStub()

  const sut = new CreateBotUseCase(
    createBotRepositoryStub,
    findByNameBotRepositoryStub
  )

  return {
    sut,
    createBotRepositoryStub,
    findByNameBotRepositoryStub,
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

describe('CreateBotUseCase', () => {
  test('Should throw if a invalid data', async () => {
    const { sut } = makeSut()
    let checkError: any

    try {
      await sut.execute({ name: '' })
    } catch (error) {
      checkError = error
    }

    expect(checkError.name).toBe('ParamRequired')
    expect(checkError.statusCode).toBe(400)
  })

  test('Should create bot', async () => {
    const { sut } = makeSut()

    const result = await sut.execute({ name: makeFakeBot().name })

    expect(result?.name).toEqual(makeFakeBot().name)
    expect(result?.id).toEqual(makeFakeBot().id)
  })

  test('Should return already user name bot', async () => {
    const { sut } = makeSut()

    let checkError: any

    try {
      await sut.execute({ name: makeFakeAnotherBot().name })
    } catch (error) {
      checkError = error
    }

    expect(checkError.name).toBe('AlreadyInUse')
    expect(checkError.statusCode).toBe(400)
  })

  test('Should verify use case use correct dependencies', async () => {
    const { sut, createBotRepositoryStub, findByNameBotRepositoryStub } =
      makeSut()

    const findByNameBotRepositorySpy = jest.spyOn(
      findByNameBotRepositoryStub,
      'findByName'
    )

    const createBotRepositorySpy = jest.spyOn(
      createBotRepositoryStub,
      'createBot'
    )

    await sut.execute({ name: makeFakeBot().name })

    expect(findByNameBotRepositorySpy).toHaveBeenCalledTimes(1)
    expect(createBotRepositorySpy).toHaveBeenCalledTimes(1)
  })
})
