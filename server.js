const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/data/array':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify([
          {
            name: 'John',
            age: 30,
          },
          {
            name: 'Adam',
            age: 19,
          },
        ]),
      );
      break;
    case '/data/object':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          name: 'John',
          age: 30,
        }),
      );
      break;
    case '/data/null':
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(null));
      break;
    case '/201':
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ created: 'successful' }));
      break;
    case '/204':
      res.writeHead(204, { 'Content-Type': 'application/json' });
      res.end();
      break;
    case '/400':
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Bad request' }));
      break;
    case '/401':
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Unauthorized' }));
      break;
    case '/403':
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Forbidden' }));
      break;
    case '/404':
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not Found' }));
      break;
    case '/500':
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
      break;
    case '/501':
      res.writeHead(501, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not implemented' }));
      break;
    case '/502':
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Bad gateway' }));
      break;
    case '/503':
      res.writeHead(503, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Service unavailable' }));
      break;
    case '/redirect':
      res.writeHead(302, {
        Location: '/demo',
      });
      res.end();
      break;
    case '/demo':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>Demo page!</h1>');
      break;
    case '/cookie':
      res.writeHead(200, { 'Content-Type': 'text/html', 'Set-Cookie': 'foo=bar' });
      res.end('<h1>Cookie set!</h1>');
      break;
    case '/xml':
      res.writeHead(200, { 'Content-Type': 'application/xml' });
      res.end(
        `<?xml version="1.0" encoding="UTF-8"?>
        <note>
          <to>Tove</to>
          <from>Jani</from>
          <heading>Reminder</heading>
          <body>Don't forget me this weekend!</body>
        </note>`,
      );
      break;
    case '/text':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
      break;
    default:
      res.writeHead(200, { 'Content-Type': 'text/html', Location: 'http://localhost:3000/' });
      res.end('<h1>Hello, World!</h1>');
      break;
  }
});

server.listen(port, () => console.log(`Server running at port ${port}`));
