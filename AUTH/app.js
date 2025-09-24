// app.js
const express = require("express");
const app = express();
app.use(express.json());

const { login } = require("./auth");
const authorize = require("./authorize");

// Base de datos simulada
let users = [
    { id: 1, primerNombre: "Melo", apellido: "Duarte", edad: 36, email: "melo@me.com" },
    { id: 2, primerNombre: "Alan", apellido: "Matthias", edad: 28, email: "alan@me.com" }
];

// 🟢 RUTA DE LOGIN (pública)
app.post("/api/login", login);

// 🟢 RUTA PROTEGIDA: obtener todos los usuarios
app.get("/api/users", authorize, (req, res) => {
    res.json(users);
});

// 🟢 RUTA PROTEGIDA: obtener un usuario
app.get("/api/users/:id", authorize, (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found");
    res.json(user);
});

// 🟢 RUTA PROTEGIDA: crear usuario
app.post("/api/users", authorize, (req, res) => {
    const newUser = {
        id: users.length + 1,
        primerNombre: req.body.primerNombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

const port = 3000;
app.listen(port, () => console.log(`Servidor ejecutándose en el puerto ${port}`));
