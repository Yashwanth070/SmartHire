import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/theme.css";

export default function Sidebar() {
  const role = localStorage.getItem("role") || "CANDIDATE";

  return (
    <aside className="glass-sidebar" style={sidebar}>
      {/* Logo */}
      <div style={logoWrap}>
        <img src={logo} alt="SmartHire" style={logoStyle} />
      </div>

      {/* Navigation */}
      <div style={navContainer}>
        {role === "CANDIDATE" ? (
          <nav style={navSection}>
            <p style={sectionLabel}>Candidate</p>
            <div style={navItems}>
              <NavItem to="/candidate" label="Dashboard" />
              <NavItem to="/browse-jobs" label="Browse Jobs" />
              <NavItem to="/candidate/applications" label="My Applications" />
            </div>
          </nav>
        ) : (
          <nav style={navSection}>
            <p style={sectionLabel}>Recruiter</p>
            <div style={navItems}>
              <NavItem to="/recruiter" label="Dashboard" />
              <NavItem to="/recruiter/post-job" label="Post a Job" />
              <NavItem to="/view-applicants" label="Applicants" />
            </div>
          </nav>
        )}
      </div>

      {/* Bottom section */}
      <div style={bottomSection}>
        <a href="mailto:support@smarthire.com" style={supportLink}>
          Contact Support
        </a>
      </div>
    </aside>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className="sidebar-item"
      style={({ isActive }) => ({
        ...navItem,
        background: isActive
          ? "var(--accent)"
          : "transparent",
        color: isActive ? "#ffffff" : "var(--text-secondary)",
        fontWeight: isActive ? 500 : 400,
      })}
    >
      {label}
    </NavLink>
  );
}

const sidebar = {
  width: "240px",
  padding: "24px 16px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "var(--glass-bg-solid)",
  backdropFilter: "saturate(180%) blur(40px)",
  WebkitBackdropFilter: "saturate(180%) blur(40px)",
  borderRight: "1px solid var(--glass-border)",
};

const logoWrap = {
  padding: "0 12px",
  marginBottom: "32px",
};

const logoStyle = {
  height: "24px",
};

const navContainer = {
  flex: 1,
};

const navSection = {
  marginBottom: "8px",
};

const sectionLabel = {
  fontSize: "13px",
  fontWeight: 600,
  color: "var(--text-primary)",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  padding: "0 12px",
  margin: "0 0 16px 0",
};

const navItems = {
  display: "flex",
  flexDirection: "column",
  gap: "2px",
};

const navItem = {
  display: "block",
  padding: "10px 12px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "14px",
  transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
};

const bottomSection = {
  paddingTop: "16px",
  borderTop: "1px solid var(--border)",
};

const supportLink = {
  display: "block",
  padding: "10px 12px",
  fontSize: "13px",
  color: "var(--text-secondary)",
  textDecoration: "none",
  borderRadius: "8px",
  transition: "color 0.2s",
};