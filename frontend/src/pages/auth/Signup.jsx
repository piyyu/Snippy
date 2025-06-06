import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({setUserExist}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        name,
        email,
        password
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', response.data.name);
        setUserExist(false);
        navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="name" />
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
      <button onClick={handleSignup}>signup</button>
      <div>Already have an account? <button onClick={() => {setUserExist(prev => !prev)}}>signin</button></div>
    </div>
  );
};

export default Signup;