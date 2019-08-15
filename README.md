# FindClosest API

FindClosest is a NodeJS API to provide the closest location of a list of locations.
 

### Installation

FindClosest requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone find-closest.git
$ cd find-closest
$ npm install -d
$ npm start
```
### API

The application will provide an Endpoint (/api/locations) that receives a list of locations on the body, based on the following JSON template:
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

### Considerations

- Locations with no position or name(does not exist) are not included in the final result.
- Speed of the endpoint for a mass of data of 100 locations is ~80ms


API used to generate data:
http://www.generatedata.com/#generator
