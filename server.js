'use strict';

const express = require('express');
const expressHandlebars = require('express-handlebars');
const config = require('rc')('app');

const env = process.env.NODE_ENV || 'development';

const server = express();

server.use(express.static(__dirname + '/public'));

// Register handlebars template engine
server.engine('hbs', expressHandlebars({
    defaultLayout: 'default',
    extname: 'hbs'
}));

server.set('view engine', 'hbs');

server.get('/', (req, res) => {
    res.render('home', {
        title: config[env].title
    });
});

// Start server
server.listen(config[env].port, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`Server running at http://localhost:${config[env].port}`);
    }
});
