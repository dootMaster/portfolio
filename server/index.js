const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../docs')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../docs/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = app;