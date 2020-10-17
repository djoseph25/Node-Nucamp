const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
	console.log(req.headers);
	//NOTE 200 mean everything Ok
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/html');
	//NOTE if my html is short i can just send in my res.end()
	res.end(`<html><body><h1>HEllo World!</h1></body></html>`);
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`)
})