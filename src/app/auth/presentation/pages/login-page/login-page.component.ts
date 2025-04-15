import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/core/domain/user.model';
import { LoginUseCase } from 'src/app/auth/core/use-cases/login.use-case';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = 'irwing@hotmail.com';
  password: string = 'melody';

  constructor(
    private loginUseCase: LoginUseCase,
    private router: Router
  ) {}

  public onLogin(): void {
    this.loginUseCase.execute(this.email, this.password).subscribe({
      next: (user: User) => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed', error)
      }
    })
  }
}
