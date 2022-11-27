import { CreateUserSessionRepository } from '@/data/protocols/user/createUserSessionRepository'

import { AppDataSource } from '@/loaders'
import { UserSession } from '../../entities/UserSession'

export class UserRepository implements CreateUserSessionRepository {
  async createUserSession(): Promise<string> {
    const conversationRepository = AppDataSource.getRepository(UserSession)

    const session = await await conversationRepository.save({
      createdAt: new Date(),
    })

    return session.id
  }
}
