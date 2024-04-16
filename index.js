const express = require('express');
const app = express();
const port = 5000; // You can use any port you prefer

app.get('/', (req, res) => {
    try {
        res.send('Hello World!'); 
    } catch (error) {
        res.send(error)
    }
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
