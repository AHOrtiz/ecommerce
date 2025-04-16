import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/core/models/user.model';
import { AuthUseCase } from 'src/app/auth/core/use-cases/login.use-case';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = 'irwing@hotmail.com';
  password: string = 'melody';

  constructor(
    private loginUseCase: AuthUseCase,
    private router: Router
  ) {}

  public onLogin(): void {
    this.loginUseCase.login(this.email, this.password).subscribe({
      next: (user: User) => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed', error)
      }
    })
  }
}
