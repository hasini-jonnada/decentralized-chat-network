const WebSocket = require("ws");
const socket = new WebSocket("ws://localhost:5000");

socket.on("open", () => {
    console.log("Connected to server");
});

socket.on("message", msg => {
    console.log("Received:", msg.toString());
});

process.stdin.on("data", data => {
    socket.send(data.toString().trim());
});