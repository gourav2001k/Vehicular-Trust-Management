const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const socketio = require("socket.io");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const trustRoutes = require("./routes/trust");

app.use("", trustRoutes);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});

module.exports = io;
