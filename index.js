const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example REST API app listening at: http://localhost:${port}`);
});

app.get('/first', function(req, res) {
  res.json({
    "attribute1": "value1",
    "attribute2": "value2"
  });
});

app.use(express.urlencoded({
  extended: true  
}));

app.post('/second', function(req, res) {
  var body = req.body;
  console.log(req.body.data1);
  res.send('second response: '+ req.body.data1);
});

