import {
  FaTachometerAlt,
  FaUsers,
  FaTasks,
  FaUserShield,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "../styles/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h2 className="logo">ATCPL</h2>
      </div>

      <div className="sidebar-menu">
        <div
          className="menu-item active"
          onClick={() => navigate("/dashboard")}
        >
          <FaTachometerAlt />

          <span>Dashboard</span>
        </div>

        <div className="menu-item" onClick={() => navigate("/masters")}>
          <FaUserShield />

          <span>Masters</span>
        </div>

        <div className="menu-item" onClick={() => navigate("/operations")}>
          <FaTasks />

          <span>Operations</span>
        </div>

        {user?.role === "super_admin" && (
          <div className="menu-item" onClick={() => navigate("/users")}>
            <FaUsers />

            <span>Users</span>
          </div>
        )}
      </div>

      <div className="sidebar-bottom">
        <div className="menu-item logout" onClick={handleLogout}>
          <FaSignOutAlt />

          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
