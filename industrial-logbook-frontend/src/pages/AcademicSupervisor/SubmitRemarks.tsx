
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

const SubmitRemarks: React.FC = () => (
  <div className="d-flex" style={{ minHeight: "100vh" }}>
    <Sidebar links={links} />
    <div className="flex-grow-1 bg-light">
      <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
        <span className="fw-bold text-white">Academic Supervisor</span>
        <button className="btn btn-outline-light btn-sm">Logout</button>
      </header>
      <main className="container py-4">
        <h2 className="mb-4 text-maroon">Submit Remarks</h2>
        {/* Remarks form goes here */}
        <div className="alert alert-info">Remarks submission coming soon.</div>
      </main>
    </div>
  </div>
);

export default SubmitRemarks;