const express = require('express');
const app = express();
app.use(express.json());

let users = [
    {id: 1, primerNombre: "Melo", apellido: "Duarte", edad: 36, email:'melo@me.com'},
    //... otros usuarios
];

app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if(userIndex === -1) {
        return res.status(404).send('El usuario no fue encontrado');
    }
    
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.send({message: `El usuario con ID ${req.params.id} ha sido eliminado`});
});
const port = 3000;
app.listen(port, () => console.log(`Servidor ejecutandose en el puerto ${port}`));