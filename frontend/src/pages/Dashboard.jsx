import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import SideBar from '../components/SideBar';
import CreateNote from '../components/CreateNote';
import Home from '../components/Home';
import EditNote from '../components/EditNote';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full h-screen">
      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        notes={notes}
      />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home notes={notes} setNotes={setNotes} />} />
          <Route path="new" element={<CreateNote />} />
          <Route path="edit/:noteId" element={<EditNote />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
