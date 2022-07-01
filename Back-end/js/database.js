"use strict";
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Base de datos conectada'))
    .catch((err) => console.log(err));

var db = mongoose.connection;