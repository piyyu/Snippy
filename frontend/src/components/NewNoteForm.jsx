import axios from 'axios';
import { useState } from 'react';

const NewNoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleCreteNote = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/notes', {
                title,
                content
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <input className='border-2 border-blue-600' placeholder="title" onChange={(e) => setTitle(e.target.value)} />
      <textarea className='border-2 border-blue-600' placeholder="content" onChange={(e) => setContent(e.target.value)} />
      <button className='bg-blue-600 text-white' onClick={handleCreteNote}>create note</button>
    </div>
  )
}

export default NewNoteForm;