import { useNavigate } from "react-router-dom";

import "../styles/home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay"></div>

      <div className="home-content">
        <div className="logo-badge">ATCPL</div>

        <h1>
          Enterprise Login <span>Management Portal</span>
        </h1>

        <p>
          Secure role-based authentication and enterprise hierarchy management
          system with modern SaaS dashboard.
        </p>

        <div className="home-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/super-admin-login")}
          >
            Super Admin Login
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/dashboard")}
          >
            Explore Dashboard
          </button>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>JWT Security</h3>
            <p>Protected enterprise authentication flow</p>
          </div>

          <div className="feature-card">
            <h3>Role Hierarchy</h3>
            <p>Super admin, company admin & users</p>
          </div>

          <div className="feature-card">
            <h3>Analytics</h3>
            <p>Interactive charts and activity monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
