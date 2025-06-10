import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({ setUserExist }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.name);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-bgBlack h-screen w-screen flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center sm:gap-5 gap-3 py-5">
        <div className="sm:text-5xl text-3xl font-bold text-textWhite">Welcome Back!</div>
        <div className="sm:text-xl text-sm text-textWhite">Sign In to your account</div>
      </div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email Address"
        className="bg-bgInput rounded-3xl sm:p-5 p-4 text-textWhite w-72 focus:outline-none"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="bg-bgInput rounded-3xl sm:p-5 p-4 text-textWhite w-72 focus:outline-none"
      />
      <button
        onClick={handleSignin}
        className="bg-buttonBlue rounded-3xl sm:p-5 p-4 text-textWhite w-72 focus:outline-none"
      >
        Sign In
      </button>
      <div className="flex justify-center items-center gap-2">
        <div className="text-textWhite text-sm sm:text-lg">Don't have an account ?</div>
        <div
          onClick={() => {
            setUserExist((prev) => !prev);
          }}
          className="text-buttonBlue cursor-pointer text-sm sm:text-lg"
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Signin;
