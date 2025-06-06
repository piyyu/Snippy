import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Notes App</h1>
      <p className="mb-6 text-gray-600">Sign in to manage your notes</p>
      <div className="space-x-4">
        <Link to="/auth">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Login / Signup</button>
        </Link>
        <Link to="/notes">
          <button className="px-4 py-2 bg-green-600 text-white rounded">My Notes</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
