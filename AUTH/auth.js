// auth.js
const jwt = require('jsonwebtoken');

// Clave secreta (en producción guárdala en un .env)
const SECRET_KEY = "mi_secreto_super_seguro";

// Funtion para autenticar y generar token
function NavigatorLogin(req, res) {
    const { email, password } = req.body;

//Aqui debes validar con tu base de datos
if( email === "admin@me.com" && password === "admin1234") {
    const token = jwt.sign({email}, SECRET_KEY, {expiresIn: "1h"});
    return res.json({ message: "Login exitoso", token});
}
res.status(401).json({ message: "Credenciales incorrectas" });
}
module.exports = { login, SECRET_KEY };