const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    if (url == "/home") {
        res.write("<html>");
        res.write("<head><title>Welcome home</title></head>");
        res.write("<body>Welcome to home page</body>");
        res.write("</html>");
        res.end();
    } else if (url == "/about") {
        res.write("<html>");
        res.write("<head><title>About</title></head>");
        res.write("<body>Welcome to About Us page</body>");
        res.write("</html>");
        res.end();
    } else if (url == "/node") {
        res.write("<html>");
        res.write("<head><title>Node</title></head>");
        res.write("<body>Welcome to my Node.js project</body>");
        res.write("</html>");
        res.end();
    } else {
        res.write("<html>");
        res.write("<head><title>This is my first page</title></head>");
        res.write("<body>Hello from Node.js server</body>");
        res.write("</html>");
        res.end();
    }
});

server.listen(3000);
