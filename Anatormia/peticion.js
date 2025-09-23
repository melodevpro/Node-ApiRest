// Ejemplo de peticion GET con parametros de consulta
fetch('http://localhost:3000/api/tasks?completed=true')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Ejemplo de peticion POST con encabezados y cuerpo
fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token-here',
    },
    body:JSON.stringify({
        title: "Complete the project",
        description: "Finish the REST API project by Friday",
        dueDate: "2023-11-10"
    })
})
.then(response => response.json())
.then(data => console.log(data));