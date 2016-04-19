var express     = require('express'),
    mongoose    = require('mongoose'),
    path        = require('path');

var app = express();

mongoose.connect('mongodb://localhost/iatse'); // connect to mongo database named shortly

// configure our server with all the middleware and and routing
// require('./config/middleware.js')(app, express);

app.use(express.static(path.join(__dirname, 'wageCalculator')));

app.get('/',function(req,res){
  // res.sendFile('/Users/andrewnixon/Desktop/MVP/wageCalculator/index.html');
  res.render('index')
});

// export our app for testing and flexibility, required by index.js
var port = 8000;
app.listen(port, function(){
  console.log("server running on port ", port);
});

module.exports = app;