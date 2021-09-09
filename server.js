const express = require('express');

const PORT = process.env.PORT || 8000;

// Sets up the Express App
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require the Routes.js files to generate api routes and html files
require('./routes')(app);
require('./htmlRoutes')(app);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});