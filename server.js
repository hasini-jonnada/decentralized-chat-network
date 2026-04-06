const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 5000 });
let peers = [];

server.on("connection", socket => {
    peers.push(socket);
    console.log("New peer connected");

    socket.on("message", msg => {
        const message = msg.toString();
        console.log("Received:", message);

        // broadcast to all other peers
        peers.forEach(peer => {
            if (peer !== socket) {
                peer.send(message);
            }
        });
    });
});