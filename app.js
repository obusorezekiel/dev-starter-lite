const mongoose = require('mongoose');
const express = require('express')
const app = express();

const indexRouter = require('./routers/index');
app.use(indexRouter);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})





