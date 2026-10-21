const http = require('http')
const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer((req, res) => {
  // Parse the incoming request URL and query parameters
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`)
  
  // Get the values for x and y from the query string (e.g., /?x=10&y=20)
  const x = parseFloat(parsedUrl.searchParams.get('x')) || 0
  const y = parseFloat(parsedUrl.searchParams.get('y')) || 100

  // Apply Math.random() (generating a random number between x and y)
  const result = Math.random() * (y - x) + x

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  
  // Use string interpolation (backticks) to match the required output format
  res.end(`f(${x}, ${y}) is ${result}`)
})

server.listen(port, hostname, () => {
  console.log(`Compute server running at http://${hostname}:${port}/`)
})