# NestJS Template Project

## Overview

- This repository is a **template NestJS project** designed to provide a solid foundation for building scalable, maintainable backend applications using [NestJS](https://nestjs.com/). 
- It integrates TypeScript, Prisma ORM, Dockerized database management, Jest testing, and common developer tooling like ESLint and Prettier.

This project aims to streamline your development process by including:

- Ready-to-use npm scripts for build, start, test, lint, format, and database tasks.
- Prisma integration for database schema management and migrations.
- Docker Compose setup for a containerized database.
- Jest configuration for unit, coverage, and end-to-end testing.
- Clean, modular folder structure for scalability and maintainability.

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/radixdt2997/Nest-Application.git
   cd Nest-Application
   ```

2. **Set up your development environment**

   ```bash
   pnpm setup:dev
   ```

3. **Start the database**

   ```bash
   pnpm db:start
   ```

4. **Run the app in development mode**

   ```bash
   pnpm start:dev
   ```

5. **Run tests**

   ```bash
   pnpm test
   ```

---

## 📁 Folder Structure

```text
📦 Nest-Application/
├── 📂 prisma/                                    # Prisma ORM related files and database migrations
│   ├── 📂 migrations/                            # Database migration scripts folder
│   │   ├── 📂 20250522115739_init/               
│   │   │   └── 📄 migration.sql                  
│   │   └── 📄 migration_lock.toml                # Lock file for migration consistency
│   └── 📄 schema.prisma                          # Prisma schema defining data models and DB config
├── 📂 src/                                       # Source code of the application
│   ├── 📂 app/                                   # Main app module and controller files
│   │   ├── 📄 app.controller.spec.ts             
│   │   ├── 📄 app.controller.ts                  # Main app controller handling root routes
│   │   ├── 📄 app.module.ts                      # Root app module aggregating all modules
│   │   └── 📄 app.service.ts                     # Main app service with core business logic
│   ├── 📂 cats/                                  # Cats feature module (controller, service, types)
│   │   ├── 📄 cats.controller.ts                 # Cats API request handling
│   │   ├── 📄 cats.module.ts                     # Cats module definition
│   │   ├── 📄 cats.service.ts                    # Business logic for cats feature
│   │   ├── 📄 not-found.exception.ts             # Custom exception for cats not found
│   │   └── 📂 types/                             # Types used in cats module
│   │       ├── 📂 DTO/                           # Data Transfer Objects for cats API
│   │       │   └── 📄 catsApiDTO.ts
│   │       ├── 📄 cats.apiResponse.types.ts      # Types describing API responses
│   │       └── 📄 index.ts                       # Barrel file for exporting cats types
│   ├── 📂 common/                                # Common/shared utilities and filters
│   │   └── 📄 http-exception.filter.ts           # Global HTTP exception filter
│   ├── 📂 guard/                                 # Authorization and authentication guards
│   │   ├── 📂 auth/                              # Authentication guard files
│   │   │   └── 📄 auth.guard.ts
│   │   ├── 📄 index.ts                           # Barrel file for guards exports
│   │   └── 📂 roles/                             # Role-based access control files
│   │       ├── 📄 roles.decorator.ts
│   │       └── 📄 roles.guard.ts
│   ├── 📂 health/                                # Health check module for app status monitoring
│   │   ├── 📄 health.controller.ts
│   │   └── 📄 health.module.ts
│   ├── 📄 main.module.ts                         # Main module to bootstrap the application
│   ├── 📄 main.ts                                # Application entry point
│   ├── 📄 prisma.service.ts                      # Prisma client wrapper/service
│   ├── 📂 types/                                 # Global type definitions and extensions
│   │   └── 📄 express.d.ts                       # Express-related type extensions
│   └── 📂 users/                                 # Users feature module
│       ├── 📂 types/                             
│       │   ├── 📂 DTO/                           # DTOs for user login/signup
│       │   │   ├── 📄 loginUserDTO.ts
│       │   │   └── 📄 signupUserDTO.ts
│       │   ├── 📄 common.types.ts                # Common user-related types
│       │   ├── 📄 index.ts                       # Barrel file for user types
│       │   └── 📄 users.apiResponse.types.ts     # API response types for users
│       ├── 📄 user.decorator.ts                  # Custom decorators for user injection
│       ├── 📄 users.controller.ts                # Users API controller
│       ├── 📄 users.module.ts                    # Users module definition
│       └── 📄 users.service.ts                   # Business logic for users
├── 📂 test/                                      # End-to-end tests and test config
│   ├── 📄 app.e2e-spec.ts                        
│   └── 📄 jest-e2e.json                          
├── 📄 docker-compose.yml                         # Docker compose configuration for app services
├── 📄 eslint.config.mjs                          # ESLint configuration
├── 📄 nest-cli.json                              # NestJS CLI configuration
├── 📄 package.json                               # NPM package manifest
├── 📄 pnpm-lock.yaml                             # pnpm lockfile for dependency versions
├── 📄 tsconfig.build.json                        # TypeScript config for build process
└── 📄 tsconfig.json                              # TypeScript base config
```

---

## 🚀 Available Scripts

These scripts are designed to simplify your workflow. Run them using `pnpm <script-name>`.

### Start & Build

| Script             | Description                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------- |
| `pnpm build`       | Compile TypeScript source into JavaScript using NestJS. Outputs to the `dist/` folder.        |
| `pnpm start`       | Start the NestJS application normally (for production-ready apps).                            |
| `pnpm start:dev`   | Start the app in **watch mode** to auto-reload on file changes — ideal for development.       |
| `pnpm start:debug` | Start the app in **debug mode** with file watching enabled, useful when debugging with tools. |
| `pnpm start:prod`  | Run the compiled production build directly via Node.js (`dist/main.js`).                      |

---

### Linting & Formatting

| Script        | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| `pnpm lint`   | Run ESLint to check and automatically fix common code style issues.     |
| `pnpm format` | Format source code using Prettier for consistent style and readability. |

---

### Testing

| Script            | Description                                                                       |
| ----------------- | --------------------------------------------------------------------------------- |
| `pnpm test`       | Run all unit tests using Jest.                                                    |
| `pnpm test:watch` | Continuously run tests on file changes — great for test-driven development (TDD). |
| `pnpm test:cov`   | Run tests and generate code coverage reports.                                     |
| `pnpm test:debug` | Run tests with Node.js debugging enabled, ideal for debugging test failures.      |
| `pnpm test:e2e`   | Run end-to-end tests using a dedicated Jest configuration (`test/jest-e2e.json`). |

---

### Prisma (Database ORM)

| Script                       | Description                                                                       |
| ---------------------------- | --------------------------------------------------------------------------------- |
| `pnpm prisma:generate`       | Generate Prisma client based on the current schema. Run after any schema changes. |
| `pnpm prisma:studio`         | Launch Prisma Studio — a GUI to browse and manage your database visually.         |
| `pnpm prisma:migrate`        | Apply database migrations to sync schema changes (without running seeds).         |
| `pnpm prisma:migrate:create` | Create a new migration file without applying it yet. Example usage:               |
|                              | `pnpm prisma:migrate:create init`                                                 |

---

### Database Management (via Docker Compose)

| Script            | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| `pnpm db:start`   | Start the database container in detached mode.                 |
| `pnpm db:rm`      | Stop and remove the database container (useful for resets).    |
| `pnpm db:refresh` | Restart the database container by removing and starting again. |

---

### Dependency Management

| Script            | Description                                     |
| ----------------- | ----------------------------------------------- |
| `pnpm dep:check`  | Check for outdated dependencies recursively.    |
| `pnpm dep:update` | Update all outdated dependencies and reinstall. |

---

### Project Maintenance

| Script           | Description                                                                             |
| ---------------- | --------------------------------------------------------------------------------------- |
| `pnpm cleanup`   | Clean project by deleting build, coverage, generated files, node_modules, and lockfile. |
| `pnpm setup:dev` | Install dependencies and generate Prisma client.                                        |

---
