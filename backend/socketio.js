const socket = require("socket.io");

let io;

const initializeSocketIO = (server) => {
  io = socket(server, {
    cors: {
      origin: "*",
    },
  });
};

const getIO = () => io;

module.exports = { initializeSocketIO, getIO };
