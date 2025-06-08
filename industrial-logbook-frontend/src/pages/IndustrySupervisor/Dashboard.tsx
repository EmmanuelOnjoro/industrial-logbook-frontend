import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-speedometer2", href: "/industry/dashboard" },
  { label: "Assigned Interns", icon: "bi bi-people", href: "/industry/assigned-interns" },
  { label: "Evaluate Interns", icon: "bi bi-clipboard-check", href: "/industry/evaluate-interns" },
  { label: "Feedback History", icon: "bi bi-clock-history", href: "/industry/feedback-history" },
];

const IndustryDashboard: React.FC = () => (
  <div className="d-flex" style={{ minHeight: "100vh" }}>
    <Sidebar links={links} />
    <div className="flex-grow-1 bg-light">
      <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
        <span className="fw-bold text-white">Industry Supervisor</span>
        <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Logout</button>
      </header>
      <main className="container py-4">
        <h2 className="mb-4 text-maroon">Dashboard</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-people fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Assigned Interns</h5>
                <p className="card-text fs-4">8</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-clipboard-check fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Pending Evaluations</h5>
                <p className="card-text fs-4">2</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <i className="bi bi-clock-history fs-2 text-maroon mb-2"></i>
                <h5 className="card-title">Feedback Given</h5>
                <p className="card-text fs-4">14</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default IndustryDashboard;