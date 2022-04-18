import axios, { AxiosResponse } from 'axios';
import { io } from "socket.io-client";

export const axiosInstance = axios.create({
  baseURL: process.env['NX_API_URL']
});

const socketInstance = io(process.env['NX_WS_URL'],
  {
    path: '/socket.io',
    transports: ['websocket'],
    auth: { token: 'guest' },
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 3000,
  });

export const socket = {
  packet: (callback)=>{
    socketInstance.io.on("packet", ({ type, data }) => {
      callback(type, data)
    });
  },
  send:(event:string, data:any) =>{
    socketInstance.emit(event, data);
  },
  listen: (event:string, callback) =>{
    socketInstance.on(event, callback);
  },
  off: (event?: string) =>{
    socketInstance.off(event);
  },
  disconnect: () =>{
    socketInstance.disconnect();
  }
}