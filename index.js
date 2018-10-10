const express = require('express');

const app = express();
const port = 3000;

// Connecting to our Public folder
app.use(express.static('public'));

// Setting our View Engine
app.set('view engine', 'ejs');

// Our root Page
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/signup', (req, res) => {});

// app.post('/login', (req, res) => {});

// Connecting to our localhost
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
