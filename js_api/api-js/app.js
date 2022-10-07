const cors = require('cors');
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const middleware = require('./utils/middleware');

const accountRouter = require("./routes/account");
const networkRouter = require("./routes/network");
const gasRouter = require("./routes/gas");

const app = express();

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use(morgan('dev'));

app.use('/api/v1/account', accountRouter);
app.use('/api/v1/network', networkRouter);
app.use('/api/v1/gas', gasRouter);

// app.use(middleware.error_handler);
// app.use(middleware.unknown_endpoint);

module.exports = app;