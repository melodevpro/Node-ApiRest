// Las API RPC, estan centradas en llamar a funciones remotas que difieren de la logica de REST, ya que se enfocan en trabajar con recursos y sus representaciones.
// llamada RPC a un servidor para ejecutar una funcion 'sumar'

fetch('gttp://www.ejemploapi.com/rpc', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'sumar',
        params: [1, 2],
        id: 1,
    }),
})
.then(response => response.json())
.then(data => console.log(data.result))
.catch(error => console.error('Error:', error));