const http = require('http')

const server = http.createServer((req, res) => {
  console.log("Someone is accessing the server...")

  if (req.url === '/') {
    res.writeHead(200, { "Content-Type": "text/plain"})
    res.end('Hello')
  } else if (req.url === '/about') {
    res.writeHead(200, { "Content-Type": "text/html"})
    res.end('<h1>Hello world</h1>')
  }
})

server.listen(3000, () => {
  console.log(`Server is running on port 3000...`)
})