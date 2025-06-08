import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-speedometer2", href: "/industry/dashboard" },
  { label: "Assigned Interns", icon: "bi bi-people", href: "/industry/assigned-interns" },
  { label: "Evaluate Interns", icon: "bi bi-clipboard-check", href: "/industry/evaluate-interns" },
  { label: "Feedback History", icon: "bi bi-clock-history", href: "/industry/feedback-history" },
];

const demoFeedback = [
  { intern: "Jane Doe", date: "2025-05-29", feedback: "Excellent teamwork and punctuality." },
  { intern: "Mark Smith", date: "2025-05-28", feedback: "Needs to improve time management." },
];

const FeedbackHistory: React.FC = () => {
  const [search, setSearch] = useState("");
  const filtered = demoFeedback.filter(
    f =>
      f.intern.toLowerCase().includes(search.toLowerCase()) ||
      f.feedback.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar links={links} />
      <div className="flex-grow-1 bg-light">
        <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
          <span className="fw-bold text-white">Industry Supervisor</span>
          <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Logout</button>
        </header>
        <main className="container py-4">
          <h2 className="mb-4 text-maroon">Feedback History</h2>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search feedback..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ maxWidth: 300 }}
          />
          <div className="list-group">
            {filtered.map((item, idx) => (
              <div key={idx} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>{item.intern}</strong>
                    <div className="text-muted small">{item.date}</div>
                  </div>
                  <div>{item.feedback}</div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && <div className="text-muted">No feedback found.</div>}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FeedbackHistory;