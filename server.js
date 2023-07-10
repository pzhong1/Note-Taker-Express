//Express application for starts the server 
const express = require('express'); //import the Express framework.so i can start the server, and perform other operations with Express
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware （.use method)
app.use(express.json()); //access the json data  when work POST requests.
app.use(express.urlencoded({ extended: true }));// get URL-encoded data from requests
app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));


// Routes
require('./routes/api-routes')(app); //API
require('./routes/html-routes')(app); //HTML

// start the Express server
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});

