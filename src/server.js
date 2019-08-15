import express from 'express';
import { urlencoded, json } from 'body-parser';
import locationsService from './services/locations';

var app = express();
var port = 8080;

app.use(urlencoded( {extended:true }));
app.use(json());

app.listen(port);

console.log('HTTP Server listening to port %s', port);

app.post('/api/locations', locationsService.findClosest);
