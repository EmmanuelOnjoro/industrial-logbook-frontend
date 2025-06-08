import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.css";

interface SidebarLink {
  label: string;
  icon: string;
  href: string;
}

interface SidebarProps {
  links: SidebarLink[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => (
  <aside
    className="bg-white shadow-sm d-flex flex-column align-items-start pt-4 px-2"
    style={{
      width: 220,
      minHeight: "100vh",
      position: "sticky",
      top: 0,
      zIndex: 1040,
      borderRight: "1px solid #eee",
    }}
  >
    {links.map(link => (
      <NavLink
        key={link.href}
        to={link.href}
        className={({ isActive }) =>
          "d-flex align-items-center mb-3 px-3 py-2 w-100 rounded text-decoration-none" +
          (isActive ? " bg-maroon text-white" : " text-maroon")
        }
        style={{ fontWeight: 500, fontSize: 16 }}
      >
        <i className={link.icon + " me-2"}></i>
        {link.label}
      </NavLink>
    ))}
    <div className="mt-auto mb-3 w-100 text-center small text-muted">
      <span>&copy; {new Date().getFullYear()} LOGBOOK</span>
    </div>
  </aside>
);

export default Sidebar;