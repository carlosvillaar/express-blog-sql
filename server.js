const express = require('express');

const app = express();

const port = 3000;

const router = require('./router/post');

app.use(express.static('public'))

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server dei posts')
});

app.use('/posts', router);

app.listen(port, () => {
  console.log('sono in ascolto alla porta 3000')
});