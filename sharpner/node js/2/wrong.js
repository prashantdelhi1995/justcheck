const http = require("http");
const fs=require("fs")

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    const method=req.method;
    if (url == "/" ){
        res.write("<html>");
        res.write("<head><title>Welcome home</title></head>");
        res.write("<body><form method='POST'><input type='text'><button type='submit'>submit</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    else if (url == "/" && method=="POST"){
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk)

        })
        req.on('end',()=>{
            console.log(body)
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split("=")[1];
            console.log(message)
           
            

        })

        
    }
});

server.listen(3000);
