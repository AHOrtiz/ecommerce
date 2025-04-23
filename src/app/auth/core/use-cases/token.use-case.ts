export abstract class TokenUseCase {
  abstract save(token: string): void
  abstract get(): string | null
  abstract remove(): void
}
