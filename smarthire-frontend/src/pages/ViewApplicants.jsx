import { useState } from "react";
import "../styles/theme.css";

export default function ViewApplicants() {
  const [applicants, setApplicants] = useState([
    { id: 1, name: "Alice Johnson", role: "Frontend Developer", email: "alice@email.com", status: "APPLIED", date: "Feb 5" },
    { id: 2, name: "Mark Wilson", role: "Backend Engineer", email: "mark@email.com", status: "APPLIED", date: "Feb 6" },
    { id: 3, name: "Sarah Lee", role: "Frontend Developer", email: "sarah@email.com", status: "INTERVIEW", date: "Feb 7" },
    { id: 4, name: "John Doe", role: "Backend Engineer", email: "john@email.com", status: "SHORTLISTED", date: "Feb 8" },
    { id: 5, name: "Emma Davis", role: "UI/UX Designer", email: "emma@email.com", status: "APPLIED", date: "Feb 9" },
  ]);

  const [filter, setFilter] = useState("ALL");

  const shortlistApplicant = (id) => {
    setApplicants(applicants.map(a =>
      a.id === id ? { ...a, status: "SHORTLISTED" } : a
    ));
  };

  const scheduleInterview = (id) => {
    setApplicants(applicants.map(a =>
      a.id === id ? { ...a, status: "INTERVIEW" } : a
    ));
    alert("Interview scheduled! Check the Interviews tab in Dashboard.");
  };

  const rejectApplicant = (id) => {
    setApplicants(applicants.map(a =>
      a.id === id ? { ...a, status: "REJECTED" } : a
    ));
  };

  const hireApplicant = (id) => {
    setApplicants(applicants.map(a =>
      a.id === id ? { ...a, status: "HIRED" } : a
    ));
    alert("🎉 Candidate hired successfully!");
  };

  const filteredApplicants = filter === "ALL"
    ? applicants
    : applicants.filter(a => a.status === filter);

  const statusCounts = {
    ALL: applicants.length,
    APPLIED: applicants.filter(a => a.status === "APPLIED").length,
    SHORTLISTED: applicants.filter(a => a.status === "SHORTLISTED").length,
    INTERVIEW: applicants.filter(a => a.status === "INTERVIEW").length,
    HIRED: applicants.filter(a => a.status === "HIRED").length,
    REJECTED: applicants.filter(a => a.status === "REJECTED").length,
  };

  return (
    <div>
      <header style={header}>
        <div>
          <h1 style={title}>Applicants</h1>
          <p style={subtitle}>Review and manage all candidate applications.</p>
        </div>
      </header>

      {/* Filter Tabs */}
      <div style={filterTabs}>
        {["ALL", "APPLIED", "SHORTLISTED", "INTERVIEW", "HIRED", "REJECTED"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={filterTab(filter === status)}
          >
            {status.charAt(0) + status.slice(1).toLowerCase()}
            <span style={count}>{statusCounts[status]}</span>
          </button>
        ))}
      </div>

      {/* Applicants Table */}
      <div style={tableCard}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Name</th>
              <th style={th}>Email</th>
              <th style={th}>Applied For</th>
              <th style={th}>Status</th>
              <th style={th}>Date</th>
              <th style={{ ...th, textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.length === 0 ? (
              <tr>
                <td colSpan={6} style={emptyRow}>No applicants found</td>
              </tr>
            ) : (
              filteredApplicants.map((a) => (
                <tr key={a.id}>
                  <td style={td}><strong>{a.name}</strong></td>
                  <td style={td}>{a.email}</td>
                  <td style={td}>{a.role}</td>
                  <td style={td}><StatusBadge status={a.status} /></td>
                  <td style={td}>{a.date}</td>
                  <td style={{ ...td, textAlign: "right" }}>
                    <ActionButtons
                      status={a.status}
                      onShortlist={() => shortlistApplicant(a.id)}
                      onSchedule={() => scheduleInterview(a.id)}
                      onReject={() => rejectApplicant(a.id)}
                      onHire={() => hireApplicant(a.id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ActionButtons({ status, onShortlist, onSchedule, onReject, onHire }) {
  switch (status) {
    case "APPLIED":
      return (
        <>
          <button style={successBtn} onClick={onShortlist}>Shortlist</button>
          <button style={dangerBtn} onClick={onReject}>Reject</button>
        </>
      );
    case "SHORTLISTED":
      return (
        <>
          <button style={primaryBtn} onClick={onSchedule}>Schedule Interview</button>
          <button style={dangerBtn} onClick={onReject}>Reject</button>
        </>
      );
    case "INTERVIEW":
      return (
        <>
          <button style={successBtn} onClick={onHire}>✓ Hire</button>
          <button style={dangerBtn} onClick={onReject}>✗ Reject</button>
        </>
      );
    case "HIRED":
      return <span style={muted}>✓ Hired</span>;
    case "REJECTED":
      return <span style={muted}>Rejected</span>;
    default:
      return null;
  }
}

function StatusBadge({ status }) {
  const config = {
    APPLIED: { bg: "rgba(0, 113, 227, 0.1)", color: "var(--accent)", label: "Applied" },
    SHORTLISTED: { bg: "rgba(255, 149, 0, 0.1)", color: "#ff9500", label: "Shortlisted" },
    INTERVIEW: { bg: "rgba(175, 82, 222, 0.1)", color: "#af52de", label: "Interview" },
    HIRED: { bg: "rgba(52, 199, 89, 0.1)", color: "var(--success)", label: "Hired" },
    REJECTED: { bg: "rgba(255, 59, 48, 0.1)", color: "var(--danger)", label: "Rejected" },
  };
  const s = config[status] || config.APPLIED;
  return <span style={{ ...badge, background: s.bg, color: s.color }}>{s.label}</span>;
}

// Styles
const header = { marginBottom: "32px" };
const title = { fontSize: "32px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "8px" };
const subtitle = { fontSize: "17px", color: "var(--text-secondary)" };

const filterTabs = { display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" };
const filterTab = (active) => ({
  padding: "8px 16px",
  background: active ? "var(--accent)" : "var(--card-bg)",
  color: active ? "#fff" : "var(--text-primary)",
  border: active ? "none" : "1px solid var(--border)",
  borderRadius: "980px",
  fontSize: "13px",
  fontWeight: 500,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  transition: "all 0.2s",
});
const count = { opacity: 0.7, fontSize: "12px" };

const tableCard = { background: "var(--card-bg)", borderRadius: "16px", border: "1px solid var(--border)", overflow: "hidden", boxShadow: "var(--card-shadow)" };
const table = { width: "100%", borderCollapse: "collapse" };
const th = { textAlign: "left", padding: "16px 20px", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.5px", borderBottom: "1px solid var(--border)", background: "var(--bg-tertiary)" };
const td = { padding: "16px 20px", fontSize: "14px", color: "var(--text-primary)", borderBottom: "1px solid var(--border)" };
const emptyRow = { padding: "40px", textAlign: "center", color: "var(--text-secondary)" };

const badge = { padding: "5px 12px", borderRadius: "980px", fontSize: "12px", fontWeight: 500 };

const successBtn = { padding: "6px 12px", background: "rgba(52, 199, 89, 0.1)", color: "var(--success)", border: "none", borderRadius: "980px", fontSize: "12px", fontWeight: 500, cursor: "pointer", marginRight: "8px" };
const dangerBtn = { padding: "6px 12px", background: "rgba(255, 59, 48, 0.1)", color: "var(--danger)", border: "none", borderRadius: "980px", fontSize: "12px", fontWeight: 500, cursor: "pointer" };
const primaryBtn = { padding: "6px 12px", background: "var(--accent)", color: "#fff", border: "none", borderRadius: "980px", fontSize: "12px", fontWeight: 500, cursor: "pointer", marginRight: "8px" };
const muted = { color: "var(--text-secondary)", fontSize: "13px" };