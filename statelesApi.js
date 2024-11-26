// Una API REST = INterfaz de programacion de aplicaciones para la trasnferencia de estado representacional
// Sigue una serie de principios de disenos conocidos como REST.
const express = require('express');
const app = express();
const port = 3000;

// utilizamos middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json()); // arquitectura en capas

// Stateless: cada peticion a '/post/id' necesita un 'id' para procesar y devolver la respuesta correcta
let posts = [
    {id: 1, title: 'Express.js Guide', content: 'Some content here', author: 'author A'},
    {id: 2, title: 'Node.js with Express', content: 'More content here', author: 'author B'},
];

// GET - Leer todos los posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Todas las operaciones tienen el mismo patron

// GET - Leer un post especifico por ID
app.get('/posts/:id', (req, res) => { // Identifica los recursos mediante URIs como /posts/:id
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('El post no fue encontrado.');
    res.json(post);
});

// POST - Crear un nuevo post
app.post('/posts', (req, res) => {
    const { title, content, author } = req.body;
    const newPost = { id: posts.length + 1, title, content, author};
    posts.push(newPost);
    res.status(201).send(newPost);
});

// PUT - Actualizar un post existente por ID
app.put('/posts/:id', (req, res) => {
    let post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('El post no fue encontrado');

    const { title, content, author } = req.body;
    post.title = title;
    post.content = content;
    post.author = author;
    res.send(post);
});

// DELETE - Elminar el post por ID
app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).send('El post no fue encontrado');

    const deletePost = posts.splice(postIndex, 1);
    res.send(deletedPost[0]);
});

// Arquitectura de capas: en este caso no esta explicitamente representada, pero el uso de Express como middleware sugiere que podriamos usar facilmente mas capas, como autenticacion, loggin, servicios de carga de archivos, etc.
app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});