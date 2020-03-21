const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const app = express();

const statisticsRoute = require('./routes/statistics');
const temperatureRoute = require('./routes/temperature');
const reportsRoute = require('./routes/reports');
const machineRoute = require('./routes/machine');

app.use(bodyParser.json());
app.use('/statistics', statisticsRoute);
app.use('/temperature', temperatureRoute);
app.use('/reports', reportsRoute);
app.use('/machine', machineRoute);

app.get('/', (req, res) => {
    res.send("We are on home");
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log("DB Connected!"));

app.listen(3002);