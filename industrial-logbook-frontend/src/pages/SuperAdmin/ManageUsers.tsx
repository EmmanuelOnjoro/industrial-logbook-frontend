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

type UserRole = "Student" | "Academic Supervisor" | "Industry Supervisor" | "Super Admin";

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

const initialUsers: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Student" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "Academic Supervisor" },
  { id: 3, name: "Carol", email: "carol@example.com", role: "Industry Supervisor" },
];

const ManageUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [form, setForm] = useState<Omit<User, "id">>({ name: "", email: "", role: "Student" });

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user: User) => {
    setEditUser(user);
    setForm({ name: user.name, email: user.email, role: user.role });
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditUser(null);
    setForm({ name: "", email: "", role: "Student" });
    setShowForm(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editUser) {
      setUsers(users.map(u => (u.id === editUser.id ? { ...editUser, ...form } : u)));
    } else {
      setUsers([...users, { ...form, id: Date.now() }]);
    }
    setShowForm(false);
    setEditUser(null);
    setForm({ name: "", email: "", role: "Student" });
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
          <h2 className="mb-4 text-maroon">Manage Users</h2>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Search users..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ maxWidth: 300 }}
            />
            <button className="btn btn-maroon text-white ms-3" onClick={handleAdd}>
              <i className="bi bi-plus-circle"></i> Add User
            </button>
          </div>
          <table className="table table-bordered table-hover bg-white">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th style={{ width: 150 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className="badge bg-secondary">{user.role}</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(user)}>
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-muted">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
          {/* User Form Modal */}
          {showForm && (
            <div className="modal show d-block" tabIndex={-1} style={{ background: "rgba(0,0,0,0.3)" }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <form onSubmit={handleFormSubmit}>
                    <div className="modal-header">
                      <h5 className="modal-title">{editUser ? "Edit User" : "Add User"}</h5>
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
                      <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select className="form-select" name="role" value={form.role} onChange={handleFormChange}>
                          <option value="Student">Student</option>
                          <option value="Academic Supervisor">Academic Supervisor</option>
                          <option value="Industry Supervisor">Industry Supervisor</option>
                          <option value="Super Admin">Super Admin</option>
                        </select>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
                      <button type="submit" className="btn btn-maroon text-white">{editUser ? "Save" : "Add"}</button>
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

export default ManageUsers;