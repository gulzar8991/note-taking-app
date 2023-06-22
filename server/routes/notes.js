const express = require("express");
const router = express.Router();

const Note = require("../models/Note");

//get all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//create a new note
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({
      title,
      content,
    });

    const saveNote = await newNote.save();
    res.json(saveNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//update a note
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      {
        title,
        content,
        updatedAt: Date.now(),
      },
      { new: true }
    );
    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a note
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Note.findByIdAndDelete(id);
    res.json({ message: "Note deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
