import { Component, OnInit } from '@angular/core';
import { CategoryUseCase } from 'src/app/home/core/use-cases/category.use-case';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(
    private categoryUseCase: CategoryUseCase
  ) {}

  public onLogin(): void {
    this.categoryUseCase.findAll().subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error) => {
        console.error('Login failed', error)
      }
    })
  }

  ngOnInit(): void {
    this.onLogin()
  }
}
