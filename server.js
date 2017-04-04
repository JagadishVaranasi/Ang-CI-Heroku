const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, 'src')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(app.get('port'),function() {    
    console.log('Node server listening on port '+ app.get('port'));
});

module.exports = app;
