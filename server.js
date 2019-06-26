const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('express funcionando normal');
});

app.listen(process.env.PORT || 3000, () => console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`));
