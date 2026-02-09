import { useApplications } from "../context/ApplicationsContext";
import "../styles/theme.css";

export default function MyApplications() {
  const { applications, withdrawApplication } = useApplications();

  const handleWithdraw = (id, jobTitle) => {
    if (window.confirm(`Withdraw application for ${jobTitle}?`)) {
      withdrawApplication(id);
    }
  };

  return (
    <div>
      <header style={header}>
        <h1 style={title}>My Applications</h1>
        <p style={subtitle}>Track the status of your job applications.</p>
      </header>

      {applications.length === 0 ? (
        <p style={emptyState}>No applications yet. Browse jobs to start applying!</p>
      ) : (
        <div style={tableCard}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Job Title</th>
                <th style={th}>Company</th>
                <th style={th}>Location</th>
                <th style={th}>Applied</th>
                <th style={th}>Status</th>
                <th style={{ ...th, textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td style={td}><strong>{app.jobTitle}</strong></td>
                  <td style={td}>{app.company}</td>
                  <td style={td}>{app.location}</td>
                  <td style={td}>{app.appliedDate}</td>
                  <td style={td}><StatusBadge status={app.status} /></td>
                  <td style={{ ...td, textAlign: "right" }}>
                    {app.status === "APPLIED" && (
                      <button
                        style={withdrawBtn}
                        onClick={() => handleWithdraw(app.id, app.jobTitle)}
                      >
                        Withdraw
                      </button>
                    )}
                    {app.status === "INTERVIEW" && (
                      <span style={interviewInfo}>📅 Check email for details</span>
                    )}
                    {app.status === "OFFER" && (
                      <button style={acceptBtn}>Accept Offer</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  const config = {
    APPLIED: { bg: "rgba(0, 113, 227, 0.1)", color: "var(--accent)", label: "Under Review" },
    INTERVIEW: { bg: "rgba(52, 199, 89, 0.1)", color: "var(--success)", label: "Interview" },
    OFFER: { bg: "rgba(255, 149, 0, 0.1)", color: "#ff9500", label: "Offer Received" },
    REJECTED: { bg: "rgba(255, 59, 48, 0.1)", color: "var(--danger)", label: "Not Selected" },
  };
  const s = config[status] || config.APPLIED;
  return <span style={{ ...badge, background: s.bg, color: s.color }}>{s.label}</span>;
}

// Styles
const header = { marginBottom: "40px" };
const title = { fontSize: "32px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "8px" };
const subtitle = { fontSize: "17px", color: "var(--text-secondary)" };
const emptyState = { color: "var(--text-secondary)", fontSize: "15px", textAlign: "center", padding: "60px 20px" };

const tableCard = {
  background: "var(--card-bg)",
  borderRadius: "16px",
  border: "1px solid var(--border)",
  overflow: "hidden",
  boxShadow: "var(--card-shadow)",
};

const table = { width: "100%", borderCollapse: "collapse" };

const th = {
  textAlign: "left",
  padding: "16px 20px",
  fontSize: "12px",
  fontWeight: 600,
  color: "var(--text-secondary)",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  borderBottom: "1px solid var(--border)",
  background: "var(--bg-tertiary)",
};

const td = {
  padding: "18px 20px",
  fontSize: "14px",
  color: "var(--text-primary)",
  borderBottom: "1px solid var(--border)",
};

const badge = { padding: "5px 12px", borderRadius: "980px", fontSize: "12px", fontWeight: 500 };

const withdrawBtn = {
  padding: "6px 12px",
  background: "rgba(255, 59, 48, 0.1)",
  color: "var(--danger)",
  border: "none",
  borderRadius: "980px",
  fontSize: "12px",
  fontWeight: 500,
  cursor: "pointer",
};

const acceptBtn = {
  padding: "6px 12px",
  background: "var(--success)",
  color: "#fff",
  border: "none",
  borderRadius: "980px",
  fontSize: "12px",
  fontWeight: 500,
  cursor: "pointer",
};

const interviewInfo = { fontSize: "13px", color: "var(--text-secondary)" };