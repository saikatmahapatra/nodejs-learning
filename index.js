var http = require('http');
var url = require('url');
var events = require('events');
const { EventEmitter } = require('stream');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('myEvent', myEvent);
function myEvent(){
  console.log('### my event ####');
}
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //console.log(req)
  var queryString = url.parse(req.url, true).query;
  res.write('URL is '+req?.url+' >>> hello world');
  //console.log(queryString);
  var urlObj = url.parse(req.url, true);
  console.log(urlObj);
  eventEmitter.emit('myEvent');
  res.end('\n end');

}).listen(8080);