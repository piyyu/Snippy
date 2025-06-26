import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/icons/AddIcon";
import { getNotes } from "../../services/notesApi";
import NoteCard from "./NoteCard";

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await getNotes();
        setNotes(data.notes);


      } catch (error) {
        console.error("Error fetching notes:", error);
        setNotes([]);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="flex flex-col gap-4 h-full sm:w-full p-4 bg-black/50 backdrop-blur-md text-white overflow-auto rounded-3xl scroll-smooth">
      <div className="flex justify-between sm:p-10 p-5">
        <div className="sm:text-6xl text-3xl font-bold flex justify-center items-center">Notes</div>
        <div onClick={() => navigate("/home/create")}><AddIcon /></div>
      </div>
      {notes.length === 0 ? 
       <div className="flex justify-center items-center h-full text-3xl text-white rounded-lg overflow-hidden scroll-smooth">Add Notes to see them here</div>
        :
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center gap-4 overflow-y-auto scrollbar-hide">
        {[...notes].reverse().map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
}
      
    </div>
  );
};

export default ViewNotes;