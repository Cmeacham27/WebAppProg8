const http = require('http')
const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  
  res.end(`
    <html>
    <head>
      <title>Served</title>
    </head>
    <body>
      <table border="1">
        <tr>
          <th> Cities to Visit </th>
          <th> Reason </th>
          <th> Distance </th>
          <th> Cost </th>
        </tr>
        <tr>
          <td> Athens </td>
          <td> Old Architecture, Beautiful landscape, Historical significance </td>
          <td> 6,200 miles </td>
          <td> $712-$1,054 </td>
        </tr>
        <tr>
          <td> New York City </td>
          <td> Walk through times square during Christmas time </td>
          <td> 2,420 miles </td>
          <td> $220-$480 </td>
        </tr>
        <tr>
          <td> Los Angeles </td>
          <td> Great weather and the Hollywood walk of fame </td>
          <td> 954 miles </td>
          <td> $130-$310 </td>
        </tr>
        <tr>
          <td> Miami </td>
          <td> Hangout at the beach and golf along the east coast </td>
          <td> 2,724 miles </td>
          <td> $220-$450 </td>
        </tr>
      </table>
    </body>
    </html>
  `)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})