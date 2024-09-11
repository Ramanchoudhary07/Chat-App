import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: ["http://localhost:3000"],
  methods: ["GET", "POST"],
});

export const getRecieverSocketId = (recieverId) => {
  return socketUserMap[recieverId];
};

const socketUserMap = {};

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") {
    socketUserMap[userId] = socket.id;
  }
  io.emit("getOnlineUsers", Object.keys(socketUserMap));

  socket.on("disconnect", (socket) => {
    console.log("user disconnected:", socket.id);
    delete socketUserMap[userId];
    io.emit("getOnlineUsers", Object.keys(socketUserMap));
  });
});

export { app, io, server };
