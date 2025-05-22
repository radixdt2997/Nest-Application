# NestJS Project

## 📜 PNPM Scripts Guide

This project includes helpful scripts to build, test, manage the database, and maintain code quality. Here’s what each one does in plain language:

### 🚀 Start & Build

| Script             | What it does                                                                                        |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| `pnpm build`       | Compiles the TypeScript code into JavaScript using NestJS. Output goes into the `dist/` folder.     |
| `pnpm start`       | Starts the NestJS app normally (for production-ready builds).                                       |
| `pnpm start:dev`   | Starts the app in **watch mode** – automatically restarts when files change. Great for development. |
| `pnpm start:debug` | Starts the app in **debug mode** with file watching enabled. Useful for debugging tools.            |
| `pnpm start:prod`  | Runs the built app (`dist/main.js`) directly with Node.js. Use this in production environments.     |

---

### 🧹 Linting & Formatting

| Script        | What it does                                                               |
| ------------- | -------------------------------------------------------------------------- |
| `pnpm lint`   | Fixes and checks TypeScript files for common coding mistakes using ESLint. |
| `pnpm format` | Formats code nicely using Prettier so it’s easier to read.                 |

---

### 🧪 Testing

| Script            | What it does                                                               |
| ----------------- | -------------------------------------------------------------------------- |
| `pnpm test`       | Runs all tests using Jest.                                                 |
| `pnpm test:watch` | Keeps running tests every time you save a file. Useful during development. |
| `pnpm test:cov`   | Runs tests and shows how much of the code is covered by tests.             |
| `pnpm test:debug` | Runs tests with debugging enabled (used with VSCode or Chrome DevTools).   |
| `pnpm test:e2e`   | Runs end-to-end tests using a special config (`test/jest-e2e.json`).       |

---

### 🛠️ Prisma (Database Tool)

| Script                       | What it does                                                                           |
| ---------------------------- | -------------------------------------------------------------------------------------- |
| `pnpm prisma:generate`       | Generates Prisma client from your schema. Run this after making changes to the schema. |
| `pnpm prisma:studio`         | Opens Prisma Studio (a visual database browser in your browser).                       |
| `pnpm prisma:migrate`        | Applies new database migrations (skips seeding).                                       |
| `pnpm prisma:migrate:create` | Creates a new migration file. Example: `pnpm prisma:migrate:create init`               |

---

### 🐳 Database via Docker

| Script          | What it does                                                      |
| --------------- | ----------------------------------------------------------------- |
| `pnpm db:start` | Starts the database using Docker Compose.                         |
| `pnpm db:rm`    | Stops and removes the database container. Useful to reset things. |

---

### 📦 Dependency Tools

| Script            | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `pnpm dep:check`  | Checks if there are newer versions of dependencies. |
| `pnpm dep:update` | Updates all outdated packages and reinstalls them.  |

---

### 🧼 Project Maintenance

| Script           | What it does                                                      |
| ---------------- | ----------------------------------------------------------------- |
| `pnpm cleanup`   | Cleans up the project for a fresh start.                          |
| `pnpm setup:dev` | Setting up the project for development after cleanup or new start |

---

## Folder Structure

```text
📦 project-root/
├── 📂 src/
|   ├── 📂 app/
|   │   ├── 📄 app.controller.spec.ts
|   │   ├── 📄 app.controller.ts
|   │   ├── 📄 app.module.ts
|   │   └── 📄 app.service.ts
|   ├── 📂 cats/                           # Cats module
|   │   ├── 📄 cat.module.ts
|   │   ├── 📄 cats.controller.ts
|   │   ├── 📄 cats.service.ts
|   │   ├── 📂 dto/
|   │   │    └── 📄 catAPI.dto.ts
|   │   └── 📄 not-found.exception.ts
|   ├── 📂 common/                         # Shared utilities and services
|   │   └── 📄 http-exception.filter.ts
|   ├── 📂 auth/                           # Authentication module
|   |   ├── 📄 auth.module.ts
|   |   ├── 📄 auth.controller.ts
|   |   ├── 📄 auth.service.ts
|   |   ├── 📂 dto/
|   |   │   ├── 📄 login.dto.ts
|   |   │   └── 📄 register.dto.ts
|   |   ├── 📂 strategies/
|   |   |   └── 📄 jwt.strategy.ts
|   ├── 📄 main.module.ts
|   └── 📄 main.ts
├── 📂 test/                               # Unit and integration tests
|   ├── 📄 app.e2e-spec.ts
|   └── 📄 jest-e2e.json
├── 📄 .env                                # Secret variables
├── 📄 .prettierrc                         # Prettier Configuration
├── 📄 docker-compose.yml                  # Docker Compose for postgres image
├── 📄 nest-cli.json                       # NestJS Configuration
└── 📄 package.json                        # Scripts to run
```
