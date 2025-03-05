const app = require('express')();

app.listen(3000, () => console.log('server running'));

app.get('/skills', (req, res)=> {
    res.send('Primeira API teste');
    
})