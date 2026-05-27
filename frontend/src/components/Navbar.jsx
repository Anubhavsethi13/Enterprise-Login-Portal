import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

import { useState } from "react";

function Navbar() {
  const {
    darkMode,

    toggleTheme,
  } = useTheme();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="navbar">
      <div>
        <h2>Dashboard</h2>

        <p>Welcome back Admin</p>
      </div>

      <div className="profile-section">
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div
          className="profile-circle"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          A
        </div>

        {showDropdown && (
          <div className="profile-dropdown">
            <p>Admin Profile</p>

            <p>Settings</p>

            <p>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
