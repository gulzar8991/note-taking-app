export const removeNote = (noteId) => {
  return {
    type: "REMOVE_NOTE",
    payload: noteId,
  };
};
