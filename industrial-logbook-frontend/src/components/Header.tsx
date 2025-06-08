import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.css";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-maroon py-2 shadow-sm fixed-top">
      <nav className="container d-flex align-items-center justify-content-between">
        <div className="fw-bold fs-4">
          <span>LOGBOOK</span>
        </div>
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
          <li className="nav-item"><a className="nav-link text-white" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#logbooks">View Logbooks</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#help">Help</a></li>
        </ul>
        <div>
          {location.pathname === "/login" ? (
            <Link to="/register" className="btn btn-outline-light ms-2">Register</Link>
          ) : location.pathname === "/register" ? (
            <Link to="/login" className="btn btn-outline-light ms-2">Login</Link>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
              <Link to="/register" className="btn btn-light text-maroon">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;