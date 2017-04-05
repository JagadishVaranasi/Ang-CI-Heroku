// Get dependencies
// https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli
// https://expressjs.com/en/starter/static-files.html


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to src
app.use(express.static(path.join(__dirname, 'src')));

app.set('port', (process.env.PORT || 3000));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function (req, res, next) {
    res.render('index.html');
});

//Views
app.set('views',path.join(__dirname,'src'));
app.set('view engine','ejs');
 app.engine('html',require('ejs').renderFile);

// Start the app by listening on the default
// Heroku port or 3000
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'),function() {    
    console.log('Node server listening on port '+ app.get('port'));
});

module.exports = app;
