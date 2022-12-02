const express = require('express');
const bodyParser = require('body-parser');
const { DB_CONNECTION } = require('./config/connection');

const app = express();
const jsonParser = bodyParser.json();

const Pool = require('pg').Pool;
const pool = new Pool(DB_CONNECTION);

app.get('/getposts', async (req, res) => {
  //Pegando parâmetro de busca da query
  const { searchInput } = req.query;

  //Caso usuário tenha digitado no campo de busca, filtrar por ele. Caso contrário, exibir todos itens do blog
  // ILIKE é usadado para deixar a pesquisa "case-insensitive"
  const queryString = searchInput
    ? `SELECT * FROM posts WHERE Title ILIKE '%${searchInput}%' ORDER BY id DESC`
    : 'SELECT * FROM posts ORDER BY id DESC';

  let result;
  try {
    result = await pool.query(queryString);
  } catch (error) {
    console.log(`Ocorreu um erro ao tentar pegar posts do banco. ${error}`);
  } finally {
    if (result && result.rows) res.json({ posts: result.rows });
  }
});

app.post('/insertpost', jsonParser, async (req, res) => {
  const { title, author, description, category } = req.body;

  pool.query(
    'INSERT INTO posts (title, author, description, category) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, author, description, category],
    (error, results) => {
      if (error) {
        throw error;
      }
      //Retorna id da linha criada
      res.json(results.rows[0].id);
    }
  );
});

// Inicia backend - escutando porta 5000
app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
});
