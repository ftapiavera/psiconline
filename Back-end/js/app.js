const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
require('./database');

app.use(cors());
app.use(express.json());
app.use(require('./routes'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Se ha conectado al puerto ${port}`);
});
