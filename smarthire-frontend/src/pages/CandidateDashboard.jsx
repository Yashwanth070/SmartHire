import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApplications } from "../context/ApplicationsContext";
import "../styles/theme.css";

export default function CandidateDashboard() {
  const navigate = useNavigate();
  const { applications } = useApplications();
  const [activeTab, setActiveTab] = useState("overview");

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === "APPLIED").length,
    interview: applications.filter(a => a.status === "INTERVIEW").length,
    offers: applications.filter(a => a.status === "OFFER").length,
  };

  return (
    <div>
      {/* Header */}
      <header style={header}>
        <div>
          <h1 style={title}>Welcome back! 👋</h1>
          <p style={subtitle}>Track your applications and find your next opportunity.</p>
        </div>
        <button style={primaryBtn} onClick={() => navigate("/browse-jobs")}>
          Browse Jobs
        </button>
      </header>

      {/* Stats */}
      <div style={statsGrid}>
        <button onClick={() => setActiveTab("overview")} style={statCard(activeTab === "overview")}>
          <p style={statLabel}>Total Applications</p>
          <h2 style={statValue}>{stats.total}</h2>
        </button>
        <button onClick={() => setActiveTab("pending")} style={statCard(activeTab === "pending")}>
          <p style={statLabel}>Pending Review</p>
          <h2 style={statValue}>{stats.pending}</h2>
        </button>
        <button onClick={() => setActiveTab("interview")} style={statCard(activeTab === "interview")}>
          <p style={statLabel}>Interviews</p>
          <h2 style={{ ...statValue, color: "var(--success)" }}>{stats.interview}</h2>
        </button>
        <button onClick={() => setActiveTab("offers")} style={statCard(activeTab === "offers")}>
          <p style={statLabel}>Offers</p>
          <h2 style={{ ...statValue, color: "#ff9500" }}>{stats.offers}</h2>
        </button>
      </div>

      {/* Content */}
      <section>
        {activeTab === "overview" && <OverviewTab applications={applications} />}
        {activeTab === "pending" && <FilteredTab applications={applications.filter(a => a.status === "APPLIED")} title="Pending Applications" />}
        {activeTab === "interview" && <FilteredTab applications={applications.filter(a => a.status === "INTERVIEW")} title="Interview Scheduled" />}
        {activeTab === "offers" && <FilteredTab applications={applications.filter(a => a.status === "OFFER")} title="Job Offers" />}
      </section>
    </div>
  );
}

function OverviewTab({ applications }) {
  return (
    <>
      <h2 style={sectionTitle}>Recent Applications</h2>
      {applications.length === 0 ? (
        <p style={emptyState}>No applications yet. Start browsing jobs to apply!</p>
      ) : (
        <div style={cardsList}>
          {applications.slice(0, 5).map((app) => (
            <div key={app.id} style={applicationCard}>
              <div>
                <h4 style={appTitle}>{app.jobTitle}</h4>
                <p style={appMeta}>{app.company} · {app.location}</p>
                <p style={appliedDate}>Applied {app.appliedDate}</p>
              </div>
              <StatusBadge status={app.status} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function FilteredTab({ applications, title }) {
  return (
    <>
      <h2 style={sectionTitle}>{title}</h2>
      {applications.length === 0 ? (
        <p style={emptyState}>No applications in this category</p>
      ) : (
        <div style={cardsList}>
          {applications.map((app) => (
            <div key={app.id} style={applicationCard}>
              <div>
                <h4 style={appTitle}>{app.jobTitle}</h4>
                <p style={appMeta}>{app.company} · {app.location}</p>
                <p style={appliedDate}>Applied {app.appliedDate}</p>
              </div>
              <StatusBadge status={app.status} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function StatusBadge({ status }) {
  const config = {
    APPLIED: { bg: "rgba(0, 113, 227, 0.1)", color: "var(--accent)", label: "Under Review" },
    INTERVIEW: { bg: "rgba(52, 199, 89, 0.1)", color: "var(--success)", label: "Interview" },
    OFFER: { bg: "rgba(255, 149, 0, 0.1)", color: "#ff9500", label: "Offer" },
    REJECTED: { bg: "rgba(255, 59, 48, 0.1)", color: "var(--danger)", label: "Not Selected" },
  };
  const s = config[status] || config.APPLIED;
  return <span style={{ ...badge, background: s.bg, color: s.color }}>{s.label}</span>;
}

// Styles
const header = { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px" };
const title = { fontSize: "32px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "8px" };
const subtitle = { fontSize: "17px", color: "var(--text-secondary)" };
const primaryBtn = { padding: "12px 24px", background: "var(--accent)", color: "#fff", border: "none", borderRadius: "980px", fontSize: "14px", cursor: "pointer" };

const statsGrid = { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "48px" };
const statCard = (active) => ({
  padding: "24px",
  background: active ? "var(--accent)" : "var(--glass-bg)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  border: active ? "1px solid var(--accent)" : "1px solid var(--glass-border)",
  textAlign: "left",
  cursor: "pointer",
  transition: "all 0.2s",
  color: active ? "#fff" : "var(--text-primary)",
});
const statLabel = { fontSize: "13px", opacity: 0.7, marginBottom: "8px" };
const statValue = { fontSize: "36px", fontWeight: 600, letterSpacing: "-1px" };

const sectionTitle = { fontSize: "21px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "20px" };
const emptyState = { color: "var(--text-secondary)", fontSize: "15px", textAlign: "center", padding: "40px" };

const cardsList = { display: "grid", gap: "12px" };
const applicationCard = {
  background: "var(--card-bg)",
  padding: "20px 24px",
  borderRadius: "14px",
  border: "1px solid var(--border)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "var(--card-shadow)",
};
const appTitle = { fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" };
const appMeta = { fontSize: "14px", color: "var(--text-secondary)", marginBottom: "4px" };
const appliedDate = { fontSize: "13px", color: "var(--text-secondary)" };
const badge = { padding: "6px 14px", borderRadius: "980px", fontSize: "12px", fontWeight: 500 };