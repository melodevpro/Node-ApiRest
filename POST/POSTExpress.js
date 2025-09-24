const express = require('express');
const app = express();
app.use(express.json());

let users = []; // Este array simulara nuestra base de datos.

//POST crear un nuevo usuario:
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        primerNombre: req.body.primerNombre,
        apellido: req.body.apellidos,
        edad: req.body.edad,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

const port = 3000;
app.listen(port, () => console.log(`Servidor ejecutandose en el puerto ${port}`));
