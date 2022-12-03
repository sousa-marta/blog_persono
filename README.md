
Blog Persono
=================


## Sobre o projeto
Blog persono é um projeto para exibição e criação de posts para o projeto Persono.


---

## Funcionalidades
- Listagem de posts;
- Cadastro de novo post salvando em banco de dados local;


---

## Como executar o projeto

Este projeto é divido em três partes:
1. Banco de dados local (PostgreSQL)
2. Backend (pasta server) 
3. Frontend (pasta client)

Para o Frontend funcionar corretamente é necessário que o Backend esteja rodando e o banco de dados PostgreSQL esteja configurado corretamente.

Primeiramente clone este repositório na sua máquina:
https://github.com/sousa-marta/blog_persono.git


### Criando database e tabela no banco de dados PostgreSQL
```bash
  Execute os scripts para criar a tabela necessária para a aplicação 

  -Dentro da interface do pgAdmin4, clique com o botão direito na database em branco e em seguida em "Restore..."
  -Encontre o arquivo no caminho /server/scripts/persono_blog.sql
  -Clique em "Restore"

  Caso tenha dificuldades esse vídeo explica o passo a passo: https://www.youtube.com/watch?v=S108Rh6XxPs
  Caso prefira, rode os comandos de criação de tabela manualmente

```



### Rodando o Backend (server)
```bash
# Crie um arquivo de connection.js com seus dados de conexão que você determinou quando criou o database no PostgreSQL na pasta /server/config:

const DB_CONNECTION = {
  user: 'aqui_vai_seu_usuario',
  password: 'aqui_vai_sua_senha',
  host: '127.0.0.1',
  port: 5432,  
  database: 'persono_blog',
};
exports.DB_CONNECTION = DB_CONNECTION;


# Acesse a pasta do projeto no terminal/cmd
$ cd blog_persono

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:5000
```


### Rodando o Frontend (client)
```bash
# Acesse a pasta do projeto no seu terminal/cmd
$ cd blog_persono

# Vá para a pasta da aplicação Front End
$ cd client

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000 para visualizar a aplicação
```


---


## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Client**  ([React](https://reactjs.org/) )

-   **[Axios](https://github.com/axios/axios)**
-   **[Styled-components](https://github.com/styled-components/styled-components)**
-   **[React-hook-form](https://github.com/react-hook-form/react-hook-form)**
-   **[React-bootstrap](https://github.com/react-bootstrap/react-bootstrap)**

#### **Server**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[PG](https://github.com/brianc/node-postgres)**
-   **[Nodemon](https://github.com/remy/nodemon)**

---

##  Autora
  Olá! Eu sou a Marta, amante da programação e curiosa por novas tecnologias. Sempre em busca de me aprimorar. Desenvolvedora Fullstack desde 2020. 
  Espero que curta essa pequena demo de aplicação de um blog :]

---

## Licença

Este projeto esta sobe a licença [MIT]

Feito com ❤️ por Marta Sousa [Entre em contato pelo LinkedIn!](https://www.linkedin.com/in/martadearaujosousa/)

---