const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.json());

const bodyParser=require('body-parser');

const path = require("path");
app.use(bodyParser.urlencoded({extended:false}));

app.listen(port , () => {
    console.log('Now listening on port http://localhost:${port}');
});
