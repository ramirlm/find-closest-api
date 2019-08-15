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
    
    let response = [];
    let responseObj = undefined;

    let closest = undefined;
    let distance = undefined;
    let smallestDistance = undefined;
    let locB = undefined;

    Array.from(locations, loc => {

        closest = undefined;
        distance = undefined;
        smallestDistance = undefined;
        
        for(let i = 0; i < locations.length; i++) {
            locB = locations[i];

            if (locB.name != loc.name) {

                if (locB.y == loc.y && locB.x == loc.x) {
                    distance = 0;
                } else {
                    distance = Math.sqrt(Math.pow(loc.x - locB.x, 2) + Math.pow(loc.y - locB.y, 2)); 
                }
    
                if (smallestDistance === undefined || smallestDistance > distance) {
                    smallestDistance = distance;
                    closest = locB;
                }
            }
        }
        
        responseObj = {a: loc.name, b: closest.name, distance: smallestDistance};
        
        response.push(responseObj);

        responseObj = undefined;
    
    });

    res.send(response);
});

