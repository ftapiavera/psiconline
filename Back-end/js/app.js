require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
require('./database');

app.use(cors());
app.use(express.json());
app.use(require('./routes'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(process.env.DB_HOST, () => {
    console.log(`Se ha conectado al puerto ${process.env.DB_HOST}`);
});
