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

interface LogEntry {
  date: string;
  period: "daily" | "weekly";
  tasks: string;
  skills: string;
  tools: string;
  challenges: string;
  files: File[];
  images: File[];
}

const Logbook: React.FC = () => {
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const [form, setForm] = useState<Omit<LogEntry, "files" | "images">>({
    date: "",
    period: "daily",
    tasks: "",
    skills: "",
    tools: "",
    challenges: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImages(Array.from(e.target.files));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEntries([
      ...entries,
      { ...form, files, images }
    ]);
    setForm({
      date: "",
      period: "daily",
      tasks: "",
      skills: "",
      tools: "",
      challenges: "",
    });
    setFiles([]);
    setImages([]);
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar links={links} />
      <div className="flex-grow-1 bg-light">
        <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
          <span className="fw-bold text-white">Student Logbook</span>
          <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Logout</button>
        </header>
        <main className="container py-4">
          <h2 className="mb-4 text-maroon">My Logbook</h2>
          {/* Add New Entry Form */}
          <form className="card p-3 mb-4 shadow-sm" onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" name="date" value={form.date} onChange={handleChange} required />
              </div>
              <div className="col-md-3">
                <label className="form-label">Period</label>
                <select className="form-select" name="period" value={form.period} onChange={handleChange}>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Tasks</label>
                <input type="text" className="form-control" name="tasks" value={form.tasks} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Skills Learned</label>
                <input type="text" className="form-control" name="skills" value={form.skills} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Tools Used</label>
                <input type="text" className="form-control" name="tools" value={form.tools} onChange={handleChange} />
              </div>
              <div className="col-md-12">
                <label className="form-label">Challenges</label>
                <textarea className="form-control" name="challenges" value={form.challenges} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Upload Files</label>
                <input type="file" className="form-control" multiple onChange={handleFileChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Upload Images</label>
                <input type="file" className="form-control" accept="image/*" multiple onChange={handleImageChange} />
              </div>
            </div>
            <button type="submit" className="btn bg-maroon text-white mt-3">Add Entry</button>
          </form>
          {/* List of Existing Entries */}
          <h5 className="text-maroon mb-3">Entries</h5>
          <div className="list-group">
            {entries.map((entry, idx) => (
              <div key={idx} className="list-group-item mb-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>{entry.date} ({entry.period})</strong>
                    <div>Tasks: {entry.tasks}</div>
                    <div>Skills: {entry.skills}</div>
                    <div>Tools: {entry.tools}</div>
                    <div>Challenges: {entry.challenges}</div>
                  </div>
                  <div>
                    {entry.files.length > 0 && <div><i className="bi bi-paperclip"></i> {entry.files.length} file(s)</div>}
                    {entry.images.length > 0 && <div><i className="bi bi-image"></i> {entry.images.length} image(s)</div>}
                  </div>
                </div>
              </div>
            ))}
            {entries.length === 0 && <div className="text-muted">No entries yet.</div>}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Logbook;