export interface DeleteBotRepository {
  deleteBot(id: string): Promise<DeleteBotRepository.Result>
}

export namespace DeleteBotRepository {
  export type Result = Boolean | null
}
