// 1. importing json-server
const jsonserver = require('json-server');
// 2. create a server application using jsonserver.
const server = jsonserver.create();
// 3. setup path for db.json file
const router = jsonserver.router('db.json');
// 4. Return a middleware used by json server
const middleware = jsonserver.defaults();
// 5. setup a port number(by default 3000 we are using 3001-"react running on port 3000")
const port = process.env.PORT || 3001;
// 6. use in server
server.use(middleware);
server.use(router);
// 7.
server.listen(port,()=>{
    console.log('Jsonserver listening on port'+port);
})