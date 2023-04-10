# Menu Manager

## Sobre o projeto

Este é um projeto de gerenciamento de cardápios de restaurantes, utilizando as seguintes tecnologias e a razão de utilizar elas:

- Node.js: ambiente de execução JavaScript.
- TypeScript: linguagem de programação que adiciona suporte a tipos ao JavaScript.
- MongoDB: banco de dados NoSQL orientado a documentos.
- Express: framework para desenvolvimento de aplicações web.
- Jest: framework de testes unitários.
- CORS: middleware para permitir requisições de diferentes domínios.
- Supertest: biblioteca para testes de API.
- bcryptjs: biblioteca para criptografia de senhas.
- dotenv-safe: biblioteca para carregar variáveis de ambiente a partir de um arquivo .env.
- jsonwebtoken: biblioteca para autenticação e autorização de usuários com base em tokens JWT.




## Instalação

Antes de começar, você precisa ter instalado em sua máquina:

Node.js (versão 14 ou superior)
npm (ou yarn)
MongoDB (versão 4 ou superior)
Para instalar as dependências do projeto, execute o seguinte comando na raiz do projeto:

```bash
  npm install
```



## Executando a aplicação

Antes de executar a aplicação, crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

```bash
  PORT=<Porta na qual o servidor irá rodar>
  MONGODB_URI=<URL de conexão com o MongoDB>
  SECRET=<segredo para geração dos tokens JWT>
```

Substitua <Porta na qual o servidor irá rodar> pelo número da porta desejada, <URL de conexão com o MongoDB> pela URL de conexão com o seu banco de dados MongoDB e <segredo para geração dos tokens JWT> por um segredo de sua escolha para a geração dos tokens JWT.

Para executar a aplicação, execute o seguinte comando na raiz do projeto:

```bash
  npm run dev
```


A aplicação estará disponível em http://localhost:PORT.

<br>

### Endpoints

| Método | Endpoint                              | Corpo                                                                                                 | Descrição                                                                      | Observação                                                                                                             |
|--------|---------------------------------------|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| POST   | http://localhost:PORT/auth/login       | { "username": "admin", "password": "admin" }                                                       | Autenticação de usuário para login na aplicação.                               | O corpo também pode ser { "email": "email@admin.com", "password": "admin" }                                            |
| GET    | http://localhost:PORT/category         | Nenhum                                                                                                | Retorna uma lista de categorias disponíveis na aplicação.                       | Requer autenticação via token                                                                                          |
| POST   | http://localhost:PORT/product          | { "category": "643207e6044607b09801181f", "name": "lanchelot", "qty": 2, "price": 10.50 }             | Adiciona um novo produto na lista de produtos disponíveis.                     | Requer autenticação via token                                                                                          |
| GET    | http://localhost:PORT/product          | Nenhum                                                                                                | Retorna uma lista de produtos disponíveis na aplicação.                          | Requer autenticação via token                                                                                          |
| GET    | http://localhost:PORT/product/:id      | Nenhum                                                                                                | Retorna as informações de um produto específico.                                | Requer autenticação via token                                                                                          |
| PATCH  | http://localhost:PORT/product/:id      | { "category": "64320d91044607b098011820", "name": "lanchelote", "qty": 1, "price": 10.51 }            | Atualiza os dados de um produto específico.                                     | Requer autenticação via token. Todos os dados podem ser atualizados em conjunto ou individualmente                 |
| DELETE | http://localhost:PORT/product/:id      | Nenhum                                                                                                | Deleta um produto específico.                                                   | Requer autenticação via token                                                                                          |


<br>

## Executando os testes
Para executar os testes, execute o seguinte comando na raiz do projeto:

```bash
  npm test
```

Os testes foram escritos utilizando o framework Jest e estão localizados na pasta "test".



