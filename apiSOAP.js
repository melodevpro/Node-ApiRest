// las API SOAP se adhierene a un protocolo concreto y requieren XML para la comunicacion.
// Contruye el cuerpo de la solicitud SOAP

var soapEnvelope =
`<?xml version="1.0"?>
<soapenv:Envelope xmlns:soapenv = "http://schemas.xm;soap.org/soap/envelope/" xmlns:web="http://www.example.com/webservice">
<soapenv:Header/>
<soapenv:Body>
<web:Add>
<web:number1>5</web:number1>
<web:number2>3</web:number2>
</web:Add>
</soapenv:Body>
</soapenv:Envelope>`;

// configura la solicitud
fetch('http://www.examplewebservice.com/soap', {
    method: 'POST',
    headers: {
        'Content-Type': 'text/x,l; charset-utf-8',
        'SOAPAction': 'http://www.example.com/webservice/Add' // Cambia esto por la accion real que esperes en el servidor
    },
    body: soapEnvelope
})
.then(response => response.text())
.then(soapResponse => {
    // Procesa aqui la respuesta SOAP, extrae el resultado utilizando DOM o una libreria como xml2js
    console.log(soapResponse);
})
.catch(error => {
    console.error('Error:', error);
});