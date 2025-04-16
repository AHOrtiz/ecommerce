# Amazon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Run application

Run `npm start` for a dev server and initialise database. 
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## DataBase

- `http://localhost:3000/users`   
- `http://localhost:3000/products`
- `http://localhost:3000/cart`    
- `http://localhost:3000/orders`
- `http://localhost:3000/categories`

## Module Structure
├── app
|  ├── app-initialization.module.ts
|  ├── app-routing.module.ts
|  ├── app.component.html
|  ├── app.component.scss
|  ├── app.component.spec.ts
|  ├── app.component.ts
|  ├── app.config.ts
|  ├── app.constant.ts
|  ├── app.module.ts
|  ├── core
|  |  ├── auth
|  |  |  ├── auth.module.ts
|  |  |  ├── guards
|  |  |  ├── helpers
|  |  |  |  ├── auth-interceptor.ts
|  |  |  |  ├── error-interceptor.ts
|  |  |  |  ├── fake-backend.ts
|  |  |  |  └── jwt-interceptor.ts
|  |  |  ├── services
|  |  |  └── types
|  |  └── core.module.ts
|  ├── features
|  |  └── feature-example
|  |     ├── components
|  |     |  └── component-example
|  |     |     └── README.md
|  |     ├── containers
|  |     |  └── container-example
|  |     |     └── README.md
|  |     ├── feature-example-routing.module.ts
|  |     ├── feature-example.config.ts
|  |     ├── feature-example.constants.ts
|  |     ├── feature-example.module.ts
|  |     ├── helpers
|  |     |  └── example.helpers.ts
|  |     ├── services
|  |     |  └── example.service.ts
|  |     ├── store
|  |     |  ├── feature-example.actions.ts
|  |     |  ├── feature-example.effects.ts
|  |     |  ├── feature-example.reducers.ts
|  |     |  ├── feature-example.selectors.ts
|  |     |  └── index.ts
|  |     ├── types
|  |     |  └── example.ts
|  |     └── views
|  |        └── view-example
|  |           └── README.md
|  ├── layout
|  |  ├── footer
|  |  ├── header
|  |  |  ├── header.component.html
|  |  |  ├── header.component.scss
|  |  |  └── header.component.ts
|  |  ├── layout.module.ts
|  |  └── nav
|  |     ├── nav.component.html
|  |     ├── nav.component.scss
|  |     └── nav.component.ts
|  ├── shared
|  |  ├── components
|  |  |  ├── complex-component-example
|  |  |  |  ├── complex.component.html
|  |  |  |  ├── complex.component.scss
|  |  |  |  ├── complex.component.ts
|  |  |  |  ├── complex.module.ts
|  |  |  |  ├── components
|  |  |  |  |  ├── example-type.ts
|  |  |  |  |  ├── sub.component.html
|  |  |  |  |  ├── sub.component.scss
|  |  |  |  |  └── sub.component.ts
|  |  |  |  └── types
|  |  |  |     └── type-example.ts
|  |  |  └── simple-component-example
|  |  |     ├── example-type.ts
|  |  |     ├── simple.component.html
|  |  |     ├── simple.component.scss
|  |  |     └── simple.component.ts
|  |  ├── directives
|  |  |  └── directive-example.directive.ts
|  |  ├── helpers
|  |  |  └── helpers-example.helpers.ts
|  |  ├── pipes
|  |  |  └── pipe-example.pipe.ts
|  |  ├── shared.module.ts
|  |  └── types
|  |     └── type-example.ts
|  ├── styles
|  |  ├── base.scss
|  |  ├── reset.scss
|  |  └── variables.scss
|  └── views
|     ├── page-not-found
|     |  ├── page-not-found.view.html
|     |  ├── page-not-found.view.scss
|     |  └── page-not-found.view.ts
|     └── views.module.ts
├── assets
├── environments
|  ├── environment.prod.ts
|  └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
└── test.ts