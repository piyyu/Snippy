import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Auth from './pages/auth/Auth';
import ProtectedRoute from './components/layout/ProtectedRoute';
import { NoteProvider } from './components/context/NoteContext';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard/*" element={
          <ProtectedRoute>
            <NoteProvider>
              <Dashboard />
            </NoteProvider>
          </ProtectedRoute>
          } />
      </Routes>
    </Router>
  );
};

export default App;
