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

interface Institution {
  id: number;
  name: string;
  email: string;
  students: number;
}

const initialInstitutions: Institution[] = [
  { id: 1, name: "Demo University", email: "info@demo.edu", students: 50 },
  { id: 2, name: "Tech College", email: "contact@techcollege.edu", students: 30 },
];

const ManageInstitutions: React.FC = () => {
  const [institutions, setInstitutions] = useState<Institution[]>(initialInstitutions);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editInstitution, setEditInstitution] = useState<Institution | null>(null);
  const [form, setForm] = useState<Omit<Institution, "id" | "students">>({ name: "", email: "" });

  const filteredInstitutions = institutions.filter(
    inst =>
      inst.name.toLowerCase().includes(search.toLowerCase()) ||
      inst.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setInstitutions(institutions.filter(inst => inst.id !== id));
  };

  const handleEdit = (inst: Institution) => {
    setEditInstitution(inst);
    setForm({ name: inst.name, email: inst.email });
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditInstitution(null);
    setForm({ name: "", email: "" });
    setShowForm(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editInstitution) {
      setInstitutions(institutions.map(i => (i.id === editInstitution.id ? { ...editInstitution, ...form } : i)));
    } else {
      setInstitutions([...institutions, { ...form, id: Date.now(), students: 0 }]);
    }
    setShowForm(false);
    setEditInstitution(null);
    setForm({ name: "", email: "" });
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
          <h2 className="mb-4 text-maroon">Manage Institutions</h2>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search institutions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ maxWidth: 300 }}
            />
            <button className="btn btn-maroon text-white ms-3" onClick={handleAdd}>
              <i className="bi bi-plus-circle"></i> Add Institution
            </button>
          </div>
          <table className="table table-bordered table-hover bg-white">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Students</th>
                <th style={{ width: 150 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInstitutions.map(inst => (
                <tr key={inst.id}>
                  <td>{inst.name}</td>
                  <td>{inst.email}</td>
                  <td>{inst.students}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(inst)}>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(inst.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredInstitutions.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-muted">No institutions found.</td>
                </tr>
              )}
            </tbody>
          </table>
          {/* Institution Form Modal */}
          {showForm && (
            <div className="modal show d-block" tabIndex={-1} style={{ background: "rgba(0,0,0,0.3)" }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <form onSubmit={handleFormSubmit}>
                    <div className="modal-header">
                      <h5 className="modal-title">{editInstitution ? "Edit Institution" : "Add Institution"}</h5>
                      <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={form.name} onChange={handleFormChange} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" value={form.email} onChange={handleFormChange} required />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
                      <button type="submit" className="btn btn-maroon text-white">{editInstitution ? "Save" : "Add"}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ManageInstitutions;