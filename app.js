/**
 * Module dependencies
 */ 
const express = require('express');
const logger = require("morgan");
const expressValidator = require('express-validator');
// const MongoStore = require('connect-mongo')

// route handlers
const homeHandler = require('./handlers/home');
const postLoginHandler = require('./handlers/user');

// create web server
app = express()

// middlewares
app.use(logger('dev'));
app.use(expressValidator())
app.use(flash())

// primary app routes
app.get("/", homeHandler.index);
app.post('/login', postLoginHandler.postLogin);

// error handler
app.use( (err, req, res, next) => {
    console.log(err)
    res.status(500).send('Server Error');
});

// start app
port = 8080
app.listen(port,"localhost",()=>{
    console.log(`listening at localhost:${port}`)
})

