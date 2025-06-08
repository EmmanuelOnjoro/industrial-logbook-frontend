import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.css";

const Footer: React.FC = () => (
  <footer className="bg-maroon text-white py-2 px-3 fixed-bottom shadow-sm d-flex justify-content-between align-items-center" style={{ zIndex: 1050 }}>
    <span>&copy; {new Date().getFullYear()} LOGBOOK. All rights reserved.</span>
    <span className="small">Powered by Kitale nationa Polytechnic </span>
  </footer>
);

export default Footer;
