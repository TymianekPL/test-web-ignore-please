"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const PORT = process.env.PORT;
const server = (0, express_1.default)();
server.all("/", (req, res) => {
    console.log(`Request from ${res.socket?.remoteAddress} ${req.method} ${req.path}`);
    res.json("ok");
});
server.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
});
