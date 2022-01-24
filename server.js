const express = require("express");
const userRoutes = require("./Routes/userRoutes");
const cors = require("cors");

const app = express();
require("./database/DB");
require("dotenv").config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);

app.listen(process.env.PORT || 3002, () => {
  console.log(`server running in port 3002`);
});
