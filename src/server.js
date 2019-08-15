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
    let responseObj = undefined;
    
    Array.from(locations, loc => {

        let closest = undefined;
        let distance = 0;
        let smallestDistance = undefined;
        
        locations.forEach(function (locB) {

            if (locB.name != loc.name) {
                distance = Math.sqrt(Math.pow(loc.x - locB.x, 2) + Math.pow(loc.y - locB.y, 2)); 
    
                if (!smallestDistance || smallestDistance < distance) {
                    closest = locB;
                }
            }
        });
        
        responseObj = {a: loc, b: closest};
        response.push(responseObj);
        closest = undefined;
        responseObj = undefined;
        distance = 0;
        biggestDistance = 0;
    
    });

    res.send(response);
});

