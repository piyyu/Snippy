import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const signup = async () => {
    if (!name || !email || !password) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.user.name);
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed");
    }
  };

  const login = async () => {
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.response.data.msg);
      alert("Login failed");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-10 space-y-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold text-center text-blue-600">Signup</h1>

      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        className="w-full px-4 py-2 border rounded"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border rounded"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border rounded"
      />

      <button
        onClick={signup}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Signup
      </button>

      <button
        onClick={login}
        className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
      >
        Login
      </button>
    </div>
  );
}
