// Las Api en tiempo real, dentro de ellas tenemos los WebSockets, que facilitan la comunicacion vidireccional constante, a diferenecia del modelo de solictud de REXTm que no es ideal para la cimunicacion en tiempo real.
// Cliente WebSocket que envia un mensaje para sumar dos numeros

// Crear conexion con el servidor websocket
const socket = new WebSocket('ws:///www.ejemploapi.com/');

// Escuchar eventos de conexion abierta
socket.addEventListener('open', function (event) {
    // ENviar un mensaje al servidor para + dos numeros
    socket.send(JSON.stringify({action: 'sumar', numero1:1, numero2: 2}));
});

// Escuchar mensajes del servidor
socket.addEventListener('message', function (event) {
    console.log('Mensaje del servidor:', event.data);
    let result = JSON.parse(event.data);
    if (result.action === 'sumar') {
        console.log('La suma es:', result.sumaTotal);
    }
});

// Manejar cualquier error que ocurra
socket.addEventListener('error', function(event) {
    console.error('Error recibido del servidor', event);
});

//asegurarse de cerrar la conexion cuando el documento se cierra o recarga
window.addEventListener('Beforeunload', function () {
    socket.close();
})