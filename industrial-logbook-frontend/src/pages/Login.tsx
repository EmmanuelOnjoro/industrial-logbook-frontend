import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/custom.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      if (role === "student") navigate("/student/dashboard");
      else if (role === "academic") navigate("/academic/dashboard");
      else if (role === "industry") navigate("/industry/dashboard");
      else if (role === "admin") navigate("/superadmin/dashboard");
    } else {
      setError("Please enter email and password.");
    }
  };

  return (
    <div className="auth-page d-flex" style={{ minHeight: "100vh" }}>
      {/* Left: Form */}
      <div className="auth-form-section d-flex align-items-center justify-content-center flex-grow-1 bg-white">
        <div className="card shadow-sm p-4" style={{ minWidth: 350, borderRadius: 12, maxWidth: 400, width: "100%" }}>
          <h2 className="text-maroon mb-3 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger py-1">{error}</div>}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                value={role}
                onChange={e => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="academic">Academic Supervisor</option>
                <option value="industry">Industry Supervisor</option>
                <option value="admin">Super Admin</option>
              </select>
            </div>
            <button type="submit" className="btn bg-maroon w-100 text-white">Login</button>
          </form>
          <div className="text-center mt-3">
            <span className="small">Don't have an account? <a href="/register" className="text-maroon">Register</a></span>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="auth-image-section d-none d-md-flex flex-grow-1 align-items-center justify-content-center" style={{
        background: "linear-gradient(rgba(128,0,0,0.3),rgba(0,0,0,0.3)), url('/assets/auth-image.jpg') center/cover no-repeat"
      }}>
        {/* Optionally add a logo or overlay text here */}
      </div>
    </div>
  );
};

export default Login;