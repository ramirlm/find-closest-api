var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var app = express();

app.use(bodyParser.urlencoded( {extended:true }));
app.use(bodyParser.json());

var port = 8080;

app.listen(port);

console.log('HTTP Server listening to port %s', port);

app.get('/', function(req, res) {

    res.send({message:'First Location'});
});

app.post('/api', function(req, res) {
    
    var data = req.body;
    res.send(data);
})