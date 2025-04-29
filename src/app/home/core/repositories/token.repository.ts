import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export abstract class TokenRepository {
  abstract get(): String | null
  abstract remove(): void
 }
