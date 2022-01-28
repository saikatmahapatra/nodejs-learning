const { Formidable } = require('formidable');
var formidable = require('formidable');
var http = require('http');
var fs = require('fs');
//var dir = require('dir');
//create a upload form
http.createServer(function(req, res){

    if(req.url == '/fileUpload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldPath = files.myFile.filepath;
            var newPath = __dirname+'/uploads/'+files.myFile.originalFilename;
            fs.rename(oldPath, newPath, function(err){
                if (err) {
                    throw err;
                } else{
                    res.write('file uploaded at '+oldPath+' ===> '+newPath);
                    console.log('file uploaded at '+oldPath+' ===> '+newPath);
                    res.end();
                }
            });
        });
    } else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileUpload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="myFile" id="myFile">');
        res.write('<button type="submit" class="btn btn-priamry">Upload File</button>');
        res.write('</form>');
        return res.end();
    }

}).listen(8080);

