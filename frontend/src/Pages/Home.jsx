import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const name = localStorage.getItem("name");
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
        navigate("/auth");
        }

        setCheckingAuth(false);
    }, []);

    if (checkingAuth) return <p className="text-center mt-10">Checking auth...</p>;

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        navigate("/auth");
    }

  return (
    <div className="bg-blue-400 p-4">
        <div>
            <h1 className="text-2xl font-bold">Home</h1>
            <p className="mt-2 text-gray-700 font-bold">Welcome {name}</p>
        </div>
        <div>
            <button onClick={logout} className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Logout</button>
        </div>
    </div>
  );
}