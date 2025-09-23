// Obtener la lista de tareas
fetch('http://localhost:3000/api/tasks')
.then(response => response.json())
.then(tareas => console.log(tareas));

// CRear una nueva tarea
fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify({ title: 'Nueva Tarea', copleted: false }),
})
.then(response => response.json())
.then(NuevaTarea => console.log(NuevaTarea))
.catch(error => console.error('Error:', error));

// Actualizar una tarea existente
fetch('http://localhost:3000/api/tasks/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: 'Actualizar Tarea',  completed: true }),
})

// ELiminar una tarea
fetch('http://localhost:3000/api/tasks/1', {
    method: 'DELETE',
})
.then(response => response.json())
.then(eliminada => console.log('Tarea eliminada:', eliminada))
.then(error => console.error('Error:', error));