## Teste full-stack developer (v1.2)
O teste consiste em criar uma aplicação com Node.js e PostgreSQL que expõe uma API REST de um CRUD de usuário e uma aplicação web contendo uma interface para login e acesso a dados de uma API externa.

### Back-end

#### Configuração Inicial
- Para iniciar a aplicação é necessário ter um banco de dados em PostgresSQL criado localmente. Configure o .env com as seguintes informações:

  `
    JWT_SECRET,
    DATABASE_URL,
    PORT
  `

Caso a porta não seja definida, a aplicação rodará automaticamente na porta 3000.

Para instalar as dependências, rode o comando `npm install`

Depois de feito as configurações acima, é necessário rodar a migration do banco de dados. Para isso, basta executar o comando: `npx prisma migrate dev`

Feita as configurações, a nossa aplicação já está pronta para ser executada. Basta rodas o comando `node server.js` dentro da pasta /src.
