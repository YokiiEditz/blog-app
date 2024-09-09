require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./router/postRoutes");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3002;

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Mongo DB connected!");
  })
  .catch((err) => console.log("DB Error!" + err.message));

//Router
app.use("/api/posts", postRoutes);

//Server
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
