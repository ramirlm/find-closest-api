import express from 'express';
import { urlencoded, json } from 'body-parser';
import service from './services/locations';
var app = express();

app.use(urlencoded( {extended:true }));
app.use(json());

var port = 8080;

app.listen(port);

console.log('HTTP Server listening to port %s', port);

app.post('/api/locations', service.findClosest);
