var express = require('express');
var cors = require('cors');

var app = express();

app.use(express.logger());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);

var data = [];

app.get('/tasks', function(req, res) {
  res.json(data);
});

app.post('/tasks', function(req, res) {
  var d = req.body;
  d._id = data.length;
  data.push(d);
  res.json(d);
});

app.put('/tasks/:task', function(req, res) {
  var d = data.filter(function(d) {
    return d._id === parseInt(req.params.task);
  })[0];
  d.title = req.body.title;
  d.done = req.body.done;
  res.json(d);
});

app.delete('/tasks/:task', function(req, res) {
  var d = data.filter(function(d) {
    return d._id === parseInt(req.params.task);
  })[0];
  data = data.filter(function(d) {
    return d._id !== parseInt(req.params.task);
  });
  res.json(d);
});

app.listen(3000);

