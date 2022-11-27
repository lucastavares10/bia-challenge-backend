export interface ResponsesTextGeneratorRepository {
  generateInitialMessage(): Promise<string>
  generateRandomMessage(): Promise<string>
}
