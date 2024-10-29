"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((request, response) => {
    console.log("A wild client appears!", request.url);
    // /test endpoint
    if (request.url === "/test") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Hello Client in test!!!!!</h1>");
        response.end();
        return;
    }
    // /about endpoint
    if (request.url === "/about") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>About Us :)</h1><p>This is the about page!!!!!</p>");
        response.end();
        return;
    }
    // /contact endpoint
    if (request.url === "/contact") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Contact Us</h1><p>Email: contact@example.com</p>");
        response.end();
        return;
    }
    // /json endpoint
    if (request.url === '/') {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>This is the homepage!</h1>");
        response.end();
        return;
    }
    if (request.url === "/json") {
        response.writeHead(200, { "Content-Type": "application/json" });
        const jsonResponse = {
            message: "Hello, this is JSON!",
            success: true,
            data: {
                name: "John Doe",
                age: 30
            }
        };
        response.write(JSON.stringify(jsonResponse));
        response.end();
        return;
    }
    // /notfound for any other routes
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>");
    response.end();
});
server.listen(3000, () => console.log("Server is running at port 3000"));
