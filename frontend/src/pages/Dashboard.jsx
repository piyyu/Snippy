import { useState } from 'react';
import SideBar from '../components/SideBar';
import CreateNote from '../components/CreateNote';
import Home from '../components/Home';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openNewNote, setOpenNewNote] = useState(false);

  return (
    <div className="flex w-full h-screen">
      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setOpenNewNote={setOpenNewNote}
        notes={notes}
      />
      <div className="flex-1">
        {openNewNote ? <CreateNote /> : <Home notes={notes} setNotes={setNotes} setOpenNewNote={setOpenNewNote} />}
      </div>
    </div>
  );
};

export default Dashboard;
