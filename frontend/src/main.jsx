import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { MyContextProvier } from "./context/MyContext";
import "./pages/custom-scrollbar.css";
import socketIOClient from "socket.io-client";

<<<<<<< HEAD
const socket = socketIOClient(`http://localhost:8000`);
=======
const socket = socketIOClient(`${import.meta.env.VITE_SERVER_URL}`);
>>>>>>> ce3fac772431a8c8e9511f59f433c727b141f23c

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvier socket={socket}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </MyContextProvier>
  </React.StrictMode>
);
