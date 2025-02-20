const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>hello world</h1>'); //sending response to client
});

server.listen(9000,(err)=>{
    if (err){
        console.log('Error occured: ', err);
    }
    console.log('Server is running on port 9000');
});