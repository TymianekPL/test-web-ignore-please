import express from "express";
import { config } from "dotenv";

config();

const PORT = process.env.PORT;

const server = express();

server.all("/", (req, res) => {
     console.log(`Request from ${res.socket?.remoteAddress} ${req.method} ${req.path}`);
     res.json("ok");
});

server.listen(PORT, () => {
     console.log(`Backend listening on port ${PORT}`);
});
