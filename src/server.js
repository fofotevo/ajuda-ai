/* 
*   Module dependecies.
*/

// const http = require('http');
const app = require('./app');


/*
*   Get the port from environment and store in Express.
*/

const port = (process.env.PORT || 3333);
// app.set('port', port);


/*
*   Create the HTTP server.
*/

// const server = http.createServer(app);
app.listen(port);


// function normalizePort(val) {
//     var port = parseInt(val, 10);

//     if (isNaN(port)) {
//         // named pipe
//         return val;
//     }

//     if (port >= 0) {
//         // port number
//         return port;
//     }

//     return false;
// }