

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
    //const products = JSON.stringify(require("./products"));
    const products = (require("./products"));
    //console.log(products);
    //res.writeHead(200, { 'Content-Type': 'application/json'});
    res.send(products);
})

server.get('/:id', (req, res) => {
    const { id } = req.params;
    
})








server.listen(3000); console.log('server listen on localhost, port 3000');
