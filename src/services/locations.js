let response = [];
let responseObj = undefined;

let closestLocation = undefined;
let distance = undefined;
let smallestDistance = undefined;
let locationToCompare = undefined;

const findClosest = (req, res, next) => {
    try {
        var locations = req.body.locations;
    
        Array.from(locations, currentLocation => {
            if (_isValidLocation(currentLocation)) {
                _compareWithAll(currentLocation, locations);
            }
        
        });
    
        res.status(200).send(response);
    } catch (error) {
        return res.status(500).json({
            'code': 'SERVER_ERROR',
            'description': 'Something went wrong, Please try again'
        });
    }
};

const _isValidLocation = (location) => {
    return location.x && location.y && location.name;
}

const _compareWithAll = (currentLocation, locations) => {
    closestLocation = undefined;
    distance = undefined;
    smallestDistance = undefined;
   
    for (let i = 0; i < locations.length; i++) {
        locationToCompare = locations[i];
        if (_isValidLocation(locationToCompare) && locationToCompare.name != currentLocation.name) {
            _computeDistance(currentLocation);
        }
    }
    responseObj = { a: currentLocation.name, b: closestLocation.name, distance: smallestDistance };
    response.push(responseObj);
    responseObj = undefined;
}

function _computeDistance(currentLocation) {
    if (locationToCompare.y == currentLocation.y && locationToCompare.x == currentLocation.x) {
        distance = 0;
    }
    else {
        distance = Math.sqrt(Math.pow(currentLocation.x - locationToCompare.x, 2) + Math.pow(currentLocation.y - locationToCompare.y, 2));
    }
    if (smallestDistance === undefined || smallestDistance > distance) {
        smallestDistance = distance;
        closestLocation = locationToCompare;
    }
}

export default {
    findClosest
}

