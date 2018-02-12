# PureSrc: A functional programming approach to the repository pattern

## The repository pattern revisited in terms of functional programming.

- Added mappers
- Two repositories

`PureSrc` let you define a set of methods for exchanging data with a remote source. 

Each repository instantiated by `PureSrc` is composed by a delivery method with its options and a set of protocols request.

`createPureSrc()` is the function used to initialize a repository. It creates a stream of data from an `address` using a `delivery method`.
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
git clone https://github.com/claclacla/PureSrc-A-functional-programming-approach-to-the-repository-pattern

# Change directory
cd PureSrc-A-functional-programming-approach-to-the-repository-pattern

# Install NPM dependencies
npm i

```

--------------------------------------------------------------------------------

### Testing

```
# Download the node docker image
sudo docker pull node:9.2-slim

# Change directory
cd PureSrc-A-functional-programming-approach-to-the-repository-pattern/test/api-server

# Create the api server container
sudo docker build -t claclacla/pure-src-api-server .

# Run the api server
sudo docker run -d -v /write-your-absolute-path-to/PureSrc-A-functional-programming-approach-to-the-repository-pattern/test/api-server:/usr/src/app -p 3000:3000 --name PureSrcApiServer claclacla/pure-src-api-server

# Change directory
cd PureSrc-A-functional-programming-approach-to-the-repository-pattern/test/web-server

# Build the local web server
sudo docker build . -t claclacla/spa-http-server

# Run the local web server
sudo docker run -d -p 8080:8080 -v /write-your-absolute-path-to/PureSrc-A-functional-programming-approach-to-the-repository-pattern/public:/usr/src/app --name PureSrcWebServer -it claclacla/spa-http-server

# Change directory
cd PureSrc-A-functional-programming-approach-to-the-repository-pattern

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

Returns another function to actually create the repository methods

Usage example:

```
let resourceRepository = createPureSrc(`${API_ADDRESS}/sources`, fetchDeliveryMethod);
```

---

A delivery method receives three arguments:
- the source address {string}
- the method options {object}

Delivery method example:

```
# Create a delivery method for json data type using the fetch() method

export default async function fetchDeliveryMethod(address, options) {
  let body = null;
  let fetchResponse = null;

  try {
    fetchResponse = await fetch(address, options);
  } catch (error) {
    throw new PureSrcError(`Failed to connect to ${address}`);
  }

  if (!fetchResponse.ok) {
    throw new DeliveryError({
      status: fetchResponse.status,
      message: fetchResponse.statusText
    });
  }

  let fetchResponseBody = await fetchResponse.text();

  if (fetchResponseBody) {
    try {
      body = stringToJson(fetchResponseBody);
    } catch (error) {
      throw new Error("Error parsing response data");
    }
  }
  else {
    body = fetchResponseBody;
  }

  let response = new FetchDeliveryResponse({ status: fetchResponse.status, body });

  return response;
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

Furthermore it receives other optional parameters from the function returned by the `resourceRepository()` function. These parameters are helpful to add custom options to the request or to extend the resource address.

Internally it has to call the common `delivery()` function which executes the command.

Delivery request example:

```
export default async function restGetRequest(deliveryMethod, source, options, mapFromSource, mapToSource, query) {
  if (query) {
    source += "?" + query;
  }

  let restResponse = await restDelivery(deliveryMethod, source, options);

  let srcObjects = restResponse.body.data;
  let object = {};
  let responseObjects = [];

  srcObjects.forEach(srcObject => {
    object = mapFromSource(srcObject);
    responseObjects.push(object);
  });

  return responseObjects;
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
