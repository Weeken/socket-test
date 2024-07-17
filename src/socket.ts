import { io, Socket } from "socket.io-client";

export const initSocket = async () => {
  const port = 3434;

  const protocol: string = location.protocol === "https:" ? "wss://" : "ws://";
  const socketURL: string = protocol + location.hostname + `:${port}`;

  const socket: Socket = io(socketURL);
  socket.connect();

  socket.on("connect", () => {
    console.log(
      "%c [ socket connected ]",
      "font-size:13px; background:rgba(66, 184, 131, 0.2); color:#05a15b;"
    );
  });

  socket.on("disconnect", () => {
    console.log(
      "%c [ socket disconnected ]",
      "font-size:13px; background:rgba(66, 184, 131, 0.2); color:#05a15b;"
    );
  });

  socket.on("log", (data: string) => {
    console.log(
      "%c [ socket log ]",
      "font-size:13px; background:rgba(66, 184, 131, 0.2); color:#05a15b;",
      data
    );
  });

  return socket;
};
