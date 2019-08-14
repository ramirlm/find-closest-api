var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded( {extended:true }));
app.use(bodyParser.json());

var port = 8080;

app.listen(port);

console.log('HTTP Server listening to port %s', port);

app.get('/', function(req, res) {

    res.send({message:'First Location'});
});

app.post('/locations', function(req, res) {
    var locations = req.body.locations;
    
    let response = new Array();
    Array.from(locations, loc => {
        let distance = 0;
        
        response.push(loc.name);

        locations.forEach(function (locB) {
            if (response.lenght() > 1) {
                 
            } else {

                distance = Math.sqrt(Math.pow(loc.x - locB.x, 2) + Math.pow(loc.y - locB.y, 2)); 
            }
            console.log('Distance ', distance);
        });
        // locations.forEach(function (locB) {
        //     if (loc != locB) {
        //         response[i] = Object.assign(loc);
        //     } 
        // });
    });
    for(var i = 0; i < locations.lenght; i++) {
        console.log('HI!');
        console.log(locations[i].x);
        console.log(locations[i].y);
        console.log(locations[i].name);
    };
    res.send(locations);
});

