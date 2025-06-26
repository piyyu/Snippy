import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNoteById, updateNote } from "../../services/notesApi";
import PencilIcon from "../../assets/icons/PencilIcon";
import ReadingMode from "../../assets/icons/ReadingMode";
import SaveIcon from "../../assets/icons/SaveIcon";
import { motion } from "framer-motion";

const EditNote = () => {
  const [readMode, setReadMode] = useState(true);
  const { id } = useParams();
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchedData = async () => {
      const data = await getNoteById(id);
      setNote(data.note);
    };
    fetchedData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const saveNote = async () => {
    try {
      const response = await updateNote(id, note.title, note.content);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="flex flex-col gap-4 h-full sm:w-full p-4 bg-black/50 backdrop-blur-md text-white rounded-3xl overflow-hidden scroll-smooth"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-end gap-4 items-center">
        <button className="py-2 sm:py-2 px-4 rounded-xl transition cursor-pointer bg-black/30 hover:bg-white hover:text-black trabsition-all duration-150"
        onClick={saveNote}>Save</button>
        <button className="py-2 sm:py-2 px-4 rounded-xl transition cursor-pointer bg-black/30 hover:bg-red-400 hover:text-black trabsition-all duration-150">Delete</button>
      </div>

      {note.title && note.content && (
        <>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            // readOnly={readMode}
            className="text-3xl sm:text-6xl font-bold px-5 sm:px-10 bg-transparent outline-none border-none"
            placeholder="Enter Title"
          />
          <textarea
            name="content"
            value={note.content}
            onChange={handleChange}
            // readOnly={readMode}
            className="flex-1 px-5 sm:px-10 bg-transparent outline-none border-none resize-none overflow-y-auto scrollbar-hide"
            placeholder="Enter Content"
          />
        </>
      )}
    </motion.div>
  );
};

export default EditNote;
