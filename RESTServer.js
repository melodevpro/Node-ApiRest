const express = require('express');
const app = express();
app.use(express.json());

// Modelo de datos en memoria para simplificar el ejemplo
let tasks = [
    { id: 1, title: 'aprender Node.js', completed: false },
    { id: 2, title: 'aprender Express.js', completed: false },
    { id: 3, title: 'aprender MongoDB', completed: false }
];

// Obtner todas las tareas o lista de tareas
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Crear una nueva tarea (POST /api/tasks)
app.post('/api/taks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTasks);
});

// Actualizar una tarea existente con PUT 
app.put('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).send('Tarea no encontrada');
    task.title = req.body.title;
    task.completed = req.body.completed;
    res.json(task);
});

// Eliminar una tarea existente con DELETE
app.delete('/api/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).send('Tarea no encontrada');
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
})