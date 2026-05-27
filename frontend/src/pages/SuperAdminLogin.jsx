import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { loginUser } from "../services/authService";

import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

import heroImage from "../assets/hero.jpg";

import "../styles/login.css";

function SuperAdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        email,

        password,
      });

      if (
        response.role === "super_admin" ||
        response.role === "company_admin" ||
        response.role === "company_user"
      ) {
        localStorage.setItem(
          "token",

          response.token || "",
        );

        localStorage.setItem(
          "user",

          JSON.stringify(response),
        );

        toast.success("Login Successful");

        navigate("/dashboard");
      } else {
        toast.error("Unauthorized");
      }
    } catch (error) {
      console.log(error);

      toast.error("Invalid Credentials");
    }
  };

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

        <h1 className="portal-heading">Super Admin Portal</h1>

        <div className="welcome-section">
          <h2>Welcome Back</h2>

          <p>Sign in to continue to the Super Admin Panel</p>
        </div>

        <div className="input-group">
          <label>Email Address</label>

          <div className="input-field">
            <HiOutlineMail className="input-icon" />

            <input
              type="email"
              placeholder="admin@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="input-field">
            <HiOutlineLockClosed className="input-icon" />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="login-options">
          <div className="remember-me">
            <input type="checkbox" />

            <span>Remember Me</span>
          </div>

          <a href="/">Forgot Password?</a>
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

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

export default SuperAdminLogin;
