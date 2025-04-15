import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUseCase } from 'src/app/auth/application/use-cases/interfaces/login.use-case';
import { User } from 'src/app/auth/core/domain/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  email: string = 'test@hotmail.com';
  password: string = 'melody';

  constructor(
    private loginUseCase: LoginUseCase,
    private router: Router
  ) {}

  public onRegister(): void {
    this.loginUseCase.executeRegister(this.email, this.password).subscribe({
      next: (user: User) => {
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.error('Register failed', error)
      }
    })
  }
}
