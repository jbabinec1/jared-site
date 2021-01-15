const express = require('express');
const app = express(); 
var path = require('path');
var cors = require('cors')
const sendMail = require('./mail');
const bodyParser = require("body-parser");


app.use(cors())
app.use(express.urlencoded({
   extended: false
}));

app.use(express.json());
app.use(bodyParser.json()); 

app.use( function (req, res, next){

   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
   res.header('ACCESS-CONTROL-ALLOW-HEADERS', 'CONTENT-TYPE, AUTHORIZATION, CONTENT-LENGTH, X-REQUESTED-WITH'
   );
   next();
}); 


app.post('/email', (req, res) => {

   const { subject, email, text} = req.body;

   sendMail(email, subject, text, function(err, data){

      if (err) {
         res.send(err);
      } else {
         res.status(200).json(data);
      }
     /* if(err){
         res.status(500).json({message: 'Internal error'});
      } else {
         res.json({message: 'Email sent'})
      } */

   }); 

   


   res.json({message: 'hi'});
  // console.log(req.body);
   
});





app.use(express.static('dist/jared-site'));
app.use('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/jared-site/index.html'));
 }); 

const port = process.env.PORT || 3000;
app.listen(port, function(){
   console.log('Your node js server is running');
});