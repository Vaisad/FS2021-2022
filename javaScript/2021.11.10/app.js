// const os = require('os');
// let model = os.cpus()[0].model;
// let cores = os.cpus().length;
// console.log(model);
// console.log('cores', cores);

// const os = require('os');
// console.log(os.cpus()[0].model, 'cores:', os.cpus().length);
// console.log(os.cpus());





// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 80;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



server.listen(process.env.PORT || 80, function onListen() {
    var address = server.address();
    console.log('Listening on: %j', address);
    console.log(' -> that probably means: http://localhost:%d', address.port);
   });