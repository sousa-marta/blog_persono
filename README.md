Aqui vão informações e instruções sobre projeto


-Rascunho

- Criar arquivo de config/connection.js com estrutura:

const DB_CONNECTION = {
  user: 'aqui_vai_seu_usuario',
  password: 'aqui_vai_sua_senha',
  host: '127.0.0.1',
  port: 5432,
  database: 'persono_blog',
};
exports.DB_CONNECTION = DB_CONNECTION;
