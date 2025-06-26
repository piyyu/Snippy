import SideBar from './SideBar';
import Dashboard from '../../pages/Dashboard';
import AnimatedBg from '../common/AnimatedBg';
import { Routes, Route } from 'react-router-dom';
import CreateNote from '../note/CreateNote';
import ViewNotes from '../note/ViewNotes';
import EditNote from '../note/EditNote';
import Settings from '../setting/Settings';

const Home = () => {
  return (
    <AnimatedBg>
      <div className="flex flex-col sm:flex-row gap-4 h-screen w-screen p-2 sm:p-4 rounded-lg">
        <SideBar />

        <div className="flex-1 overflow-y-auto pt-16 sm:pt-0">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="notes" element={<ViewNotes />} />
            <Route path="notes/:id" element={<EditNote />} />
            <Route path="create" element={<CreateNote />} />
            <Route path="settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </AnimatedBg>
  );
};

export default Home;