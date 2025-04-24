import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/core/models/user.model';
import { AuthUseCase } from 'src/app/auth/core/use-cases/login.use-case';
import { TokenUseCase } from 'src/app/auth/core/use-cases/token.use-case';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  email: string = 'test@hotmail.com';
  password: string = 'Melody123$';
  username: string = 'melody';

  constructor(
    private loginUseCase: AuthUseCase,
    private tokenUseCase: TokenUseCase,
    private router: Router
  ) {}

  public onRegister(): void {
    this.loginUseCase.register(this.email, this.password, this.username).subscribe({
      next: (user: User) => {
        this.tokenUseCase.save(user.token)
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.error('Register failed', error)
      }
    })
  }
}
