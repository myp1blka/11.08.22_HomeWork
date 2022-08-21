

const express = require ("express");
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./pub'));

const getProduct = ( id ) => {
    const result = products.find(item => item.id === id);
}

// ############################################               Роути              ############################################

server.get('/', (req,res) => {
    res.render('main');
    })

server.get('/123', (req,res) => {
    res.send('123');
})

server.get('/products', (req,res) => {
    const products = (require("./products"));
    res.send(products);
})

server.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const products = (require("./products"));
    console.log(products.products_db[0]);
    const id_prod = Number(id);
    console.log('id = ' + id + ' id_prod = ' + id_prod);
    const product = products.products_db.find(item => item.id === id_prod);
    console.log('product: ', product);

    res.render('product', { product });
    //res.send('product id is: ' + id);
})










server.listen(3000); console.log('server listen on localhost, port 3000');
