# PureSrc: A functional programming approach to the repository pattern

## The repository pattern revisited in terms of functional programming.

`PureSrc` let you define a set of methods for exchanging data with a remote source. 

Each repository instantiated by `PureSrc` is composed by a delivery method with its options and a set of protocols request.

`createPureSrc()` is the function used to initialize a repository. It creates a stream of `data type` data from an `address` using a `delivery method`.
It returns another function which defines requests using a `delivery request` with a defined set of `options`.
This other function returns a last function that executes requests with custom `parameters`.

In this implementation the repository is a typical `RESTful` client and it has specific tools for connecting to an API server. The provided `delivery method` is `src/deliveryMethods/fetch/fetchDeliveryMethod.js` which uses the global method `fetch` to access to remote resource. But you can add your own delivery method or your repository requests files according to your own protocol.

For a complete example open the file `e2e/fetchRepository/index.js`.

--------------------------------------------------------------------------------

### Prerequisites

What things you need to install the software

```
node
docker
mocha
```

--------------------------------------------------------------------------------

### Installing

```
# Get the latest snapshot
git clone https://github.com/claclacla/PureSrc-A-pure-functional-way-to-the-repository-pattern

# Change directory
cd PureSrc-A-pure-functional-way-to-the-repository-pattern

# Install NPM dependencies
npm i

```

--------------------------------------------------------------------------------

### Testing

```
# Download the node docker image
sudo docker pull node:9.2-slim

# Change directory
cd PureSrc-A-pure-functional-way-to-the-repository-pattern/test/api-server

# Create the api server container
sudo docker build -t claclacla/pure-src-api-server .

# Run the api server
sudo docker run -d -v /write-your-absolute-path-to/PureSrc-A-pure-functional-way-to-the-repository-pattern/test/api-server:/usr/src/app -p 3000:3000 --name PureSrcApiServer claclacla/pure-src-api-server

# Change directory
cd PureSrc-A-pure-functional-way-to-the-repository-pattern/test/web-server

# Build the local web server
sudo docker build . -t claclacla/spa-http-server

# Run the local web server
sudo docker run -d -p 8080:8080 -v /write-your-absolute-path-to/PureSrc-A-pure-functional-way-to-the-repository-pattern/public:/usr/src/app --name PureSrcWebServer -it claclacla/spa-http-server

# Change directory
cd PureSrc-A-pure-functional-way-to-the-repository-pattern

# Test if the api server is up and running 
apiaddress=localhost:3000 mocha --ui tdd test/api-server/test/e2e/sources.js 

# Compile the fetch repository e2e test using webpack
# Use the '-w' flag for watch mode
node_modules/.bin/webpack -d 

# Open your browser and type the following address
http://localhost:8080

```

--------------------------------------------------------------------------------

### Usage

`createPureSrc()` receives three arguments:
- the source address {string}
- the delivery method {function}: this function contains the method used to 
  access the repository data 
- the data type {string}

Returns another function to actually create the repository methods

Usage example:

```
let resourceRepository = createPureSrc(`${API_ADDRESS}/sources`, fetchDeliveryMethod, DATA_TYPE_JSON);
```

---

A delivery method receives three arguments:
- the source address {string}
- the method options {object}
- the data type {string}

Delivery method example:

```
# Create a delivery method for json data type using the fetch() method

export default async function fetchDeliveryMethod(address, options, dataType) {
  let data = null;

  let response = await fetch(address, options);

  switch (dataType) {
    case DATA_TYPE_JSON:
      let responseText = await response.text();
      
      if(responseText) {
        try {
          data = stringToJson(responseText); 
        } catch (error) {
          throw new Error("Error parsing response data");
        }
      }
      else {
        data = responseText;
      }

      break;
  }

  return data;
}
```

---

`resourceRepository()` receives two arguments:
- the delivery request {function}: Each kind of repository has a corresponding preset of `request methods` used to define how to access the repository resource. These methods are injected into the final requests creation and define how they will act. 
- the delivery options {object}: These options will be passed to the devivery method.

Returns a function to access the repository resource

Usage example:

```
let resourceGetRequest = resourceRepository(restGetRequest, fetchDeliveryGetOptions());
```
---

A delivery request receives four required arguments:
- the delivery method {function}
- the source address {string}
- the method options {object}
- the data type {string}

Furthermore it receives other optional parameters from the function returned by the `resourceRepository()` function. These parameters are helpful to add custom options to the request or to extend the resource address.

Internally it has to call the common `delivery()` function which executes the command.

Delivery request example:

```
import delivery from '../../delivery';

export default async function restGetRequest(deliveryMethod, address, options, dataType, query) {
  if (query) {
    address += "?" + query;
  }

  let data = await delivery(deliveryMethod, address, options, dataType);

  return data;
}
```

--------------------------------------------------------------------------------

## Authors

- **Simone Adelchino** - [_claclacla_](https://twitter.com/_claclacla_)

--------------------------------------------------------------------------------

## License

This project is licensed under the MIT License

--------------------------------------------------------------------------------

## Acknowledgments

- [Currying in javascript](https://medium.com/@kbrainwave/currying-in-javascript-ce6da2d324fe)
- [Javascript functional programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
