const express = require('express');

const app = express();


// Inicia backend - escutando porta 5000
app.listen(5000, () => {console.log('Servidor iniciado na porta 5000');})