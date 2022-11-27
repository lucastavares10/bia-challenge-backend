export interface CreateUserSessionRepository {
  createUserSession(): Promise<string>
}
