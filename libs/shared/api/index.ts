import axios, { AxiosResponse } from "axios";
import { io } from "socket.io-client";

export const axiosInstance = axios.create({
  baseURL: process.env["NX_API_URL"],
});

if(!process.env["NX_WS_URL"]){
  throw new Error("Cannot found the Websocket URL");
}

const socketInstance = io(process.env["NX_WS_URL"], {
  path: "/socket.io",
  transports: ["websocket"],
  auth: { token: "guest" },
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
});

export const socket = {
  packet: (callback:any) => {
    socketInstance.io.on("packet", ({ type, data }) => {
      callback(type, data);
    });
  },
  send: (event: string, data: any) => {
    socketInstance.emit(event, data);
  },
  listen: (event: string, callback:any) => {
    socketInstance.on(event, callback);
  },
  off: (event?: string) => {
    if (event) socketInstance.off(event);
    else socketInstance.off();
  },
  updateAuth: (token: string) =>{
    socketInstance.auth = {token};
    socketInstance.disconnect();
    socketInstance.connect();
  },
  disconnect: () => {
    socketInstance.disconnect();
  },
};
