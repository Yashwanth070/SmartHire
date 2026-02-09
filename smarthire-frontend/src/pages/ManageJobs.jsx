import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axiosInstance";
import "../styles/theme.css";

export default function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/jobs");
        setJobs(res.data);
      } catch {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <p style={{ color: "#86868b" }}>Loading jobs...</p>;
  if (error) return <p style={{ color: "#ff3b30" }}>{error}</p>;

  return (
    <div>
      <header style={header}>
        <h1 style={title}>My Jobs</h1>
        <p style={subtitle}>Manage your job postings.</p>
      </header>

      <div style={jobsGrid}>
        {jobs.map((job) => (
          <div key={job.id} className="glass-card">
            <h3 style={jobTitle}>{job.title}</h3>
            <p style={locationText}>{job.location}</p>
            <p style={descText}>{job.description}</p>
            <Link to={`/recruiter/jobs/${job.id}/applications`} style={linkBtn}>
              View Applicants →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const header = {
  marginBottom: "40px",
};

const title = {
  fontSize: "32px",
  fontWeight: 600,
  color: "#1d1d1f",
  letterSpacing: "-0.5px",
  marginBottom: "8px",
};

const subtitle = {
  fontSize: "17px",
  color: "#86868b",
};

const jobsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
};

const jobTitle = {
  fontSize: "19px",
  fontWeight: 600,
  color: "#1d1d1f",
  marginBottom: "6px",
};

const locationText = {
  fontSize: "14px",
  color: "#86868b",
  marginBottom: "12px",
};

const descText = {
  fontSize: "14px",
  color: "#1d1d1f",
  lineHeight: "1.5",
  marginBottom: "16px",
};

const linkBtn = {
  color: "#0071e3",
  fontSize: "14px",
  textDecoration: "none",
};