import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import SettingSideBar from "./SettingSideBar";
import UserInfo from "./UserInfo";
import EditEmail from "./EditEmail";
import EditName from "./EditName";
import EditPassword from "./EditPassword";
import ToggleTheme from "./ToogleTheme";
import { AnimatePresence, motion } from "framer-motion";

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-screen w-full bg-black/50 backdrop-blur-md text-white rounded-3xl flex flex-col">
      <div className="flex justify-between sm:p-10 p-5">
        <div className="sm:text-6xl text-3xl font-bold flex justify-center items-center">Settings</div>
      </div>


      <div className="flex flex-1 gap-4">
        <div className="sm:w-1/3 w-full">
          <SettingSideBar />
        </div>

        <div className="w-full sm:w-2/3 scrollbar-hide">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <UserInfo />
                  </PageWrapper>
                }
              />
              <Route
                path="editName"
                element={
                  <PageWrapper>
                    <EditName />
                  </PageWrapper>
                }
              />
              <Route
                path="editEmail"
                element={
                  <PageWrapper>
                    <EditEmail />
                  </PageWrapper>
                }
              />
              <Route
                path="editPassword"
                element={
                  <PageWrapper>
                    <EditPassword />
                  </PageWrapper>
                }
              />
              <Route
                path="toggleTheme"
                element={
                  <PageWrapper>
                    <ToggleTheme />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Settings;

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
