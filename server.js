const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? '/index.htm' : req.url);
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
            return;
        }
        
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(content);
    });
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
