const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes= require('./src/route')
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());



app.use('/', routes);

app.listen(PORT, () => {
console.log(`Server Running on port: ${PORT}`);
});
