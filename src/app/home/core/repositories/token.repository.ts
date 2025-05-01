import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export abstract class TokenRepository {
  abstract get(): string | null
  abstract remove(): void
 }
