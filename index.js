const express = require('express');

const app = express();
const port = 3000;

// Connecting to our Public folder
app.use(express.static('public'));

// Our root Page
app.get('/', (req, res) => {
  res.render('index');
});

// Connecting to our localhost
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
