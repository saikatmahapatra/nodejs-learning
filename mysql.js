var http = require('http');
var mysql = require('mysql');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js & MySQL</h1>');
    res.write('<a href="/add">Add User</a> &nbsp;');
    res.write('<a href="/view">View Users</a>');

    var uriSegment = url.parse(req.url, true);
    //console.log(uriSegment);

    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_nodejs_tut'
    });

    conn.connect(function(err){
        if(err) {
            console.log(err);
            throw err;
        } else {
            console.log('connected to mysql server');
        }
    });

    res.end();
}).listen(3000);