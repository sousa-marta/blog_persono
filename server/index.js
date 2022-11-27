const express = require('express');
const app = express();
const { DB_CONNECTION } = require('./config/connection');

app.get('/api', async (req, res) => {
  const Client = require('pg').Client;
  const client = new Client(DB_CONNECTION);

  let result;
  try {
    await client.connect();
    result = await client.query(
      "SELECT * FROM posts WHERE Title ILIKE '%' || 'crie' || '%' "
    ); // ILIKE é usadado para deixar a pesquisa "case-insensitive"
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
