import { useNavigate } from "react-router-dom";

import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>LOGIN PORTAL</h1>

        <button className="portal-btn" onClick={() => navigate("/login")}>
          Super Admin Login
        </button>
      </div>
    </div>
  );
}

export default Home;
