const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/v1/users.routes");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/users", userRoute);

app.all("*", (req, res) => {
  res.send("No route found");
});
app.listen(port, () => {
  console.log("HEY connected database", port);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
