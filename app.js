const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routers/index');
const authRouter = require('./routers/auth');


app.use(indexRouter);
app.use(authRouter);

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug'); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})





