import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../api/noteApi";
import "./NoteForm.css";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newTodo = {
        title,
        content,
      };

      const createdNote = await createNote(newTodo);
      dispatch({ type: "ADD_NOTE", payload: createdNote });
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div className="todo-form-container">
      <h2 className="todo-form-title">Add Note</h2>
      <form onSubmit={handleSubmit}>
        <label className="todo-form-label" htmlFor="title">
          Title:
        </label>
        <input
          className="todo-form-input"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="todo-form-label" htmlFor="description">
          Content:
        </label>
        <textarea
          className="todo-form-textarea"
          id="description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button className="todo-form-submit" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
