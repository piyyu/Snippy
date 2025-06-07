import axios from "axios";
import { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";

const Home = ({notes, setNotes}) => {

  const handleGetNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/notes", {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      console.log(response.data.notes);
      setNotes(response.data.notes);
    } catch (error) {
      console.log("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    handleGetNotes();
  }, []);

  const handleClick =(val) => {
    console.log(val)
  }

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl font-bold">Notes App</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note._id} title={note.title} content={note.content} onClick={() =>handleClick(note)} />
        ))}
      </div>
    </div>
  );
};

export default Home;
