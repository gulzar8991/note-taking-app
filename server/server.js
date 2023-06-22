const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const notesRouter = require("./routes/notes");

const app = express();
const PORT = 8000;

//middleware

app.use(cors());
app.use(express.json());

//database

const dbURL = "mongodb://127.0.0.1:27017/note-taking-db";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => console.error("MongoDB connection error:", error));

app.use("/api/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
