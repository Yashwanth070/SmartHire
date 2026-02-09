import { Outlet } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import logo from "../assets/logo.svg";
import "../styles/theme.css";

export default function AuthLayout() {
  return (
    <div style={layoutContainer}>
      <main style={mainContent}>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <footer style={footer}>
        <img src={logo} alt="SmartHire" style={footerLogo} />
        <p style={footerText}>Copyright © 2026 SmartHire Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

const layoutContainer = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  background: "var(--bg-secondary)",
};

const mainContent = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const footer = {
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
};

const footerLogo = {
  height: "20px",
  opacity: 0.5,
};

const footerText = {
  fontSize: "12px",
  color: "var(--text-secondary)",
  margin: 0,
};