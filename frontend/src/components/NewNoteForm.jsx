import axios from 'axios';
import { useState } from 'react';

const NewNoteForm = ({ onCreateNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateNote = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/notes',
        { title, content },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      );

      setTitle('');
      setContent('');
      onCreateNote();
    } catch (error) {
      console.log("Failed to create note:", error.response?.data || error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-4'>
      <input
        className='border-2 border-blue-600 p-2 w-full max-w-md'
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className='border-2 border-blue-600 p-2 w-full max-w-md h-32'
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className='bg-blue-600 text-white px-4 py-2 rounded'
        onClick={handleCreateNote}
        disabled={!title || !content}
      >
        Create Note
      </button>
    </div>
  );
};

export default NewNoteForm;
