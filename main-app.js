

const express = require ("express");
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./pub'));

// ############################################               Роути              ############################################

server.get('/', (req,res) => {
    res.render('main');
    })

server.get('/123', (req,res) => {
    res.send('123');
})

server.get('/products', (req,res) => {
    const products = require("./products");
    res.send(products);
})









server.listen(3000); console.log('server listen on localhost, port 3000');
