import { useNavigate } from "react-router-dom";
import SettingSideBar from "./SettingSideBar";
import UserInfo from "./UserInfo";
import EditEmail from "./EditEmail";
import EditName from "./EditName";
import EditPassword from "./EditPassword";
import ToggleTheme from "./ToogleTheme";
import { Routes, Route } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full sm:w-full p-4 bg-black/50 backdrop-blur-md text-white rounded-3xl flex flex-col">
      <div className="flex justify-between w-1/2 sm:p-10 pt-5">
        <div className="sm:text-6xl text-3xl font-bold">Setting</div>
      </div>

      <div className="flex flex-1 gap-4">
        <div className="sm:w-1/3 w-full">
          <SettingSideBar />
        </div>
        <div className="w-full sm:w-2/3 sm:max-h-[calc(100vh-12rem)] overflow-y-auto scrollbar-hide sm:block hidden">
          <Routes>
            <Route path="/" element={<UserInfo />} />
            <Route path="editName" element={<EditName />} />
            <Route path="editEmail" element={<EditEmail />} />
            <Route path="editPassword" element={<EditPassword />} />
            <Route path="toggleTheme" element={<ToggleTheme />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Settings;