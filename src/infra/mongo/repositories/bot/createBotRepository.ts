import { CreateBotRepository } from '@/data/protocols/bot/createBotRepository'
import { FindByIdBotRepository } from '@/data/protocols/bot/findByIdBotRepository'
import { FindByNameBotRepository } from '@/data/protocols/bot/findByNameBotRepository'
import { FindAllBotRepository } from '@/data/protocols/bot/findAllBotRepository'
import { UpdateBotRepository } from '@/data/protocols/bot/updateBotRepository'
import { DeleteBotRepository } from '@/data/protocols/bot/deleteBotRepository'

import { AppDataSource } from '@/loaders'
import { Bot } from '../../entities/Bot'

export class BotRepository
  implements
    CreateBotRepository,
    FindByIdBotRepository,
    FindByNameBotRepository,
    FindAllBotRepository,
    UpdateBotRepository,
    DeleteBotRepository
{
  async createBot(
    data: CreateBotRepository.Params
  ): Promise<CreateBotRepository.Result> {
    const botRepository = AppDataSource.getRepository(Bot)

    return await botRepository.save(data)
  }

  async findById(id: string): Promise<FindByIdBotRepository.Result> {
    const botRepository = AppDataSource.getRepository(Bot)

    return await botRepository.findOne(id)
  }

  async findByName(name: string): Promise<FindByNameBotRepository.Result> {
    const botRepository = AppDataSource.getRepository(Bot)

    return await botRepository.findOne({ where: { name: name } })
  }

  async findAllBot(): Promise<FindAllBotRepository.Result> {
    const botRepository = AppDataSource.getRepository(Bot)

    return await botRepository.find()
  }

  async updateBot(
    id: string,
    newData: UpdateBotRepository.Params
  ): Promise<UpdateBotRepository.Result> {
    const botRepository = AppDataSource.getRepository(Bot)

    const bot = await botRepository.findOne(id)

    if (!bot) return null

    await botRepository.update(bot.id, newData)

    return true
  }

  async deleteBot(id: string): Promise<DeleteBotRepository.Result> {
    const botRepository = AppDataSource.getRepository(Bot)

    await botRepository.delete(id)

    return true
  }
}
