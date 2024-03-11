const express = require('express');
const app = express();
const cors = require('cors');


// ==>Rotas da Api:
const index = require('./routes/index');
const userRoute = require('./routes/cliente.routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.json({type:'application/vnd.api+json'}));
app.use(cors());

app.use(index);
app.use('/api/',userRoute);

module.exports = app;