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

// Demo feedback data
const demoFeedback = [
  {
    supervisor: "Academic Supervisor",
    date: "2025-05-28",
    remark: "Great progress this week. Keep up the good work!",
  },
  {
    supervisor: "Industry Supervisor",
    date: "2025-05-27",
    remark: "Excellent teamwork and punctuality.",
  },
];

const Feedback: React.FC = () => {
  const [feedback] = useState(demoFeedback);

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar links={links} />
      <div className="flex-grow-1 bg-light">
        <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
          <span className="fw-bold text-white">Supervisor Feedback</span>
          <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Logout</button>
        </header>
        <main className="container py-4">
          <h2 className="mb-4 text-maroon">Supervisor Feedback</h2>
          <div className="list-group">
            {feedback.map((item, idx) => (
              <div key={idx} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>{item.supervisor}</strong>
                    <div className="text-muted small">{item.date}</div>
                  </div>
                  <div>{item.remark}</div>
                </div>
              </div>
            ))}
            {feedback.length === 0 && <div className="text-muted">No feedback yet.</div>}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Feedback;