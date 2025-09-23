const express = require('express');
const app = express();
const port = 3000;

// simulando una base de datos en memoria
const products = [
    { id: 1, name: 'Laptop', type: 'electronics', price: 800 },
    { id: 2, name: 'Phone' , type: 'electronics', price: 500.99 },
    { id: 3, name: 'Tablet', type: 'electronics', price: 300 },
];

//Endpoint para obtener todos los productos
app.get('/api/products', (req, res) => {
    res.json(products);
});

//EndPoints para obtener productos por ID
app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
if(!product) {
    res.status(404).send('Products not found');
} else {
    res.json(product);
}
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});