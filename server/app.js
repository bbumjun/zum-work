const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use("/best", require("./api/best"));
app.use("/content", require("./api/content"));

app.listen(3000, () => {
  console.log("server is running");
});
