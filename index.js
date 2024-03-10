// import json server

const jsonServer = require('json-server')

// create our own server to run json file

const contactServer = jsonServer.create()

// generate a middleware to use in json server

const middleware = jsonServer.defaults()

// set up path for db.json

const router = jsonServer.router("db.json")

// setup port for server

const port = 3000

// use middleware and router in our server

contactServer.use(middleware)

contactServer.use(router)

// Server listen

contactServer.listen(port, () => {
    console.log('---Contact Server Portal started at PORT : '+port);
})