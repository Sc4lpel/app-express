var express = require('express');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();

/* On utilise les sessions */
app.use(session({secret: 'topsecret',  maxAge: 24 * 60 * 60 * 1000 }));

/* S'il n'y a pas de todolist dans la session,
on en crée une vide sous forme d'array avant la suite */
app.use(function(req, res, next){
    if (typeof(req.session.todolist) == 'undefined') {
        req.session.todolist = [];
    }
    next(); 
});







/* On affiche la todolist et le formulaire */
app.get('/todo', function(req, res) { 
    res.render('todo.ejs', {todolist: req.session.todolist});
})

app.post('/todo/ajouter/', urlencodedParser, function(req, res, next) {
    
    if(req.body.newtoto != ''){
        var tache = req.body.newtoto;
        req.session.todolist.push(tache);
        console.log("\"" + tache + "\"a été ajouté");
    }
    next();
});

/* Supprime un élément de la todolist */
app.get('/todo/supprimer/:id', function(req, res) {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

/* On redirige vers la todolist si la page demandée n'est pas trouvée */
app.use(function(req, res, next){
    res.redirect('/todo');
})


// ...


app.listen(8080);
