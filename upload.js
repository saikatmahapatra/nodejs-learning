const { Formidable } = require('formidable');
var formidable = require('formidable');
var http = require('http');
var fs = require('fs');
//create a upload form
http.createServer(function(req, res){

    if(req.url == '/fileUpload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.myFile.filepath;
            res.write('file uploaded at ', oldpath);
            res.end();
        });
    } else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileUpload" method="post" enctype="multipart/formdata">');
        res.write('<input type="file" name="myFile" id="myFile">');
        res.write('<button type="submit" class="btn btn-priamry">Upload File</button>');
        res.write('</form>');
        return res.end();
    }

}).listen(8080);

