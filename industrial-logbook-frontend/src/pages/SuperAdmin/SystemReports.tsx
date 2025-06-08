import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-speedometer2", href: "/superadmin/dashboard" },
  { label: "Manage Users", icon: "bi bi-people", href: "/superadmin/manage-users" },
  { label: "Manage Institutions", icon: "bi bi-building", href: "/superadmin/manage-institutions" },
  { label: "System Reports", icon: "bi bi-bar-chart", href: "/superadmin/system-reports" },
  { label: "Settings", icon: "bi bi-gear", href: "/superadmin/settings" },
];

const SystemReports: React.FC = () => (
  <div className="d-flex" style={{ minHeight: "100vh" }}>
    <Sidebar links={links} />
    <div className="flex-grow-1 bg-light">
      <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
        <span className="fw-bold text-white">Super Admin</span>
        <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Logout</button>
      </header>
      <main className="container py-4">
        <h2 className="mb-4 text-maroon">System Reports</h2>
        <div className="card p-4 shadow-sm">
          <h5 className="mb-3">Summary</h5>
          <ul>
            <li>Total Users: 120</li>
            <li>Total Institutions: 2</li>
            <li>Logbooks Submitted: 85</li>
            <li>Pending Approvals: 7</li>
          </ul>
          <div className="alert alert-info mt-3">
            More detailed reporting and export features coming soon.
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default SystemReports;