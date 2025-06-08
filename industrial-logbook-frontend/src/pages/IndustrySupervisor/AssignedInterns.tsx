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
  { id: 1, name: "Jane Doe", email: "jane@student.com", institution: "Demo University", status: "Active" },
  { id: 2, name: "Mark Smith", email: "mark@student.com", institution: "Tech College", status: "Active" },
];

const AssignedInterns: React.FC = () => {
  const [search, setSearch] = useState("");
  const filtered = demoInterns.filter(
    intern =>
      intern.name.toLowerCase().includes(search.toLowerCase()) ||
      intern.email.toLowerCase().includes(search.toLowerCase()) ||
      intern.institution.toLowerCase().includes(search.toLowerCase())
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
          <h2 className="mb-4 text-maroon">Assigned Interns</h2>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search interns..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ maxWidth: 300 }}
          />
          <table className="table table-bordered table-hover bg-white">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Institution</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(intern => (
                <tr key={intern.id}>
                  <td>{intern.name}</td>
                  <td>{intern.email}</td>
                  <td>{intern.institution}</td>
                  <td>
                    <span className="badge bg-success">{intern.status}</span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-muted">No interns found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default AssignedInterns;