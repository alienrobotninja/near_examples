## API

This is the api wrapper for the NEAR protocol RPC.

To view the version deployed on Akash, e.g for gas, got to [http://jnso7ndvql8sv6mjk2on3jkl2g.ingress.xeon.computer/api/v1/gas](http://jnso7ndvql8sv6mjk2on3jkl2g.ingress.xeon.computer/api/v1/gas)

## Installation && running (using npm)

To use this api
`mv sample.env env` to get access to the port for the server.

`npm install` to install the dev-deps.

`npm start` to start the http server.

## Installation && running (using docker)

Make sure you have docker and docker compose installed
`sudo docker compose up --build`

Alternatively, you could run without using docker compose

`sudo docker build -t jimii47/api-js .`

`sudo docker run -p 3040:3040 jimii47/api-js`

To pull the docker image, I already build, `sudo docker pull jimii47/api-js:latest`

## tech stack

- axios - interacting with the rpc protocol
- dotenv - reading the .env file
- express - creating the routes
- jest - testing 
- morgan - for logging

## usage

The http server starts a server on port 3040 i.e `http://localhost:3040/api/v1/`

There are three routes that expose three parts of the NEAR protocol namely:

`account`

    GET http://localhost:3040/api/v1/account - returns basic account information

`gas`

    GET http://localhost:3040/api/v1/gas - will return the most recent block's gas price

`network`.

    GET http://localhost:3040/api/v1/network/net-info - will return the current state of the network connections (active peers, transmitted data...)
     
    GET http://localhost:3040/api/v1/network/node-status - will return the general status of a given node.

    GET http://localhost:3040/api/v1/network/validation-status - will query the active validators on the network and return the details on the state of validation on the network using the latest block.


NOTE: All the endpoints return JSON data

## testing 
npm run test
