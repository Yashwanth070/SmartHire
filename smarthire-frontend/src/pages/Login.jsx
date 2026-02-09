import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/theme.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CANDIDATE");

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "dummy-jwt");
    localStorage.setItem("role", role);
    navigate(role === "RECRUITER" ? "/recruiter" : "/candidate");
  };

  return (
    <div style={page}>
      <form className="glass-modal" style={card} onSubmit={handleLogin}>
        <div style={logoWrap}>
          <img src={logo} alt="SmartHire" style={logoStyle} />
        </div>

        <h1 style={title}>SmartHire</h1>

        <div style={inputGroup}>
          <label style={label}>Email</label>
          <input
            type="email"
            placeholder="name@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={input}
          />
        </div>

        <div style={inputGroup}>
          <label style={label}>Password</label>
          <input
            type="password"
            placeholder="Password"
            style={input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div style={inputGroup}>
          <label style={label}>Sign in as</label>
          <div style={roleSelector}>
            <button
              type="button"
              style={role === "CANDIDATE" ? roleActive : roleOption}
              onClick={() => setRole("CANDIDATE")}
            >
              Candidate
            </button>
            <button
              type="button"
              style={role === "RECRUITER" ? roleActive : roleOption}
              onClick={() => setRole("RECRUITER")}
            >
              Recruiter
            </button>
          </div>
        </div>

        <button type="submit" style={primaryBtn}>Sign In</button>

        <p style={footer}>
          Don't have an account? <Link to="/register" style={linkStyle}>Sign up</Link>
        </p>
      </form>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "var(--bg-secondary)",
};

const card = {
  width: "100%",
  maxWidth: "480px",
  padding: "40px",
  textAlign: "center",
};

const logoWrap = {
  marginBottom: "32px",
};

const logoStyle = {
  height: "40px",
};

const title = {
  fontSize: "24px",
  fontWeight: 600,
  color: "var(--text-primary)",
  marginBottom: "28px",
};

const inputGroup = {
  marginBottom: "16px",
  textAlign: "left",
};

const label = {
  display: "block",
  fontSize: "13px",
  fontWeight: 500,
  color: "var(--text-primary)",
  marginBottom: "6px",
};

const input = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid var(--border-strong)",
  background: "var(--bg-primary)",
  color: "var(--text-primary)",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const roleSelector = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
};

const roleOption = {
  padding: "10px",
  background: "var(--bg-primary)",
  color: "var(--text-secondary)",
  border: "1px solid var(--border-strong)",
  borderRadius: "8px",
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.2s",
};

const roleActive = {
  padding: "10px",
  background: "var(--accent)",
  color: "#fff",
  border: "1px solid var(--accent)",
  borderRadius: "8px",
  fontSize: "14px",
  cursor: "pointer",
  transition: "all 0.2s",
};

const primaryBtn = {
  width: "100%",
  padding: "12px",
  background: "var(--accent)",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: 500,
  cursor: "pointer",
  marginTop: "8px",
};

const footer = {
  marginTop: "24px",
  fontSize: "13px",
  color: "var(--text-secondary)",
};

const linkStyle = {
  color: "var(--accent)",
  textDecoration: "none",
};