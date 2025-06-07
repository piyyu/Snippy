import axios from 'axios';
import { useState } from 'react';

const CreateNote = ({  }) => {
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
    } catch (error) {
      console.log("Failed to create note:", error.response?.data || error.message);
    }
  };

  return <div className='w-full h-screen bg-gray-200 flex justify-center items-center p-10'>
    <div className='w-2/3 h-screen grid grid-rows-12 gap-10 px-20 py-10'>
      <div className='row-span-1 bg-red-300 rounded-lg p-1 px-3' onClick={handleCreateNote}>
      save
      </div>
      <input
        onChange={(e) => setTitle(e.target.value)}
        contentEditable
        placeholder="New Note"
        className="row-span-1 p-2 text-base bg-transparent outline-none border border-transparent focus:border-gray-300 rounded-md whitespace-pre-wrap"
      />

      <textarea
        onChange={(e) => setContent(e.target.value)}
        contentEditable
        placeholder="Start writing..."
        className="row-span-10 p-2 text-base bg-transparent outline-none border border-transparent focus:border-gray-300 rounded-md">
      </textarea>
    </div>
  </div>
}

export default CreateNote;