var http = require('http');
var url = require('url');
var events = require('events');
const { EventEmitter } = require('stream');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('myEvent', myEvent);
function myEvent(){
  console.log('### my event ####');
}
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //console.log(req)
  var queryString = url.parse(req.url, true).query;
  res.write('URL is '+req?.url+' >>> hello world');
  res.write('Read ENV vars ' + JSON.stringify(process.env));
  //console.log(queryString);
  var urlObj = url.parse(req.url, true);
  console.log(urlObj);
  eventEmitter.emit('myEvent');
  res.end('\n end');

});
server.listen(port, hostname, ()=>{
console.log(`Server is running at http://${hostname}:${port}`);
});