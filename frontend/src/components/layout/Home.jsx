import SideBar from './SideBar';
import Dashboard from '../../pages/Dashboard';
import AnimatedBg from '../common/AnimatedBg';
import { Routes, Route } from 'react-router-dom';
import CreateNote from '../note/CreateNote';
import Notes from '../note/Notes';
import Settings from '../setting/Settings';

const Home = () => {
  return (
    <AnimatedBg>
      <div className="flex flex-col sm:flex-row gap-4 h-screen w-screen p-2 sm:p-4 rounded-lg">
        <SideBar />
        {/* Added pt-16 on mobile to offset the fixed top bar height */}
        <div className="flex-1 pt-16 sm:pt-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="notes" element={<Notes />} />
            <Route path="create" element={<CreateNote />} />
            <Route path="settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </AnimatedBg>
  );
};

export default Home;