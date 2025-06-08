import React from "react";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import "../styles/custom.css";

const team = [
  { name: "Alice Kimani", role: "Lead Developer", img: "/assets/dev1.jpg" },
  { name: "Brian Otieno", role: "Frontend Engineer", img: "/assets/dev2.jpg" },
  { name: "Cynthia Mwangi", role: "Backend Engineer", img: "/assets/dev3.jpg" },
];

const Home: React.FC = () => (
  <div className="bg-light" style={{ minHeight: "100vh" }}>
    <Topbar />
    {/* Hero Section */}
    <div
      className="hero-section d-flex align-items-center justify-content-center"
      style={{
        minHeight: "70vh",
        background: "linear-gradient(rgba(128,0,0,0.25),rgba(0,0,0,0.25)), url('/assets/hero-image.jpg') center/cover no-repeat",
        position: "relative",
      }}
    >
      <div className="text-center text-white" style={{ zIndex: 2 }}>
        <h1 className="display-3 fw-bold mb-4" style={{ textShadow: "2px 2px 8px #000" }}>
          Welcome to the KNP Industrial Attachment Logbook System
        </h1>
        <p className="lead fs-4 mb-5" style={{ textShadow: "1px 1px 6px #000" }}>
          Seamlessly manage, track, and evaluate industrial attachments for students, supervisors, and administrators.
        </p>
        <a href="/login" className="btn btn-lg btn-light text-maroon fw-bold px-5 shadow">
          Get Started
        </a>
      </div>
    </div>

    {/* About Us */}
    <section className="container py-5" id="about">
      <h2 className="text-maroon fw-bold mb-3 text-center">About Us</h2>
      <p className="lead text-center mb-4">
        The KNP Industrial Attachment Logbook System is designed to streamline the management of industrial attachments for students, supervisors, and administrators. Our mission is to provide a seamless, transparent, and efficient platform for tracking progress, submitting reports, and fostering collaboration.
      </p>
    </section>

    {/* Developer Team */}
    <section className="bg-white py-5" id="team">
      <div className="container">
        <h2 className="text-maroon fw-bold mb-4 text-center">Developer Team</h2>
        <div className="row justify-content-center">
          {team.map(dev => (
            <div className="col-md-4 mb-4" key={dev.name}>
              <div className="card shadow-sm border-0 text-center h-100">
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="rounded-circle mx-auto mt-4"
                  style={{ width: 100, height: 100, objectFit: "cover", border: "3px solid #800000" }}
                />
                <div className="card-body">
                  <h5 className="fw-bold mb-1">{dev.name}</h5>
                  <p className="text-muted mb-0">{dev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Us */}
    <section className="container py-5" id="contact">
      <h2 className="text-maroon fw-bold mb-3 text-center">Contact Us</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <form className="card shadow-sm p-4 bg-white">
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows={4} placeholder="Type your message"></textarea>
            </div>
            <button type="submit" className="btn bg-maroon text-white w-100">Send Message</button>
          </form>
          <div className="mt-4 text-center">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="me-3 fs-3 text-maroon"><i className="bi bi-facebook"></i></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="me-3 fs-3 text-maroon"><i className="bi bi-twitter"></i></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="fs-3 text-maroon"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ratio ratio-16x9 rounded shadow-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.9999999999995!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d123456789%3AKNP%20Headquarters!5e0!3m2!1sen!2ske!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="KNP Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Home;