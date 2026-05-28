import { Toaster } from "react-hot-toast";

import { useTheme } from "./context/ThemeContext";

import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";

import Users from "./pages/Users";

import Masters from "./pages/Masters";

import Operations from "./pages/Operations";

import SuperAdminLogin from "./pages/SuperAdminLogin";

import ProtectedRoute from "./components/ProtectedRoute";

import { Routes, Route } from "react-router-dom";

function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={darkMode ? "dark-theme" : "light-theme"}
      style={{
        minHeight: "100vh",

        width: "100%",
      }}
    >
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/super-admin-login" element={<SuperAdminLogin />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={["super_admin", "company_admin", "company_user"]}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute allowedRoles={["super_admin"]}>
              <Users />
            </ProtectedRoute>
          }
        />

        <Route path="/masters" element={<Masters />} />

        <Route path="/operations" element={<Operations />} />
      </Routes>
    </div>
  );
}

export default App;
