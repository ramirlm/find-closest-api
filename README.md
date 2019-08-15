# FindClosest API

FindClosest is a NodeJS API to provide the closest location of a list of locations.
 

### Installation

FindClosest requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server:

```sh
$ git clone https://github.com/ramirlm/find-closest-api.git
$ cd find-closest
$ npm install -d
$ npm start
```

### API

The application will provide an Endpoint (POST: /api/locations) that receives a list of locations on the body, based on the following JSON payload example:
```json
{
	"locations" : [
		{
			"name": "Cum Sociis Natoque Corporation",
			"x": 25,
			"y": -18
		},
		{
			"name": "Cras Dictum Ltd",
			"x": -5,
			"y": -47
        }
    ]
}
```

It will return a list of all valid locations with it's closest location in the list, where "a" is the enclosing location, and "b" is the proximal as following JSON payload:
```json
[
  {
    "a": "Cum Sociis Natoque Corporation",
    "b": "Vulputate Lacus Ltd",
    "distance": 4.47213595499958
  },
  {
    "a": "Cras Dictum Ltd",
    "b": "Ipsum Dolor Sit Institute",
    "distance": 4.123105625617661
  }
]
```

You might use a generated JSON included on folder assets/test-data.json with a set of 100 randomly generated locations.

### Deployment

This application is deployed on Heroku.

To test it, just send requests to:

https://findclosest-api.herokuapp.com:8080/api/locations

### Considerations

- Locations with no position or name(does not exist) are not included in the final result.
- Speed of the endpoint for a mass of data of 100 locations is ~80ms
- In case of drawn locations, the first in the list will be set as the closest

### Todos
- Algorithm optimizing to improve performance
- Better error threatment


API used to generate data:
http://www.generatedata.com/#generator
