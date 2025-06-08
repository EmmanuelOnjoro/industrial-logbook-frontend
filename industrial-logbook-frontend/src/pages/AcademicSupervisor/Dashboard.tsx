import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-speedometer2", href: "/academic/dashboard" },
  { label: "View Students", icon: "bi bi-people", href: "/academic/view-students" },
  { label: "Review Logbooks", icon: "bi bi-journal-text", href: "/academic/review-logbooks" },
  { label: "Submit Remarks", icon: "bi bi-chat-dots", href: "/academic/submit-remarks" },
  { label: "Reports", icon: "bi bi-bar-chart", href: "/academic/reports" },
];

const AcademicDashboard: React.FC = () => (
  <div className="d-flex" style={{ minHeight: "100vh" }}>
    <Sidebar links={links} />
    <div className="flex-grow-1 bg-light">
      <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
        <span className="fw-bold text-white">Academic Supervisor</span>
        <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Logout</button>
      </header>
      <main className="container py-4">
        <h2 className="mb-4 text-maroon">Dashboard</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-people fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Assigned Students</h5>
                <p className="card-text fs-4">15</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-journal-text fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Pending Logbooks</h5>
                <p className="card-text fs-4">4</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-clock-history fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Recent Entries</h5>
                <p className="card-text fs-4">7</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 alert alert-info">Recent student activity coming soon.</div>
      </main>
    </div>
  </div>
);

export default AcademicDashboard;