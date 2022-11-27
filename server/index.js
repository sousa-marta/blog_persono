const express = require('express');
const app = express();
const { DB_CONNECTION } = require('./config/connection');

app.get('/getposts', async (req, res) => {
  //Pegando parâmetro de busca da query
  const {searchInput} = req.query;

  //Caso usuário tenha digitado no campo de busca, filtrar por ele. Caso contrário, exibir todos itens do blog
  const queryString = searchInput
    ? `SELECT * FROM posts WHERE Title ILIKE '%${searchInput}%' `
    : 'SELECT * FROM posts';

  const Client = require('pg').Client;
  const client = new Client(DB_CONNECTION);

  let result;
  try {
    await client.connect();
    result = await client.query(queryString); // ILIKE é usadado para deixar a pesquisa "case-insensitive"
  } catch (error) {
    console.log(`Ocorreu um erro ao tentar pegar posts do banco. ${error}`);
  } finally {
    if (result && result.rows) res.json({ posts: result.rows });
    await client.end();
  }
});

// Inicia backend - escutando porta 5000
app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
});
