const express = require('express');
const app = express();
const port = 3000;

// simulando una base de datos en memoria
const users = [
    { id: 1, primerNombre: 'Melo', apellido: 'Duarte', edad: 36, email: 'melo@me.com' },
    { id: 2, primerNombre: 'Sandra', apellido: 'Duarte', edad: 57, email: 'sandra@me.com' },
    { id: 3, primerNombre: 'Luwing', apellido: 'Duarte', edad: 27, email: 'luwing@me.com' },
    { id: 4, primerNombre: 'Valentina', apellido: 'Duarte', edad: 16, email: 'valentina@me.com' }
];

//GET para obtener todos los usuarios
app.get('/api/users', (req, res) => {
    res.json(users);
});

//GET para obtener un usuario por ID
app.get("/api/users/:id", (req, res) => {
    const user = users.find(p => p.id === parseInt(req.params.id));
if(!user) {
    return res.states(404).send("El usuario no fue encontrado");
}
    res.json(product);
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});



