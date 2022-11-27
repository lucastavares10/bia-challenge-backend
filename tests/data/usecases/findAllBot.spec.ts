import { BotModel } from '@/data/models'
import { FindAllBotRepository } from '@/data/protocols/bot/findAllBotRepository'
import { FindAllBotUseCase } from '@/data/usecases/bot/findAllBot'

const makeFindAllBotRepositoryStub = (): FindAllBotRepository => {
  class FindAllBotRepositoryStub implements FindAllBotRepository {
    async findAllBot(): Promise<FindAllBotRepository.Result> {
      return Promise.resolve(makeFakeBot())
    }
  }
  return new FindAllBotRepositoryStub()
}

interface SutTypes {
  sut: FindAllBotUseCase
  findAllBotRepositoryStub: FindAllBotRepository
}

const makeSut = (): SutTypes => {
  const findAllBotRepositoryStub = makeFindAllBotRepositoryStub()

  const sut = new FindAllBotUseCase(findAllBotRepositoryStub)

  return {
    sut,
    findAllBotRepositoryStub,
  }
}

const makeFakeBot = (): BotModel[] => [
  {
    name: 'Ghost Bot',
    id: '12345',
  },
  {
    name: 'Devil Bot',
    id: '12346',
  },
]

describe('FindAllBotUseCase', () => {
  test('Should find all bot', async () => {
    const { sut } = makeSut()

    const result = await sut.execute()

    expect(result).toEqual(makeFakeBot())
  })

  test('Should verify use case use correct dependencies', async () => {
    const { sut, findAllBotRepositoryStub } = makeSut()

    const findAllBotRepositorySpy = jest.spyOn(
      findAllBotRepositoryStub,
      'findAllBot'
    )

    await sut.execute()

    expect(findAllBotRepositorySpy).toHaveBeenCalledTimes(1)
  })
})
