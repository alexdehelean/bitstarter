var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
app.get('/', function(request, response) {
var my_index = fs.readFileSync("index.html");
  response.send(my_index.toString('utf-8'));
});

app.use(express.static(__dirname));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
