import { useJobs } from "../context/JobsContext";
import { useApplications } from "../context/ApplicationsContext";
import "../styles/theme.css";

export default function BrowseJobs() {
  const { jobs } = useJobs();
  const { applyToJob, hasApplied } = useApplications();

  const handleApply = (job) => {
    const success = applyToJob(job);
    if (success) {
      alert(`🎉 Applied to ${job.title}! Check My Applications for status.`);
    } else {
      alert("You've already applied to this job.");
    }
  };

  return (
    <div>
      <header style={header}>
        <h1 style={title}>Browse Jobs</h1>
        <p style={subtitle}>Find your next career opportunity.</p>
      </header>

      {jobs.length === 0 ? (
        <p style={emptyState}>No jobs available at the moment. Check back later!</p>
      ) : (
        <div style={jobsList}>
          {jobs.map((job) => {
            const applied = hasApplied(job.id);
            return (
              <div key={job.id} className="glass-card">
                <div style={jobHeader}>
                  <div>
                    <h3 style={jobTitle}>{job.title}</h3>
                    <p style={jobMeta}>SmartHire Inc · {job.location}</p>
                  </div>
                  {applied ? (
                    <span style={appliedBadge}>✓ Applied</span>
                  ) : (
                    <button style={applyBtn} onClick={() => handleApply(job)}>
                      Apply Now
                    </button>
                  )}
                </div>
                {job.description && <p style={jobDesc}>{job.description}</p>}
                <p style={postedDate}>Posted {job.posted}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const header = { marginBottom: "40px" };
const title = { fontSize: "32px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "8px" };
const subtitle = { fontSize: "17px", color: "var(--text-secondary)" };
const emptyState = { color: "var(--text-secondary)", fontSize: "15px", textAlign: "center", padding: "60px 20px" };

const jobsList = { display: "grid", gap: "16px" };

const jobHeader = { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" };
const jobTitle = { fontSize: "19px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" };
const jobMeta = { fontSize: "14px", color: "var(--text-secondary)" };
const jobDesc = { fontSize: "14px", color: "var(--text-primary)", lineHeight: 1.5, marginBottom: "12px" };
const postedDate = { fontSize: "13px", color: "var(--text-secondary)" };

const applyBtn = {
  padding: "10px 20px",
  background: "var(--accent)",
  color: "#fff",
  border: "none",
  borderRadius: "980px",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
};

const appliedBadge = {
  padding: "8px 16px",
  background: "rgba(52, 199, 89, 0.1)",
  color: "var(--success)",
  borderRadius: "980px",
  fontSize: "13px",
  fontWeight: 500,
};