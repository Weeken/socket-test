import express from "express";
import { resolve } from "node:path";
import { logger } from "./logger.js";
import { Chalk } from "chalk";
import { createServer } from "node:http";
import { Server } from "socket.io";

const socketServer = createServer();

const mySocket: Server = new Server(socketServer, {
  // options
  cors: {
    origin: "*",
  },
});

const chalk = new Chalk({ level: 3 });

const cwd = process.cwd();
const ROOT = resolve(cwd, "../");

const webserver = express();

socketServer.listen(3434);

webserver.use(express.static(resolve(ROOT, "dist")));

webserver.listen(8888);

logger("请打开：");
logger(chalk.cyan(`http://localhost:8888/`), {
  title: chalk.yellow(`local: `),
  color: "",
});

mySocket.on("connection", (socket) => {
  logger("socket connected");
  // ...
});

setInterval(() => {
  logger("send");
  mySocket.emit("log", {
    log: "test msg",
  });
}, 5000);
