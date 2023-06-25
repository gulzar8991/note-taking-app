import axios from "axios";

const API_BASE_URL = "/api/notes";

// Fetch all notes
export const fetchNotes = async () => {
  try {
    // console.log("Fetching todos...");
    const response = await axios.get(API_BASE_URL);
    // console.log("Todos fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    // console.error("Error fetching todos:", error);
    throw error;
  }
};

// Add a new todo
export const createNote = async (newNote) => {
  try {
    const response = await axios.post(API_BASE_URL, newNote);
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

// Update a Note
export const updateNote = async (NoteId, updatedNote) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${NoteId}`, updatedNote);
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// Delete a todo
export const deleteNote = async (noteId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${noteId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
