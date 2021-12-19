const express = require("express");
const app = express();
const videosRoutes = require("./routes/videos");

app.use(express.json());
app.use(express.static("public"));
app.use("/videos", videosRoutes);

app.listen(8080, () => {
  console.log("💃 server running on 8080");
});
