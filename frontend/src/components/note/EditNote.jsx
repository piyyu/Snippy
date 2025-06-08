import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditNote = () => {
  const { id } = useParams();
  const [note, setNote] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);

  const fetchNote = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/notes/${id}`, {
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      setNote(response.data.note);
    } catch (error) {
      console.error('Error fetching note:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNote();
  }, [id]);

  const handleUpdateNote = async () => {
    try {
      await axios.put(`http://localhost:3000/api/notes/${id}`, {
        title: note.title,
        content: note.content,
      }, {
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      alert('Note updated successfully!');
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!note) return <div>Note not found</div>;

  return (
    <div className='w-full h-screen bg-gray-200 flex justify-center items-center p-10'>
      <div className='w-3/6 h-screen grid grid-rows-12 gap-10 px-20 py-10'>
        <div className='row-span-1 bg-green-400 rounded-lg p-1 px-3 text-center cursor-pointer' onClick={handleUpdateNote}>
          update
        </div>

        <input
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          placeholder="Edit Title"
          className="row-span-1 p-2 text-base bg-transparent outline-none border border-transparent focus:border-gray-300 rounded-md whitespace-pre-wrap"
        />

        <textarea
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
          placeholder="Edit Content"
          className="row-span-10 p-2 text-base bg-transparent outline-none border border-transparent focus:border-gray-300 rounded-md"
        ></textarea>
      </div>
    </div>
  );
};

export default EditNote;
