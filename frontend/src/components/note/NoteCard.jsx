import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NoteCard = ({ note }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home/notes/${note._id}`);
  };

  return (
    <motion.div
      className={`flex flex-col gap-4 p-4 h-24 sm:h-44 w-full sm:w-44 rounded-xl shadow bg-black/30 border-none cursor-pointer`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-xl line-clamp-1">{note.title}</div>
      <div className="text-sm line-clamp-3">{note.content}</div>
    </motion.div>
  );
};

export default NoteCard;
