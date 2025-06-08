import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.css";

interface TopbarProps {
  notifications?: number;
  profileImage?: string;
}

const Topbar: React.FC<TopbarProps> = ({ notifications = 0, profileImage }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand bg-maroon sticky-top shadow-sm px-3" style={{ zIndex: 1050 }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand fw-bold text-white fs-4" style={{ letterSpacing: 2 }}>
          E - LOGBOOK
        </span>
        <div className="d-flex align-items-center">
          <button
            className="btn position-relative me-3"
            style={{ background: "transparent" }}
            onClick={() => alert("Show notifications (implement logic)")}
          >
            <i className="bi bi-bell text-white fs-4"></i>
            {notifications > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {notifications}
              </span>
            )}
          </button>
          <button
            className="btn p-0 border-0"
            style={{ background: "transparent" }}
            onClick={() => navigate("/student/profile")}
            title="Profile"
          >
            <img
              src={profileImage || "/assets/default-avatar.png"}
              alt="Profile"
              className="rounded-circle"
              style={{ width: 40, height: 40, objectFit: "cover", border: "2px solid #fff" }}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;