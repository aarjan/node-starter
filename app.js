/*
    Module dependencies
*/
const restify = require('restify');
const logger = require('morgan');

/*
    Restify configuration
*/
const server = restify.createServer();

restify.plugins.queryParser()

server.use(logger('dev'));
server.get('/hello/:name',(req,res) => {
   res.send(`Hello ${res.params.name}!`) 
})

/*
    Run the server
*/
port = 8000;
server.listen(port, 'localhost', () => {
    console.log(`listening at ${port}`);
});

