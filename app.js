import express from "express";
import { createServer } from "node:http";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { join } from "node:path";
import { hostname } from "node:os";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const __dirname = process.cwd();
const app = express();
const publicPath = join(__dirname, "public");

// Static file serving
app.use(express.static(publicPath));
app.use("/epoxy/", express.static(epoxyPath));
app.use("/baremux/", express.static(baremuxPath));

const server = createServer();

// Route handlers
app.get("/games", (req, res) => {
    res.sendFile(join(publicPath, "games.html"));
});

app.get("/apps", (req, res) => {
    res.sendFile(join(publicPath, "apps.html"));
});

app.get("/chat", (req, res) => {
    res.sendFile(join(publicPath, "chat.html"));
});

app.get("/settings", (req, res) => {
    res.sendFile(join(publicPath, "settings.html"));
});

app.get("/browser", (req, res) => {
    res.sendFile(join(publicPath, "browser.html"));
});

app.get("/", (req, res) => {
    res.sendFile(join(publicPath, "index.html"));
});

// 404 handler
app.use((req, res) => {
    res.status(404);
    res.sendFile(join(publicPath, "index.html"));
});

// CORS and security headers
server.on("request", (req, res) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "anonymous");
    app(req, res);
});

// WebSocket handling
server.on("upgrade", (req, socket, head) => {
    wisp.routeRequest(req, socket, head);
});

// Port configuration
let port = parseInt(process.env.PORT || "8080");
if (isNaN(port)) port = 8080;

// Server startup logging
server.on("listening", () => {
    const address = server.address();
    console.log("Listening on:");
    console.log(`\thttp://localhost:${address.port}`);
    console.log(`\thttp://${hostname()}:${address.port}`);
    console.log(
        `\thttp://${
            address.family === "IPv6" ? `[${address.address}]` : address.address
        }:${address.port}`
    );
});

// Graceful shutdown
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
    console.log("SIGTERM signal received: closing HTTP server");
    server.close();
    process.exit(0);
}

// Start server with dual-stack support
server.listen({
    port,
    host: '0.0.0.0',    // Listen on all IPv4 interfaces
    ipv6Only: false     // Enable dual-stack support
});