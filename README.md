# Amazon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Run application

Run `npm start` for a dev server and initialise database. 
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Back-End repository
  Run
``https://github.com/AHOrtiz/Amazon---Nest``

## DataBase

- `http://localhost:3000/users`   
- `http://localhost:3000/products`
- `http://localhost:3000/cart`    
- `http://localhost:3000/orders`
- `http://localhost:3000/categories`

## Module Structure

```bash
app/
├── auth/                    # Modulo de Autenticacion
│   ├── core/                # Capa de dominio y servicios globales
│   │   ├── models/          # Entidades y modelos de dominio
│   │   ├── use-cases/       # Casos de uso (lógica de negocio)
│   │   └── repositories/    # Repositorios (lógica de negocio)
│   ├── data/                # Capa de datos
│   │   ├── repositories/    # Implementaciones de repositorios
│   │   └── use-cases/       # Implementaciones de casos de uso
│   ├── presentacion/        # Capa de presentacion
│   │   ├── layout-page/     # Pagina que routea a pagians internas
│   │   ├── pages/           # 
│   │   │   ├── login/       # Pagina de Login de Usuario
│   │   │   └── register/    # Pagina de Registro de usuario
│   │   └── user/            # Funcionalidad de usuarios
│   ├── app-routing.module.ts # Configuración de rutas principales
│   └── app.module.ts        # Módulo
```
