const express = require('express');
const app = express(); 
var path = require('path');












app.use(express.static('dist/jared-site'));
app.use('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/jared-site/index.html'));
 }); 

const port = process.env.PORT || 3000;
app.listen(port, function(){
   console.log('Your node js server is running');
});