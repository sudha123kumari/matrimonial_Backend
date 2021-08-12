require("dotenv").config();
const express = require("express");
const cors = require("cors");

require("./db/connectDB");
const app = express();
app.use(express.json());
app.use(cors());
const authRoute = require("./routes/auth");
const loginRoute = require("./routes/login");
const usersRoute = require("./routes/users");
app.get("/hello", (req, res) => {
  res.send("okay done");
});

app.use("/Api", authRoute);
app.use("/User", loginRoute);
app.use("/Users", usersRoute);

const port = 8003;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
