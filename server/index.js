const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { DB_CONNECTION } = require('./config/connection');

const jsonParser = bodyParser.json();

app.get('/getposts', async (req, res) => {
  //Pegando parâmetro de busca da query
  const { searchInput } = req.query;

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

app.post('/insertpost', jsonParser, async (req, res) => {
  const receivedData = req.body;

  console.log('receivedData', receivedData);

  const { title, author, description, category } = receivedData;

  //falta creation_date
  // const dateNow = new Date().toISOString();

  const Pool = require('pg').Pool;
  const pool = new Pool(DB_CONNECTION);

  pool.query(
    'INSERT INTO posts (title, author, description, category) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, author, description, category],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );

  // let result;
  // try {
  //   await client.connect();
  //   result = await client.query(queryString); // ILIKE é usadado para deixar a pesquisa "case-insensitive"
  // } catch (error) {
  //   console.log(`Ocorreu um erro ao tentar pegar posts do banco. ${error}`);
  // } finally {
  //   if (result && result.rows) res.json({ posts: result.rows });
  //   await client.end();
  // }

  // res.json(data)
});

// Inicia backend - escutando porta 5000
app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
});
