const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.json({
    posts: [
      {
        id: 1,
        title: 'Crie uma rotina de banho para dormir',
        author: 'Persono',
        date: '12/10/2022',
        description:
          'O banho é um ótimo companheiro para nos acordar pelas manhãs, sobretudo quando começamos o dia bem cedo. Mas ele também pode ser perfeito para encerrar o dia, nos preparando para dormir.',
        category: 'SONO E CIÊNCIA',
      },
      {
        id: 2,
        title: 'Crie uma rotina de banho para dormir',
        author: 'Persono',
        date: '12/10/2022',
        description:
          'O banho é um ótimo companheiro para nos acordar pelas manhãs, sobretudo quando começamos o dia bem cedo. Mas ele também pode ser perfeito para encerrar o dia, nos preparando para dormir.',
        category: 'SONO E CIÊNCIA',
      },
    ],
  });
});

// Inicia backend - escutando porta 5000
app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
});
