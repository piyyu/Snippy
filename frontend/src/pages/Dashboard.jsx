const Dashboard = () => {
    const user = localStorage.getItem('user');
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1>Dashboard</h1>
      <div>hello , {user}</div>
    </div>
  );
};

export default Dashboard;
