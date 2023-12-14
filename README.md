# Site de Cadastro de Clientes

## Preparando ambiente

1. Faça download do repositório, seja por Git Clone ou ZIP

2. Crie um .env na pasta backend seguindo o .env.example (junto a isso, você precisará de um servidor postgres)

3. Abra o terminal na pasta principal do projeto e rode os seguintes comandos:

```shell
cd ./backend/
npm install
npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts
npm run typeorm migration:run -- -d ./src/data-source
npm run dev
```

4. Abra mais um terminal na pasta principal e rode os seguintes comandos:

```shell
cd ./frontend/
npm install
npm run dev
```

5. Pronto! O site deve estar rodando em http://localhost:5173/
