const express = require('express');
const app = express();
const port = 5000; // You can use any port you prefer

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
