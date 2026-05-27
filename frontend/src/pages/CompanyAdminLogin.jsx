import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

import heroImage from "../assets/hero.jpg";

import "../styles/login.css";

function CompanyAdminLogin() {
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="login-card">
        <div className="login-logo">
          <span className="logo-icon">🔒</span>

          <h2>
            ATCPL <span>ADMIN</span>
          </h2>
        </div>

        <h1 className="portal-heading">Company Admin Portal</h1>

        <div className="welcome-section">
          <h2>Welcome Back</h2>

          <p>Sign in to continue to the Company Admin Panel</p>
        </div>

        <div className="input-group">
          <label>Email Address</label>

          <div className="input-field">
            <HiOutlineMail className="input-icon" />

            <input type="email" placeholder="admin@company.com" />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="input-field">
            <HiOutlineLockClosed className="input-icon" />

            <input type="password" placeholder="Enter your password" />
          </div>
        </div>

        <div className="login-options">
          <div className="remember-me">
            <input type="checkbox" />

            <span>Remember Me</span>
          </div>

          <a href="/">Forgot Password?</a>
        </div>

        <button className="login-btn">Login</button>

        <div className="social-section">
          <p>or continue with</p>

          <div className="social-icons">
            <button>
              <FaFacebookF />
            </button>

            <button>
              <FaApple />
            </button>

            <button>
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAdminLogin;
