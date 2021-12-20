// import all files here
const express = require("express");
const cors = require("cors");
const app = express();
const videosRoutes = require("./routes/videos");

// to make .env files available
require("dotenv").config();
const PORT = process.env.PORT || 6060;

// cors middle ware to allow access to requests from client URL
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use("/videos", videosRoutes);

app.listen(PORT, () => {
  console.log(`💃 server running on ${PORT}`);
});
