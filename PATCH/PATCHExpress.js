const express = require('express');
const app = express();
app.use(express.json());

let users = [
    {id: 1, primerNombre: "Melo", apellido: "Duarte", edad: 36, email:'melo@me.com'},
    //... otros usuarios
]

app.patch('/api/users/:id', (req, res) => {
    // Encontrar el usuario por el ID
    let user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) {
        res.status(404).send('Usuario no encontrado');
        return;
    }

    // Actualizar solo los campos que se han proporcionado en el cuerpo de la solicitud
    Object.keys(req.body).forEach(key => {
        user[key] = req.body[key];
    });

    // Enviar una respuesta con el usuario actualizado
    res.send(user);
    });

    const port = 3000;
    app.listen(port, () => console.log(`Servidor ejecutandose en el puerto ${port}`));