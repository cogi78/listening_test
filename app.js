/**
 * Module dependencies.
 */

var express = require('express')
  //, routes = require('./routes')
  //, user = require('./routes/user')
  , http = require('http')
  , path = require('path');

require('./mongosetting')

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  res.render('index2');
});
app.get('/aboutus', function(req, res) {
  res.render('aboutus');
});
app.get('/postlist', function(req, res) {
  res.render('postlist');
});
app.get('/login', function(req, res) {
  res.render('login');
});
app.get('/meetproblem', function(req, res) {
  res.render('meetproblem');
});
app.get('/sponsor', function(req, res) {
  res.render('sponsor');
});
app.post('/bugsend', function(req, res) {
    console.log(req.body.bugtitle);
    console.log(req.body.bugemail);
    console.log(req.body.bugtextarea);
    new BugSendmodel( {title:req.body.bugtitle, email:req.body.bugemail,content:req.body.bugtextarea} ).save();
    res.render('index2');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
