import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteNote } from "../api/noteApi";
import "./NoteItem.css";

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await deleteNote(note._id);
      // Refresh the todo list after deleting the todo
      dispatch({ type: "DELETE_NOTE", payload: note._id });
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <li className="todo-item">
      <h3 className="todo-item-title">{note.title}</h3>
      <p className="todo-item-description">{note.content}</p>
      <button className="todo-item-delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteItem;
