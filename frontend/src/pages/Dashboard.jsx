import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewNoteForm from '../components/NewNoteForm';
import NotesList from '../components/NotesList';

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const user = localStorage.getItem('user');
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/auth');
    }

    const handleGetNotes = async () => {
        try {
        const response = await axios.get('http://localhost:3000/api/notes', {
            headers: {
            token: localStorage.getItem('token'),
            },
        });
        setNotes(response.data.notes);
        } catch (error) {
        console.log("Error fetching notes:", error);
        }
    };

    useEffect(() => {
        handleGetNotes();
    }, []);

  return (
    <div className="">
      <Header logout={Logout} />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1>Dashboard</h1>
        <div>Hello, {user}</div>
        <NewNoteForm onCreateNote={handleGetNotes} />
        <NotesList notes={notes} />
      </div>
      <Footer />
    </div>
)};

export default Dashboard;
