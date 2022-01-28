var http = require('http');
var fs = require('fs');
//var e = require('dotenv').config();
http.createServer(function(req, res){
res.write('node.js file systems fs module');
// fs.writeFile('myfile.txt', function(err, data){

// });
fs.readFile('myfile.txt', function(err, data){
    res.write(data);
    
});

// fs.appendFile() create file with content if theh file is not exits else it will update file content
fs.appendFile('file-2.txt','this is created using appendFile\n', function(err){
    if(err) {
        throw err
    }
    console.log('File Saved');
});

res.end();
}).listen(8080);