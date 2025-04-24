export abstract class TokenRepository {
  abstract save(token: string): void;
  abstract get(): string | null;
  abstract remove(): void;
}