const express = require('express');
const app = express();
app.use(express.json());

let articles = []; // Este array simulara nuestra base de datos.

app.post('/api/articles', (req, res) => {
    // Crear un nuevo articulo con la informacion recibida en el cuerpo de la solicitud
    const newArticle = {
        id: articles.length + 1,
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        createAt: new Date().toISOString()
    };
    articles.push(newArticle);

    // Enviar una respuesta con el articulo creado y el codigo de estado 201
    res.status(201).location('/api/articles/${newArticle.id}').send(newArticle);
});

const port = 3000;
app.listen(port, () => console.log(`Servidor ejecutandose en el puerto ${port}`));
