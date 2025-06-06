import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewNoteForm from '../components/NewNoteForm';

const Dashboard = () => {
    const user = localStorage.getItem('user');
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/auth');
    }

  return (
    <div className="">
      <Header logout={Logout} />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1>Dashboard</h1>
      </div>
      <NewNoteForm />
      <Footer />
    </div>
)};

export default Dashboard;
