// Peticion POST para sumar dos numeros en una API REST
fetch('https://www.ejemploapi.com/sumar', {
    method: 'POST', // Metodo HTTP
    headers: {
        'Content-Type': 'aplication/json' // Tipo de contenido
    },
    body: JSON.stringify({ numero1: 1, numero2: 2 }) // Cuerpo de la peticion en formato JSON
})
.then(response => response.json()) // Parsear la respuesta JSON
.then(data => console.log(data.sumaTotal)) // Mostrar el resultado de la suma
.catch(error => console.error('Error:', error)); // Manejar errores