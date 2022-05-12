import axios, { AxiosRequestConfig } from "axios";
import { io } from "socket.io-client";

export const axiosInstance = axios.create({
  baseURL: process.env["NX_API_URL"],
});

export function axiosAuthorization(config : AxiosRequestConfig) {
  const anonymousToken = localStorage?.getItem('anonymousToken');
  const sessionToken = localStorage?.getItem('sessionToken');
  // @ts-ignore
  config.headers["x-access-token"] =  anonymousToken ? anonymousToken : "";
  // @ts-ignore
  config.headers["Authorization"] =  sessionToken ? sessionToken : "";
  // @ts-ignore
  config.headers["x-api-key"]=  "DIFXExchange";
  // @ts-ignore
  config.headers["Device"]=  "web";
  return config;
}


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
    const currentAuth:any = socketInstance.auth;
    if(currentAuth.token !== token){
      socketInstance.auth = {token};
      socketInstance.disconnect();
      socketInstance.connect();
    }
  },
  disconnect: () => {
    socketInstance.disconnect();
  },
};
