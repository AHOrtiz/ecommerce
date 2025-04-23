import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutPageComponent } from './presentation/layout-page/layout-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './presentation/pages/login-page/login-page.component';
import { RegisterPageComponent } from './presentation/pages/register-page/register-page.component';
import { AuthRepository } from './core/repositories/auth.repository';
import { LoginUseCaseImpl } from './data/use-cases/login.use-case.impl';
import { AuthRepositoryImpl } from './data/repositories/auth.repository.impl';
import { AuthUseCase } from './core/use-cases/login.use-case';
import { TokenRepository } from './core/repositories/token.repository';
import { TokenRepositoryImpl } from './data/repositories/token.repository.impl';
import { TokenUseCase } from './core/use-cases/token.use-case';
import { TokenUseCaseImpl } from './data/use-cases/token.use-case.impl';

@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [
    // USES CASES
    { provide: AuthUseCase, useClass: LoginUseCaseImpl },
    { provide: AuthRepository, useClass: AuthRepositoryImpl },
    
    
    // REPOSITORIES
    { provide: TokenUseCase, useClass: TokenUseCaseImpl },
    { provide: TokenRepository, useClass: TokenRepositoryImpl }
  ]
})
export class AuthModule { }
