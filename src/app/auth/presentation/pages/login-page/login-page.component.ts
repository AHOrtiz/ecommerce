import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/core/models/user.model';
import { AuthUseCase } from 'src/app/auth/core/use-cases/login.use-case';
import { TokenUseCase } from 'src/app/auth/core/use-cases/token.use-case';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  password: string = '';

  constructor(
    private loginUseCase: AuthUseCase,
    private tokenUseCase: TokenUseCase,
    private router: Router
  ) {}

  public onLogin(): void {
    this.loginUseCase.login(this.email, this.password).subscribe({
      next: (user: User) => {
        this.tokenUseCase.save(user.token)
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed', error)
      }
    })
  }
}
