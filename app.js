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
const userDetailUpdate = require("./routes/updates");
app.get("/hello", (req, res) => {
  res.send("okay done");
});

app.use("/Api", authRoute);
app.use("/User", loginRoute);
app.use("/Users", usersRoute);
app.use("/userDetailUpdate", userDetailUpdate);

const port = process.env.PORT || 8003;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
