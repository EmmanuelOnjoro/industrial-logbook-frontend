import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-house", href: "/student/dashboard" },
  { label: "My Logbook", icon: "bi bi-journal-text", href: "/student/logbook" },
  { label: "Submit Report", icon: "bi bi-upload", href: "/student/submit-report" },
  { label: "Supervisor Feedback", icon: "bi bi-chat-dots", href: "/student/feedback" },
  { label: "Profile", icon: "bi bi-person", href: "/student/profile" },
];

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();
  // Demo stats
  const [daysLogged] = useState(12);
  const [feedbackReceived] = useState(3);
  const [pendingEntries] = useState(2);

  // Demo timeline
  const timeline = [
    { date: "2025-05-29", activity: "Logged daily entry" },
    { date: "2025-05-28", activity: "Received supervisor feedback" },
    { date: "2025-05-27", activity: "Logged daily entry" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  const handleQuickAdd = () => {
    navigate("/student/logbook");
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar links={links} />
      <div className="flex-grow-1 bg-light">
        <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
          <span className="fw-bold text-white">Welcome, Student</span>
          <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>Logout</button>
        </header>
        <main className="container py-4">
          <h2 className="mb-4 text-maroon">Dashboard</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-calendar-check fs-2 text-maroon mb-2"></i>
                  <h5 className="card-title">Days Logged</h5>
                  <p className="card-text fs-4">{daysLogged}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-chat-dots fs-2 text-maroon mb-2"></i>
                  <h5 className="card-title">Feedback Received</h5>
                  <p className="card-text fs-4">{feedbackReceived}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-hourglass-split fs-2 text-maroon mb-2"></i>
                  <h5 className="card-title">Pending Entries</h5>
                  <p className="card-text fs-4">{pendingEntries}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Activity Timeline */}
          <div className="mt-5">
            <h5 className="text-maroon">Activity Timeline (Last 7 Days)</h5>
            <ul className="list-group">
              {timeline.map((item, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{item.activity}</span>
                  <span className="badge bg-maroon">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Add Log Entry */}
          <div className="mt-4 text-end">
            <button className="btn btn-maroon bg-maroon text-white" onClick={handleQuickAdd}>
              <i className="bi bi-plus-circle me-2"></i>Quick Add Log Entry
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;