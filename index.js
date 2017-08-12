const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ title: 'test title new' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
