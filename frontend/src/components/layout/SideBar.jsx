import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SidebarToggle from '../../assets/icons/SidebarToggle';
import { useNote } from '../context/NoteContext';

const SideBar = () => {
  const { sidebarOpen, setSidebarOpen, notes } = useNote();
  const navigate = useNavigate();

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-0 left-0 z-50">
        <div
          className="cursor-pointer p-1 bg-white hover:bg-gray-300 transition-all duration-300 rounded-sm m-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <SidebarToggle />
        </div>
      </div>

      {/* Sidebar with transition */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-96 bg-orange-300 opacity-75 rounded-lg px-4 pt-10 z-40 transition-transform duration-300 overflow-y-auto scrollbar-hide
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="grid grid-rows-12 gap-4 py-10">
          <div
            className="row-span-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300"
            onClick={() => navigate('/dashboard/new-note')}
          >
            New Note
          </div>
          <div
            className="row-span-1 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-300 transition-all duration-300"
            onClick={() => navigate('/dashboard/')}
          >
            Home
          </div>
          <div className="row-span-10 flex flex-col gap-4 overflow-y-auto pr-2">
            {notes.map((note) => (
              <div
                key={note._id}
                className="border-2 border-gray-400 px-2 py-1 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                onClick={() => navigate(`/dashboard/edit-note/${note._id}`)}
              >
                <h2>{note.title}</h2>
              </div>
            ))}
          </div>
          <div
            className="row-span-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300"
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              navigate('/auth');
            }}
          >
            Logout
          </div>
        </div>
      </div>
    </>
  );
};


export default SideBar;
