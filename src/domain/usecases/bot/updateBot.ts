export interface UpdateBot {
  execute(id: string, newData: UpdateBot.Params): Promise<UpdateBot.Result>
}

export namespace UpdateBot {
  export type Params = { name: string }
  export type Result = Boolean | null
}
