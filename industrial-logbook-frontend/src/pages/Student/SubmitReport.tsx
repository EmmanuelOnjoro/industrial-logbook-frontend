import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-house", href: "/student/dashboard" },
  { label: "My Logbook", icon: "bi bi-journal-text", href: "/student/logbook" },
  { label: "Submit Report", icon: "bi bi-upload", href: "/student/submit-report" },
  { label: "Supervisor Feedback", icon: "bi bi-chat-dots", href: "/student/feedback" },
  { label: "Profile", icon: "bi bi-person", href: "/student/profile" },
];

const SubmitReport: React.FC = () => {
  const [summary, setSummary] = useState("");
  const [period, setPeriod] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the report to the backend
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar links={links} />
      <div className="flex-grow-1 bg-light">
        <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
          <span className="fw-bold text-white">Submit Report</span>
          <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Logout</button>
        </header>
        <main className="container py-4">
          <h2 className="mb-4 text-maroon">Submit Final Report</h2>
          {submitted ? (
            <div className="alert alert-success">Report submitted for evaluation!</div>
          ) : (
            <form className="card p-3 shadow-sm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Attachment Period</label>
                <input
                  type="text"
                  className="form-control"
                  value={period}
                  onChange={e => setPeriod(e.target.value)}
                  placeholder="e.g. Jan 2025 - May 2025"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Final Summary</label>
                <textarea
                  className="form-control"
                  value={summary}
                  onChange={e => setSummary(e.target.value)}
                  rows={5}
                  required
                />
              </div>
              <button type="submit" className="btn bg-maroon text-white">Submit Logbook</button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
};

export default SubmitReport;