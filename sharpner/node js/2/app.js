const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        let file=fs.readFileSync('message.txt','utf-8')
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Welcome home</title></head>");
        res.write(`<body><p>${file}</p></p><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>`);
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });

       return  req.on("end", () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split("=")[1];
            fs.writeFileSync("message.txt", message)
            res.setHeader("Location", "/");
            res.statusCode = 302;
            return res.end()
            
            
            
        });
       

          
        
    }
});

server.listen(3000);
