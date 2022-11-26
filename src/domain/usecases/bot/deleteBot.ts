export interface DeleteBot {
  execute(id: string): Promise<DeleteBot.Result>
}

export namespace DeleteBot {
  export type Result = Boolean | null
}
