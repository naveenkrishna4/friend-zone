const socket = require("socket.io");

let io;

const initializeSocketIO = (server) => {
  io = socket(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
<<<<<<< HEAD
    console.log("User connected (socket)");

    socket.on("disconnect", () => {
      console.log("User disconnected (socket)");
=======
    console.log("user connected (socket)");

    socket.on("disconnect", () => {
      console.log("user Disconnected (d socket)");
>>>>>>> ce3fac772431a8c8e9511f59f433c727b141f23c
    });
  });
};

const getIO = () => io;

module.exports = { initializeSocketIO, getIO };
