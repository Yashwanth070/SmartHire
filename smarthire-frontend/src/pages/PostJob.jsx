import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobsContext";
import "../styles/theme.css";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const { addJob } = useJobs();

  const submitJob = (e) => {
    e.preventDefault();
    addJob({ title, description, location });
    navigate("/recruiter");
  };

  return (
    <div>
      <header style={header}>
        <h1 style={pageTitle}>Post a Job</h1>
        <p style={subtitle}>Create a new job listing.</p>
      </header>

      <form style={formCard} onSubmit={submitJob}>
        <div style={inputGroup}>
          <label style={label}>Job Title</label>
          <input
            style={input}
            placeholder="e.g. Senior Frontend Developer"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div style={inputGroup}>
          <label style={label}>Description</label>
          <textarea
            style={textarea}
            placeholder="Describe the role, responsibilities, and requirements..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
          />
        </div>

        <div style={inputGroup}>
          <label style={label}>Location</label>
          <input
            style={input}
            placeholder="e.g. Bengaluru, Remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={primaryBtn}>Post Job</button>
      </form>
    </div>
  );
}

const header = { marginBottom: "40px" };
const pageTitle = { fontSize: "32px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "8px" };
const subtitle = { fontSize: "17px", color: "var(--text-secondary)" };

const formCard = {
  background: "var(--card-bg)",
  padding: "32px",
  borderRadius: "16px",
  border: "1px solid var(--border)",
  maxWidth: "560px",
  boxShadow: "var(--card-shadow)",
};

const inputGroup = { marginBottom: "24px" };
const label = { display: "block", fontSize: "13px", fontWeight: 500, color: "var(--text-primary)", marginBottom: "8px" };

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

const textarea = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "10px",
  border: "1px solid var(--border-strong)",
  background: "var(--bg-primary)",
  color: "var(--text-primary)",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
  resize: "vertical",
  minHeight: "100px",
  fontFamily: "inherit",
};

const primaryBtn = {
  padding: "12px 28px",
  background: "var(--accent)",
  color: "#fff",
  border: "none",
  borderRadius: "980px",
  fontSize: "15px",
  fontWeight: 500,
  cursor: "pointer",
};