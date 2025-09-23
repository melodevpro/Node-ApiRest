// Obtener tareas (GET)
fetch('http://localhost:3000/api/tasks')
    .then(response => response.json())
    .then(data => console.log('Tasks:', data))
    .catch(error => console.error('Error:', error));

// Crear una nueva tarea (POST)
fetch ('http://localhost:3000/api/tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        body:JSON.stringify({ title: 'New Task', completed: false }),
    },
    body: JSON.stringify({ title: 'aprender Node.js', completed: true }),
})
.then(response => response.json())
.then(data => console.log('Update Task:', data))
.catch(error => console.error('Error:', error));

// Actualizar una tarea existente (PUT)
fetch('http://localhost:3000/api/tasks/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'aprender Node.js', completed: true }),
})
.then(response => response.json())
.then(data => console.log('Update Task:', data))
.catch(error => console.error('Error:', error));

// Eliminar una tarea (DELETE)
fetch('http://localhost:3000/api/tasks/1', {
    method: 'DELETE',
})
.then(response => response.json())
.then(data => console.log('Delete Task:', data))
.catch(error => console.error('Error:', error));
