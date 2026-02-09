import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobsContext";
import "../styles/theme.css";

export default function RecruiterDashboard() {
  const navigate = useNavigate();
  const { jobs } = useJobs();
  const [activeTab, setActiveTab] = useState("jobs");

  const [applicants, setApplicants] = useState([
    { id: 1, name: "Alice Johnson", role: "Frontend Developer", status: "APPLIED", date: "Feb 5" },
    { id: 2, name: "Mark Wilson", role: "Backend Engineer", status: "APPLIED", date: "Feb 6" },
    { id: 3, name: "Sarah Lee", role: "Frontend Developer", status: "INTERVIEW", date: "Feb 7" },
    { id: 4, name: "John Doe", role: "Backend Engineer", status: "SHORTLISTED", date: "Feb 8" },
  ]);

  const [interviews, setInterviews] = useState([
    { id: 1, candidate: "Sarah Lee", role: "Frontend Developer", date: "Feb 12, 2026", time: "10:00 AM", status: "SCHEDULED" },
    { id: 2, candidate: "Mike Chen", role: "Backend Engineer", date: "Feb 13, 2026", time: "2:00 PM", status: "SCHEDULED" },
  ]);

  const [hires, setHires] = useState([
    { id: 1, name: "Robert Taylor", role: "Frontend Developer", hiredDate: "Jan 30, 2026", salary: "₹18 LPA" },
  ]);

  // Actions
  const shortlistApplicant = (id) => {
    setApplicants(applicants.map(a => a.id === id ? { ...a, status: "SHORTLISTED" } : a));
  };

  const scheduleInterview = (id) => {
    const applicant = applicants.find(a => a.id === id);
    if (applicant) {
      setApplicants(applicants.map(a => a.id === id ? { ...a, status: "INTERVIEW" } : a));
      setInterviews([...interviews, {
        id: Date.now(),
        candidate: applicant.name,
        role: applicant.role,
        date: "Feb 20, 2026",
        time: "10:00 AM",
        status: "SCHEDULED"
      }]);
      setActiveTab("interviews");
    }
  };

  const rejectApplicant = (id) => {
    setApplicants(applicants.map(a => a.id === id ? { ...a, status: "REJECTED" } : a));
  };

  const completeInterview = (id, outcome) => {
    const interview = interviews.find(i => i.id === id);
    if (interview) {
      setInterviews(interviews.map(i => i.id === id ? { ...i, status: outcome } : i));
      if (outcome === "HIRED") {
        setHires([...hires, {
          id: Date.now(),
          name: interview.candidate,
          role: interview.role,
          hiredDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
          salary: "₹15 LPA"
        }]);
      }
    }
  };

  const stats = {
    activeJobs: jobs.length,
    applicants: applicants.filter(a => a.status !== "REJECTED").length,
    interviews: interviews.filter(i => i.status === "SCHEDULED").length,
    hires: hires.length,
  };

  return (
    <div>
      <header style={header}>
        <div>
          <h1 style={title}>Recruiter Dashboard</h1>
          <p style={subtitle}>Manage your job postings and track candidates.</p>
        </div>
        <button style={primaryBtn} onClick={() => navigate("/recruiter/post-job")}>
          + Post a Job
        </button>
      </header>

      {/* Stats */}
      <div style={statsGrid}>
        <button onClick={() => setActiveTab("jobs")} style={statCard(activeTab === "jobs")}>
          <p style={statLabel}>Active Jobs</p>
          <h2 style={statValue}>{stats.activeJobs}</h2>
        </button>
        <button onClick={() => setActiveTab("applicants")} style={statCard(activeTab === "applicants")}>
          <p style={statLabel}>Applicants</p>
          <h2 style={statValue}>{stats.applicants}</h2>
        </button>
        <button onClick={() => setActiveTab("interviews")} style={statCard(activeTab === "interviews")}>
          <p style={statLabel}>Interviews</p>
          <h2 style={statValue}>{stats.interviews}</h2>
        </button>
        <button onClick={() => setActiveTab("hires")} style={statCard(activeTab === "hires")}>
          <p style={statLabel}>Hires</p>
          <h2 style={{ ...statValue, color: "var(--success)" }}>{stats.hires}</h2>
        </button>
      </div>

      {/* Tab Content */}
      <section>
        {activeTab === "jobs" && <JobsTab jobs={jobs} onViewApplicants={() => setActiveTab("applicants")} />}
        {activeTab === "applicants" && (
          <ApplicantsTab applicants={applicants} onShortlist={shortlistApplicant} onSchedule={scheduleInterview} onReject={rejectApplicant} />
        )}
        {activeTab === "interviews" && (
          <InterviewsTab interviews={interviews.filter(i => i.status === "SCHEDULED")} onComplete={completeInterview} />
        )}
        {activeTab === "hires" && <HiresTab hires={hires} />}
      </section>
    </div>
  );
}

