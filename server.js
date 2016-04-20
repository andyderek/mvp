var express     = require('express'),
    mongoose    = require('mongoose'),
    path        = require('path');
var bodyParser = require('body-parser');

var app = express();

var Schema = new mongoose.Schema;

app.use(bodyParser.json());
// // Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));

// var wageSchema = new Schema({
//   wage: Number
// });

// var Wage = mongoose.model('Wage', wageSchema);

mongoose.connect('mongodb://localhost/iatse', function(err, db){
  if(err){
    console.log("&&&&&&&&",err)
  } else {
    console.log("Mongoose is connected", db)
  }
}); // connect to mongo database named iatse



// configure our server with all the middleware and and routing
// require('./config/middleware.js')(app, express);

app.use(express.static(path.join(__dirname, 'wageCalculator')));

app.get('/api',function(req,res){
  // res.sendFile('/Users/andrewnixon/Desktop/MVP/wageCalculator/index.html');

  res.render('index')
});

app.post('/api', function(req, res){
  console.log("hello is it me you're looking for?", req.body);
})

// export our app for testing and flexibility, required by index.js
var port = 8000;
app.listen(port, function(){
  console.log("server running on port ", port);
});

module.exports = app;