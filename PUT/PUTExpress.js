const express = require('express');
const app = express();
app.use(express.json());

let users = [
    {id: 1, primerNombre: "Melo", apellido: "Duarte", edad: 36, email:'melo@me.com'},
    //... otros usuarios
];

app.put('/api/users/:id', (req, res) => {
    // Encontrar al usuario por ID
    let user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) {
        // Si no existe, opcionalmente podrias crear una nuevo aqui
        res.status(404).send('User not found');
        return;
    }

    //Actualizar la informacion del usuario
    user.primerNombre = req.body.primerNombre;
    user.apellido = req.body.apellido;
    user.edad = req.body.edad;
    user.email = req.body.email;

    // Enviar una respuesta con el usuario actualizado
    res.json(user);
});

const port = 3000;
app.listen(port, () => console.log(`Servidor ejecutandose en el puerto ${port}`));