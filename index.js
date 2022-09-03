const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const userRoutes = require('./src/routes/users');
app.use('/', userRoutes);

app.listen(port, ()=>{
    console.log(`API Running at http://localhost:${port}`);
});