//Express
var express = require ('express');
var app = express();
var PORT = process.env.PORT || 8445;

app.use(express.static(__dirname+"/public"));

app.get('/', function(req,res){
  res.sendFile(process.cwd() + "/index.html");
});

app.listen(PORT, function(){
  console.log("Goliath Online on port %s", PORT);
});