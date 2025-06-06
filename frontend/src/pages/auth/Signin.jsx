import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = ({setUserExist}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signin', {
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.name);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
      <button onClick={handleSignin}>signin</button>
      <div>Don't have an account? <button onClick={() => {setUserExist(prev => !prev)}}>signup</button></div>
    </div>
  );
};

export default Signin;