import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/core/models/user.model';
import { AuthUseCase } from 'src/app/auth/core/use-cases/login.use-case';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  email: string = 'test@hotmail.com';
  password: string = 'melody';

  constructor(
    private loginUseCase: AuthUseCase,
    private router: Router
  ) {}

  public onRegister(): void {
    this.loginUseCase.register(this.email, this.password).subscribe({
      next: (user: User) => {
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.error('Register failed', error)
      }
    })
  }
}
