const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: "Page not found",
    name: "Todo App v1.0"
  });
});


app.listen(1000);

module.exports.app = app;