const express = require('express');
const app = express(); 
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
