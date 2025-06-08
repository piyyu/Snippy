import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import SideBar from '../components/layout/SideBar';
import CreateNote from '../components/note/CreateNote';
import Home from '../components/layout/Home';
import EditNote from '../components/note/EditNote';

const Dashboard = () => {

  return (
    <div className='flex'>
        <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-note" element={<CreateNote />} />
        <Route path="/edit-note/:id" element={<EditNote />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
