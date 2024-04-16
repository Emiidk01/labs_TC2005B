const http = require('http');   
const fs = require('fs');
const path = require('path');


const server = http.createServer( (request, response) => {    
     console.log(request.url);
     response.setHeader('Content-Type', 'text/html');
     const lab = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
     response.write(lab);
     response.end();
});
server.listen(3000);