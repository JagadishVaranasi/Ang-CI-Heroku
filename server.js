// Get dependencies
// https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli
// https://expressjs.com/en/starter/static-files.html

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to src
app.use(express.static(path.join(__dirname, 'src')));

app.set('port', (process.env.PORT || 3000));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname + 'src/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(app.get('port'),function() {    
    console.log('Node server listening on port '+ app.get('port'));
});

module.exports = app;
