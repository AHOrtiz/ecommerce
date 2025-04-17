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
    { provide: AuthUseCase, useClass: LoginUseCaseImpl },
    { provide: AuthRepository, useClass: AuthRepositoryImpl }
  ]
})
export class AuthModule { }
