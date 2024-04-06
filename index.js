const express = require('express');
const router = require('./routes/router');
const app = express();
const mongoose = require('mongoose');

// mongoose.connect('', ()=>console.log('Connected to db'));
app.use(express.json());
app.use('/api/user', router);


app.listen('3000', ()=>console.log('server running'));