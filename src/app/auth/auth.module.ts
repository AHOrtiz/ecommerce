import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginUseCase } from './core/use-cases/login.use-case';
import { LoginUseCaseImpl } from './application/use-cases/login.use-case.impl';
import { AuthRepository } from './application/repositories/auth.repository';
import { AuthRepositoryImpl } from './infrastructure/repositories/auth.repository.impl';
import { LayoutPageComponent } from './presentation/pages/layout-page/layout-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './presentation/pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent
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
