import { createContext, useContext, useState } from 'react';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openNewNote, setOpenNewNote] = useState(false);

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        sidebarOpen,
        setSidebarOpen,
        openNewNote,
        setOpenNewNote
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => useContext(NoteContext);
