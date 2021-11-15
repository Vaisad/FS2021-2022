const fs = require('fs'),
url = require('url'),
path = require('path'),
http = require('http');

module.exports = http.createServer(function(request, response){

}).on('listening', function(){
    console.log(`Started ar ${this.adrress().port} port`);
});