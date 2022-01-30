var http = require('http');
var mysql = require('mysql');
var url = require('url');
var isConnectedToDb = false;

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

    if(!isConnectedToDb) {
        conn.connect(function(err){
            if(err) {
                isConnectedToDb = false;
                console.log(err);
                throw err;
            } else {
                isConnectedToDb = true;
                console.log('connected to mysql server');
            }
        });
    }
    

    // Add users
    if(isConnectedToDb && uriSegment.href == '/add') {
        res.write('<h2>Add User</h2>');
    }

    // List users
    if(isConnectedToDb && uriSegment.href == '/view') {
        res.write('<h2>List User</h2>');
        var sql = 'select * from users';
        conn.query(sql, function(err, result, fields){
            if(err) {
                console.log(err);
                throw err;
            } else {
                //console.log(result);
                if(result && result.length> 0){
                    //res.write('<table style="width: 100%; border: 1px #000 solid;">');

                    result.forEach(element => {
                        console.log(element.id, element.user_name, element.user_email);
                    });
                    //res.write('</table>');
                } else {
                    res.write('Sorry, no data fetched');
                }
            }
        });
    }

    res.end();
}).listen(3000);