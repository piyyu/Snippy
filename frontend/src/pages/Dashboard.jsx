import UserIcon from "../assets/icons/UserIcon";
import AddIcon from "../assets/icons/AddIcon";

const Dashboard = () => {
  const currentDate = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = currentDate.getDate();
  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <div className="h-full sm:w-full p-4 bg-black/50 backdrop-blur-md text-white rounded-3xl">
      <div className="flex justify-between sm:p-10 p-5">
        <div className="flex flex-col gap-2">
          <div className="sm:text-6xl text-3xl font-bold">Dashboard</div>
          <div className="sm:text-xl text-md">
            {date} {monthName}, {year}
          </div>
        </div>
        <div>
          <div>
            
          </div>
          <div>
            <AddIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
