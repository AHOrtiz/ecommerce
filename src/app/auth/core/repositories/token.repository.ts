export abstract class TokenRepository {
  abstract save(token: string): void;
}