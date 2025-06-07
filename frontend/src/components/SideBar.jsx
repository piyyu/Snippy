import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SidebarToggle from '../assets/icons/SidebarToggle';

const SideBar =({sidebarOpen, setSidebarOpen, notes, setOpenNewNote}) => {
    const navigate = useNavigate();


  if(!sidebarOpen) {
     return <div className="fixed top-0 left-0">
      <div className='cursor-pointer p-1 hover:bg-gray-300 transition-all duration-300 rounded-sm m-2' onClick={
        () => {setSidebarOpen(!sidebarOpen)}
      }>
        <SidebarToggle />
      </div>
    </div>  
  }

  return <div className='w-96 h-screen bg-orange-300 rounded-lg px-4'>
    <div className='cursor-pointer p-1 hover:bg-gray-300 transition-all duration-300 rounded-sm m-2 w-fit' onClick={(
      () => {setSidebarOpen(!sidebarOpen)}
    )}>
      <SidebarToggle />
    </div>
    <div className='grid grid-rows-12 gap-4'>
        <div className='row-span-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300' onClick={
          () => {setOpenNewNote(true)}
        }>New Note</div>
        <div className='row-span-10 flex flex-col gap-4'>
            {notes.map((note) => (
                    <div key={note._id} className="border-2 border-gray-400">
                        <h2 className="">{note.title}</h2>
                    </div>
                ))
            }
        </div>
        <div className='row-span-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300' onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/auth');
        }}>Logout</div>
    </div>
  </div>
}

export default SideBar;
