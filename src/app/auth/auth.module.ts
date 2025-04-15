import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginUseCase } from './application/use-cases/interfaces/login.use-case';
import { LoginUseCaseImpl } from './application/use-cases/login.use-case.impl';
import { AuthRepository } from './application/repositories/interfaces/auth.repository';
import { AuthRepositoryImpl } from './application/repositories/auth.repository.impl';
import { LayoutPageComponent } from './presentation/pages/layout-page/layout-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './presentation/pages/login-page/login-page.component';
import { RegisterPageComponent } from './presentation/pages/register-page/register-page.component';

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
    { provide: LoginUseCase, useClass: LoginUseCaseImpl },
    { provide: AuthRepository, useClass: AuthRepositoryImpl }
  ]
})
export class AuthModule { }
