import { useState } from 'react';
import SaveIcon from '../../assets/icons/SaveIcon';
import { createNote } from '../../services/notesApi';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = async () => {
    try {
      const data = await createNote(title, content);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col h-full sm:w-full p-4 bg-black/50 backdrop-blur-md text-white rounded-3xl overflow-hidden scroll-smooth">
      <div className='flex justify-end items-center'>
         <div 
        onClick={handleSave}
        className='py-2 sm:py-2 px-4 rounded-xl transition cursor-pointer bg-black/30 hover:bg-white hover:text-black trabsition-all duration-150'
        >
          Save
        </div>
      </div>
       

      <div className="flex-1 overflow-auto flex flex-col gap-4 px-5 sm:px-10 py-5 sm:py-10 scrollbar-hide">

        <input
        onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="text-3xl sm:text-6xl font-bold w-full rounded-lg text-white placeholder-white/50 outline-none bg-transparent border border-none"
        />

        <textarea
        onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full rounded-lg text-white placeholder-white/50 outline-none bg-transparent border border-none h-full scrollbar-hide"
        />
      </div>
    </div>
  );
};

const Saved = () => {
  return (
    <div>
      
    </div>
  )
}

export default CreateNote;