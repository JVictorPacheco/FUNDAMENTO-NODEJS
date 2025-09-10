import http from 'node:http'

// rodar npm run dev para executar o programa

const users = []

const server = http.createServer((request, response) => {
    const { method, url } = request

    if (method === 'GET' && url === '/users') {
          return response
                .setHeader('Content-type', 'applications/json')
                .end(JSON.stringify(users)) //CONVERTENDO O TIPO DA VARIAVEL USER QUE E ARRAY PARA STRING
    } 


    if (method === 'POST' && url === '/users') {

            users.push({
                id: 1,
                name: 'João pacheco',
                email: 'vreds433@gmail.com'
            })

            return response.end('Crição de usuario')
    } 

    

    return response.end("Hello teste")
})


server.listen(3333)