function JobsTab({ jobs, onViewApplicants }) {
  return (
    <>
      <h2 style={sectionTitle}>Active Jobs</h2>
      {jobs.length === 0 ? (
        <p style={emptyState}>No jobs posted yet. Click "Post a Job" to get started!</p>
      ) : (
        <div style={tableCard}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Job Title</th>
                <th style={th}>Location</th>
                <th style={th}>Applicants</th>
                <th style={th}>Posted</th>
                <th style={{ ...th, textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td style={td}><strong>{job.title}</strong></td>
                  <td style={td}>{job.location}</td>
                  <td style={td}><span style={countBadge}>{job.applicants}</span></td>
                  <td style={td}>{job.posted}</td>
                  <td style={{ ...td, textAlign: "right" }}>
                    <button style={linkBtn} onClick={onViewApplicants}>View Applicants →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

function ApplicantsTab({ applicants, onShortlist, onSchedule, onReject }) {
  return (
    <>
      <h2 style={sectionTitle}>All Applicants</h2>
      <div style={tableCard}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Name</th>
              <th style={th}>Applied For</th>
              <th style={th}>Status</th>
              <th style={th}>Date</th>
              <th style={{ ...th, textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((a) => (
              <tr key={a.id}>
                <td style={td}>{a.name}</td>
                <td style={td}>{a.role}</td>
                <td style={td}><StatusBadge status={a.status} /></td>
                <td style={td}>{a.date}</td>
                <td style={{ ...td, textAlign: "right" }}>
                  {a.status === "APPLIED" && (
                    <>
                      <button style={successBtn} onClick={() => onShortlist(a.id)}>Shortlist</button>
                      <button style={dangerBtn} onClick={() => onReject(a.id)}>Reject</button>
                    </>
                  )}
                  {a.status === "SHORTLISTED" && (
                    <>
                      <button style={primarySmBtn} onClick={() => onSchedule(a.id)}>Schedule</button>
                      <button style={dangerBtn} onClick={() => onReject(a.id)}>Reject</button>
                    </>
                  )}
                  {a.status === "INTERVIEW" && <span style={muted}>Interview Scheduled</span>}
                  {a.status === "REJECTED" && <span style={muted}>Rejected</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function InterviewsTab({ interviews, onComplete }) {
  return (
    <>
      <h2 style={sectionTitle}>Scheduled Interviews</h2>
      {interviews.length === 0 ? (
        <p style={emptyState}>No interviews scheduled</p>
      ) : (
        <div style={cardsGrid}>
          {interviews.map((i) => (
            <div key={i.id} className="glass-card">
              <h4 style={cardTitle}>{i.candidate}</h4>
              <p style={cardMeta}>{i.role}</p>
              <div style={interviewDetails}>
                <span>📅 {i.date}</span>
                <span>🕐 {i.time}</span>
              </div>
              <div style={buttonRow}>
                <button style={successBtn} onClick={() => onComplete(i.id, "HIRED")}>✓ Hire</button>
                <button style={dangerBtn} onClick={() => onComplete(i.id, "REJECTED")}>✗ Reject</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function HiresTab({ hires }) {
  return (
    <>
      <h2 style={sectionTitle}>Recent Hires 🎉</h2>
      {hires.length === 0 ? (
        <p style={emptyState}>No hires yet</p>
      ) : (
        <div style={tableCard}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Name</th>
                <th style={th}>Role</th>
                <th style={th}>Hired Date</th>
                <th style={th}>Salary</th>
              </tr>
            </thead>
            <tbody>
              {hires.map((h) => (
                <tr key={h.id}>
                  <td style={td}><strong>{h.name}</strong></td>
                  <td style={td}>{h.role}</td>
                  <td style={td}>{h.hiredDate}</td>
                  <td style={td}><span style={salaryBadge}>{h.salary}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

function StatusBadge({ status }) {
  const config = {
    APPLIED: { bg: "rgba(0, 113, 227, 0.1)", color: "var(--accent)", label: "Applied" },
    SHORTLISTED: { bg: "rgba(255, 149, 0, 0.1)", color: "#ff9500", label: "Shortlisted" },
    INTERVIEW: { bg: "rgba(52, 199, 89, 0.1)", color: "var(--success)", label: "Interview" },
    REJECTED: { bg: "rgba(255, 59, 48, 0.1)", color: "var(--danger)", label: "Rejected" },
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

const tableCard = { background: "var(--card-bg)", borderRadius: "16px", border: "1px solid var(--border)", overflow: "hidden", boxShadow: "var(--card-shadow)" };
const table = { width: "100%", borderCollapse: "collapse" };
const th = { textAlign: "left", padding: "16px 24px", fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", borderBottom: "1px solid var(--border)", background: "var(--bg-tertiary)" };
const td = { padding: "16px 24px", fontSize: "15px", color: "var(--text-primary)", borderBottom: "1px solid var(--border)" };

const cardsGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" };
const cardTitle = { fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" };
const cardMeta = { fontSize: "14px", color: "var(--text-secondary)", marginBottom: "12px" };
const interviewDetails = { display: "flex", gap: "16px", fontSize: "14px", color: "var(--text-secondary)", marginBottom: "16px" };
const buttonRow = { display: "flex", gap: "8px" };

const linkBtn = { background: "transparent", border: "none", color: "var(--accent)", fontSize: "14px", cursor: "pointer", padding: 0 };
const successBtn = { padding: "6px 14px", background: "rgba(52, 199, 89, 0.1)", color: "var(--success)", border: "none", borderRadius: "980px", fontSize: "12px", fontWeight: 500, cursor: "pointer", marginRight: "8px" };
const dangerBtn = { padding: "6px 14px", background: "rgba(255, 59, 48, 0.1)", color: "var(--danger)", border: "none", borderRadius: "980px", fontSize: "12px", fontWeight: 500, cursor: "pointer" };
const primarySmBtn = { padding: "6px 14px", background: "var(--accent)", color: "#fff", border: "none", borderRadius: "980px", fontSize: "12px", fontWeight: 500, cursor: "pointer", marginRight: "8px" };
const badge = { padding: "5px 12px", borderRadius: "980px", fontSize: "12px", fontWeight: 500 };
const countBadge = { background: "var(--accent)", color: "#fff", padding: "4px 10px", borderRadius: "980px", fontSize: "13px", fontWeight: 500 };
const salaryBadge = { background: "rgba(52, 199, 89, 0.1)", color: "var(--success)", padding: "5px 12px", borderRadius: "980px", fontSize: "13px", fontWeight: 500 };
const muted = { color: "var(--text-secondary)", fontSize: "13px" };
const emptyState = { color: "var(--text-secondary)", fontSize: "15px", textAlign: "center", padding: "40px" };