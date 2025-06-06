const Header = ({logout}) => {
  return (
    <div className="p-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">Notes App</h1>
      <button onClick={logout} className="bg-white text-blue-600 border-2 rounded-md px-4 py-2">Signout</button>
    </div>
  );
};

export default Header;