import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteItem from "./NoteItem";
import { fetchNotes } from "../api/noteApi";
import "./NoteList.css";

const NoteList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    const getNotes = async () => {
      try {
        const notesData = await fetchNotes();
        dispatch({ type: "SET_NOTES", payload: notesData });
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    getNotes();
  }, [dispatch]);

  return (
    <div className="todo-list-container">
      <h2 className="todo-list-title">Note List</h2>
      {notes.length === 0 ? (
        <p className="no-todos">No Notes found.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <NoteItem key={note._id} note={note} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;
