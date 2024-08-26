require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
<<<<<<< HEAD
const PORT = 8000;
=======
const PORT = process.env.PORT || 8000;
>>>>>>> ce3fac772431a8c8e9511f59f433c727b141f23c

// Routers
const authRouter = require("./Routes/auth");
const { userRouter } = require("./Routes/user");
const { friendRouter } = require("./Routes/friend");
const { postRouter } = require("./Routes/post");

//middelwares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
<<<<<<< HEAD
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
=======

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
>>>>>>> ce3fac772431a8c8e9511f59f433c727b141f23c

//db
const mongoose = require("mongoose");
const db =
  "mongodb+srv://naveen:Naveen4@users.pgffupa.mongodb.net/?retryWrites=true&w=majority&appName=Users";
<<<<<<< HEAD
=======

>>>>>>> ce3fac772431a8c8e9511f59f433c727b141f23c
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");

    const server = app.listen(PORT, () => {
      console.log("server has started on ", PORT);
    });

    const { initializeSocketIO } = require("./socketio.js");
    initializeSocketIO(server);
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/friend", friendRouter);
app.use("/post", postRouter);

const fetchNotification = require("./Controllers/fetchNotification");
const { authVerify } = require("./Controllers/authController");
app.get("/notification", authVerify, fetchNotification);
