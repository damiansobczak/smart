const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const app = express();

const statistics = require('./routes/statistics');
const temperature = require('./routes/temperature');
const reports = require('./routes/reports');
const machine = require('./routes/machine');

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/statistics', statistics);
app.use('/temperature', temperature);
app.use('/reports', reports);
app.use('/machine', machine);

app.get('/', (req, res) => {
    res.send("We are on home");
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("DB Connected!"));

app.listen(3002);