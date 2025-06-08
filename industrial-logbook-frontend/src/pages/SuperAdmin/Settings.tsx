import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-speedometer2", href: "/superadmin/dashboard" },
  { label: "Manage Users", icon: "bi bi-people", href: "/superadmin/manage-users" },
  { label: "Manage Institutions", icon: "bi bi-building", href: "/superadmin/manage-institutions" },
  { label: "System Reports", icon: "bi bi-bar-chart", href: "/superadmin/system-reports" },
  { label: "Settings", icon: "bi bi-gear", href: "/superadmin/settings" },
];

const Settings: React.FC = () => {
  const [systemName, setSystemName] = useState("Industrial Logbook System");
  const [email, setEmail] = useState("admin@logbook.com");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    // Here you would send updated settings to backend
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar links={links} />
      <div className="flex-grow-1 bg-light">
        <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
          <span className="fw-bold text-white">Super Admin</span>
          <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Logout</button>
        </header>
        <main className="container py-4">
          <h2 className="mb-4 text-maroon">Settings</h2>
          <form className="card p-4 shadow-sm" style={{ maxWidth: 500 }} onSubmit={handleSave}>
            <div className="mb-3">
              <label className="form-label">System Name</label>
              <input
                type="text"
                className="form-control"
                value={systemName}
                onChange={e => setSystemName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Admin Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn bg-maroon text-white">Save Settings</button>
            {saved && <div className="alert alert-success mt-3 py-1">Settings saved!</div>}
          </form>
        </main>
      </div>
    </div>
  );
};

export default Settings;