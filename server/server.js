const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

//middleware

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.end("welcome");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
