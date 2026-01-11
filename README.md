api-playwright-auth-fixtures

Projeto de automação de testes de API com Playwright, utilizando a API REST ServeRest como backend de testes, com foco em boas práticas, organização por camadas e uso de fixtures autenticadas.

🚀 Objetivo

Demonstrar a criação de um framework de testes de API com Playwright, aplicando conceitos como:

Autenticação via token

Reutilização de contexto autenticado

Separação de responsabilidades (services, fixtures, utils)

Código escalável e de fácil manutenção

🌐 API Utilizada

ServeRest
API REST pública para estudos e testes de automação
🔗 https://serverest.dev

🧰 Tecnologias e Ferramentas

Playwright

JavaScript (ESM)

Node.js

Faker

API REST (ServeRest)

▶️ Execução dos Testes

Instalar dependências:

npm install

Executar testes:

npx playwright test

Executar com relatório HTML:

npx playwright test --reporter=html
