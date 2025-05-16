# Folder Structure

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
