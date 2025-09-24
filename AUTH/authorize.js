// authorize.js
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./auth');

//Middleware para autorizar solicitudes o para verificar el token
function authorize(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1]; // Obtiene el token del encabezado de autorizacion

    if(!token) {
        return res.status(403).json({ message: "Token requerido" });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token invalido o expirado" });
        }
        req.user = user; // Guardamos la info del usuario en la request
        next();
    });
}
module.exports = authorize;