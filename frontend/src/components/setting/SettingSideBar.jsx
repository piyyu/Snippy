import { NavLink, useNavigate } from "react-router-dom";

const SettingSideBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth");
  };

  const baseStyle = "py-2 sm:py-2 px-4 rounded-xl transition cursor-pointer";
  const activeStyle = "bg-black/30";
  const inactiveStyle = "hover:bg-white hover:text-black";

  return (
    <div className="flex flex-col gap-10 sm:p-10 p-5 overflow-y-auto h-full">
      <div className="flex flex-col gap-2 border-2 border-white/20 p-3 sm:p-4 rounded-3xl">
        <div className="text-sm py-2">User Info</div>
        <div className="flex flex-col gap-1 sm:gap-2 text-lg sm:text-2xl">
          <NavLink
            to="/home/settings"
            end
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            User Profile
          </NavLink>
          <NavLink
            to="/home/settings/editName"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Edit Name
          </NavLink>
          <NavLink
            to="/home/settings/editEmail"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Edit Email
          </NavLink>
          <NavLink
            to="/home/settings/editPassword"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Edit Password
          </NavLink>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-2 border-white/20 p-3 sm:p-4 rounded-3xl">
        <div className="text-sm py-2">Appearance</div>
        <div className="flex flex-col gap-1 sm:gap-2 text-lg sm:text-2xl">
          <NavLink
            to="/home/settings/toggleTheme"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Themes
          </NavLink>
        </div>
      </div>

      <div
        onClick={logout}
        className="py-2 sm:py-4 hover:bg-white hover:text-black bg-black/50 rounded-2xl sm:rounded-3xl p-4 cursor-pointer transition text-lg sm:text-2xl"
      >
        Logout
      </div>
    </div>
  );
};

export default SettingSideBar;
