const http=require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if(req.url === '/home'){
        res.end("Welcome to the Home Page");
    }
    else if(req.url === '/about'){
        res.end("Welcome to the About Page");
    }
    else if(req.url === '/contact'){
        res.end("Welcome to the Contact Page");
    }
    else{
        res.end("404 Page Not Found");
    }
}
);

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});