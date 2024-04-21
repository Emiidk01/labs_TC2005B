const http = require('http');
const path = require('path');
const fs   = require('fs');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    
    switch(request.url){
        case "/":
            response.setHeader('Content-Type', 'text/html');
            response.write("<h1>WELCOME</h1>");
            response.end();
            break;
        case "/smiths":
            response.setHeader('Content-Type', 'text/html');
            const smiths_html = fs.readFileSync(path.resolve(__dirname,'./smiths.html'), 'utf-8')
            response.write(smiths_html);
            response.end();
            break;
        case "/login":
            if(request.method == "GET"){
                response.setHeader('Content-Type', 'text/html');
                const html = fs.readFileSync(path.resolve(__dirname, './form.html'), 'utf-8')
                response.write(html);
                response.end();
            }else if(request.method == "POST"){
                let body = [];
                request
                .on('data', chunk => {
                    body.push(chunk);
                })
                .on('end', () => {
                    body = Buffer.concat(body).toString();
                    console.log(body);

                    const username = body.split('&')[0].split('=')[1];
                    console.log(username);
                    const password = body.split('&')[1].split('=')[1];
                    console.log(password);


                    response.setHeader('Content-Type', 'application/json');
                    response.statusCode = 200;
                    response.write('{code:200, msg:"Ok POST"}');
                    response.end();
                });
            }
            break;
        default:
            response.statusCode = 404;
            response.end();
            break;
    }
});
server.listen(3000);
