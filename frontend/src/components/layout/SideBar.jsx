import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from "../../assets/icons/HomeIcon";
import NotesIcon from "../../assets/icons/NotesIcon";
import NewNoteIcon from "../../assets/icons/NewNoteIcon";
import SettingIcon from "../../assets/icons/SettingIcon";
import UserIcon from "../../assets/icons/UserIcon";
// import logo from "../../assets/logo/logo1.png";

const SideBar = () => {
  const baseClass = "rounded-full cursor-pointer";
  const activeClass = "bg-white/30 rounded-full";

  return (
    <div className="fixed top-2 left-2 right-2 z-50 sm:z-0 sm:static flex sm:flex-col flex-row justify-between items-center p-2 sm:p-4 bg-black/50 backdrop-blur-md text-white rounded-2xl sm:rounded-3xl h-14 sm:h-auto">
      <div className="text-sm font-bold sm:text-lg py-2">
        logo
      </div>

      <div className="flex sm:flex-col flex-row sm:gap-5 gap-3 justify-center items-center">
        <NavLink
          to="/home"
          end
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          <HomeIcon />
        </NavLink>

        <NavLink
          to="/home/notes"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          <NotesIcon />
        </NavLink>

        <NavLink
          to="/home/create"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          <NewNoteIcon />
        </NavLink>

        <NavLink
          to="/home/settings"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`
          }
        >
          <SettingIcon />
        </NavLink>
      </div>

      <NavLink
        to="/home/user"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : "hover:bg-white/20"}`
        }
      >
        <UserIcon />
      </NavLink>
    </div>
  );
};

export default SideBar;
