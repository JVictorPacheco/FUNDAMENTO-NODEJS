import http from 'node:http'

// rodar npm run dev para executar o programa

const server = http.createServer((request, response) => {
    const { method, url } = request

    if (method ===       'GET' && url =='/users') {
            return response.end('Listagem de usuarios')
    } 

    if (method === 'POST' && url === '/users') {
            return response.end('Crição de usuario')
    } 

    

    return response.end("Hello teste")
})


server.listen(3333)

