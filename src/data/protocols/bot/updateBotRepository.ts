export interface UpdateBotRepository {
  updateBot(
    id: string,
    newData: UpdateBotRepository.Params
  ): Promise<UpdateBotRepository.Result>
}

export namespace UpdateBotRepository {
  export type Params = { name: string }
  export type Result = Boolean | null
}
