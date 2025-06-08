import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-speedometer2", href: "/industry/dashboard" },
  { label: "Assigned Interns", icon: "bi bi-people", href: "/industry/assigned-interns" },
  { label: "Evaluate Interns", icon: "bi bi-clipboard-check", href: "/industry/evaluate-interns" },
  { label: "Feedback History", icon: "bi bi-clock-history", href: "/industry/feedback-history" },
];

const demoInterns = [
  { id: 1, name: "Jane Doe" },
  { id: 2, name: "Mark Smith" },
];

const EvaluateInterns: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelected(null);
      setFeedback("");
    }, 2000);
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar links={links} />
      <div className="flex-grow-1 bg-light">
        <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
          <span className="fw-bold text-white">Industry Supervisor</span>
          <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Logout</button>
        </header>
        <main className="container py-4">
          <h2 className="mb-4 text-maroon">Evaluate Interns</h2>
          <div className="mb-3">
            <label className="form-label">Select Intern</label>
            <select
              className="form-select"
              value={selected ?? ""}
              onChange={e => setSelected(Number(e.target.value))}
            >
              <option value="">-- Select --</option>
              {demoInterns.map(intern => (
                <option key={intern.id} value={intern.id}>{intern.name}</option>
              ))}
            </select>
          </div>
          {selected && (
            <form className="card p-3 shadow-sm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Feedback</label>
                <textarea
                  className="form-control"
                  value={feedback}
                  onChange={e => setFeedback(e.target.value)}
                  rows={4}
                  required
                />
              </div>
              <button type="submit" className="btn bg-maroon text-white">Submit Feedback</button>
              {submitted && <div className="alert alert-success mt-2 py-1">Feedback submitted!</div>}
            </form>
          )}
        </main>
      </div>
    </div>
  );
};

export default EvaluateInterns;