/**
 * Module dependencies.
 */
var express = require('express')
  //, routes = require('./routes')
  //, user = require('./routes/user')
  , http = require('http')
  , path = require('path');
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


//var config = require('./config.json');
//bugsent
var mongoose = require('mongoose');
var uristring = 
  process.env.MONGOLAB_URI || 
  process.env.MONGOHQ_URL || 
  'mongodb://root:listeningtome@ds031847.mongolab.com:31847/listening_tw';

  mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

var BugSendSchema = mongoose.Schema({
  title: String,
  email: String,
  content: String
});
mongoose.model('BugSend', BugSendSchema);
var BugSendmodel = mongoose.model('BugSend');

//new BugSendmodel( {title:'wrong', email:'test@test.com',content:'wrong'} ).save();
//--

//helpme
var HelpMeSchema = mongoose.Schema({
  title: String,
  email: String,
  phone: String,
  social: Boolean,
  content: String,
  update:{ type:Date, default: Date.now}
});

mongoose.model('Helpme', HelpMeSchema);

var Helpmemodel = mongoose.model('Helpme');

//--
//recordeuser
var RecordeUserSchema = mongoose.Schema({
  memId: Number,
  username: String,
  email: String,
  phone: String,
  update:{ type:Date, default: Date.now}
});

mongoose.model('RecordUser', RecordeUserSchema);

var RecordUsermodel = mongoose.model('RecordUser');
//--
//UserLikeLaw 
var UserLikeLawSchema = mongoose.Schema({
  Id: Number,
  title: String,
  liketag: String,
  peoplelike: String
});

mongoose.model('UserLikeLaw', UserLikeLawSchema);

var UserLikeLawmodel = mongoose.model('UserLikeLaw');
//--







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
    new BugSendmodel( {title:req.body.bugtitle, email:req.body.bugemail,content:req.body.bugtextarea} ).save(function (err) {if (err) console.log ('Error on save!')});
    res.render('index2');
});



app.post('/addNewUser',function(req,res){
  //console.log(req);
  RecordUsermodel.find({},function(err,results){
    console.log(results.length);
    new RecordUsermodel({
      memId: results.length,
      username: 'user'+results.length
    }).save(function (err) {if (err) console.log ('Error on save!')});
    var userinfo = {
      userId:results.length,
      username:'user'+results.length,
      update:''
    }
    var JSONinfo = JSON.stringify(userinfo)
    res.end(JSONinfo);
  })
  // new RecordUsermodel();


})





http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
