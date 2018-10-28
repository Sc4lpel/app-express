var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.send('vous êtes à l\'accueil...');
});

app.get('/sous-sol', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.send('vous êtes dans ma cave à vin !!');
});

app.get('/etage/:etagenum/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes dans la chambre à l\'étage n°' +  req.params.etagenum);
});


app.listen(8080);
