const express = require('express');
const app = express();

// Rota GET simples
app.get('/skills', (req, res) => {
    res.send('Minhas habilidades: PHP, SQL, MySQL, Git, GitHub, Flask, Django, Java e C#');
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
