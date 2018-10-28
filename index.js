var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.send('vous êtes à l\'accueil...');
});

app.listen(8080);
