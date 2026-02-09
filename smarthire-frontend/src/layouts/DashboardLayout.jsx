import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Sidebar from "../components/Sidebar";
import logo from "../assets/logo.svg";
import "../styles/theme.css";

export default function DashboardLayout() {
  return (
    <div style={layoutContainer}>
      <Sidebar />

      <div style={mainWrapper}>
        <Navbar />

        <main style={mainArea}>
          <div style={contentContainer}>
            <PageTransition>
              <Outlet />
            </PageTransition>
          </div>
        </main>

        {/* Footer */}
        <footer style={footer}>
          <div style={footerContent}>
            <div style={footerTop}>
              <img src={logo} alt="SmartHire" style={footerLogo} />
              <p style={footerText}>Copyright © 2026 SmartHire Inc. All rights reserved.</p>
            </div>
            <div style={footerLinks}>
              <Link to="/privacy-policy" style={footerLink}>Privacy Policy</Link>
              <span style={footerDivider}>|</span>
              <Link to="/terms" style={footerLink}>Terms of Use</Link>
              <span style={footerDivider}>|</span>
              <Link to="/sales-policy" style={footerLink}>Sales Policy</Link>
              <span style={footerDivider}>|</span>
              <Link to="/legal" style={footerLink}>Legal</Link>
              <span style={footerDivider}>|</span>
              <Link to="/sitemap" style={footerLink}>Site Map</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const layoutContainer = {
  display: "flex",
  minHeight: "100vh",
  background: "var(--bg-secondary)",
  transition: "background 0.3s ease",
};

const mainWrapper = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const mainArea = {
  flex: 1,
  padding: "40px",
  overflowY: "auto",
};

const contentContainer = {
  maxWidth: "1120px",
  margin: "0 auto",
};

const footer = {
  padding: "24px 40px",
  borderTop: "1px solid var(--border)",
  background: "var(--bg-primary)",
};

const footerContent = {
  maxWidth: "1120px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
};

const footerTop = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const footerLogo = {
  height: "20px",
  opacity: 0.6,
};

const footerText = {
  fontSize: "13px",
  color: "var(--text-secondary)",
  margin: 0,
};

const footerLinks = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  flexWrap: "wrap",
  justifyContent: "center",
};

const footerLink = {
  fontSize: "12px",
  color: "var(--text-secondary)",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

const footerDivider = {
  color: "var(--border-strong)",
  fontSize: "12px",
};