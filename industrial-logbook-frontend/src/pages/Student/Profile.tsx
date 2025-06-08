import React, { useState, ChangeEvent, FormEvent } from "react";
import Sidebar from "../../components/Sidebar";
import "../../styles/custom.css";

const links = [
  { label: "Dashboard", icon: "bi bi-house", href: "/student/dashboard" },
  { label: "My Logbook", icon: "bi bi-journal-text", href: "/student/logbook" },
  { label: "Submit Report", icon: "bi bi-upload", href: "/student/submit-report" },
  { label: "Supervisor Feedback", icon: "bi bi-chat-dots", href: "/student/feedback" },
  { label: "Profile", icon: "bi bi-person", href: "/student/profile" },
];

const defaultProfile = {
  name: "John Doe",
  email: "student@example.com",
  institution: "Demo University",
  course: "Industrial Engineering",
  phone: "0712345678",
  profileImage: "",
};

const Profile: React.FC = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [editing, setEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfile({ ...profile, profileImage: file.name });
      const reader = new FileReader();
      reader.onload = ev => setImagePreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => setEditing(true);

  const handleCancel = () => {
    setEditing(false);
    setImagePreview(null);
    setProfile(defaultProfile);
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    setEditing(false);
    // Here you would send updated profile to backend
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar links={links} />
      <div className="flex-grow-1 bg-light">
        <header className="bg-maroon d-flex align-items-center justify-content-between px-4 py-3 shadow-sm">
          <span className="fw-bold text-white">My Profile</span>
          <button className="btn btn-outline-light btn-sm" onClick={() => window.location.href = "/login"}>Logout</button>
        </header>
        <main className="container py-4 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          <div className="card shadow-sm p-4" style={{ maxWidth: 500, width: "100%" }}>
            <div className="text-center mb-3">
              <img
                src={imagePreview || "/assets/default-avatar.png"}
                alt="Profile"
                className="rounded-circle"
                style={{ width: 100, height: 100, objectFit: "cover", border: "2px solid #800000" }}
              />
            </div>
            {editing ? (
              <form onSubmit={handleSave}>
                <div className="mb-3">
                  <label className="form-label">Profile Image</label>
                  <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" name="name" value={profile.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" value={profile.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Institution</label>
                  <input type="text" className="form-control" name="institution" value={profile.institution} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Course</label>
                  <input type="text" className="form-control" name="course" value={profile.course} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" name="phone" value={profile.phone} onChange={handleChange} />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
                  <button type="submit" className="btn bg-maroon text-white">Save</button>
                </div>
              </form>
            ) : (
              <div>
                <div className="mb-2"><strong>Name:</strong> {profile.name}</div>
                <div className="mb-2"><strong>Email:</strong> {profile.email}</div>
                <div className="mb-2"><strong>Institution:</strong> {profile.institution}</div>
                <div className="mb-2"><strong>Course:</strong> {profile.course}</div>
                <div className="mb-2"><strong>Phone:</strong> {profile.phone}</div>
                <div className="text-end">
                  <button className="btn btn-outline-maroon" onClick={handleEdit}>Edit Profile</button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;