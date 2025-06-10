import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/auth/Auth";
import Home from "../src/components/layout/Home";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { NoteProvider } from "./components/context/NoteContext";
import { ThemeProvider } from "./components/context/ThemeContext";
import AnimatedBg from "./components/common/AnimatedBg";

const App = () => {
  return (
    <ThemeProvider>
      <AnimatedBg>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/home/*"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      </AnimatedBg>
    </ThemeProvider>
  );
};

export default App;
