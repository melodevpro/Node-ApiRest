// Las Api GraphQL permite a los clientes especificar presisamente que datos necesitan, lo que puede optimizar las comunicaciones y reducir el exceso de carda de red.
fetch('http://www.ejemploapi.com/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        query: `
        mutation AddNumbers($numberOne: Int!, $numberTwo: Int!) {
        add(numberOne: $numberOne, numberTwo: $numberTwo ) {
        sum
        }
    }
    `,
    variables: {
        numberOne: 1,
        numberTwo: 2
    }
    }),
})
.then(r => r.json())
.then(data => console.log('data returned:', data))
.catch(error => console.error('Error in GraphQL mutation:', error));