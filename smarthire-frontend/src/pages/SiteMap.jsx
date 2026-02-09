import { Link } from "react-router-dom";
import "../styles/theme.css";

export default function SiteMap() {
    return (
        <div style={container}>
            <h1 style={title}>Site Map</h1>
            <p style={subtitle}>Navigate SmartHire easily</p>

            <div style={grid}>
                {/* Main */}
                <section style={section}>
                    <h2 style={heading}>Main</h2>
                    <ul style={list}>
                        <li><Link to="/login" style={link}>Login</Link></li>
                        <li><Link to="/register" style={link}>Register</Link></li>
                    </ul>
                </section>

                {/* Candidate */}
                <section style={section}>
                    <h2 style={heading}>For Candidates</h2>
                    <ul style={list}>
                        <li><Link to="/candidate" style={link}>Dashboard</Link></li>
                        <li><Link to="/browse-jobs" style={link}>Browse Jobs</Link></li>
                        <li><Link to="/candidate/applications" style={link}>My Applications</Link></li>
                    </ul>
                </section>

                {/* Recruiter */}
                <section style={section}>
                    <h2 style={heading}>For Recruiters</h2>
                    <ul style={list}>
                        <li><Link to="/recruiter" style={link}>Dashboard</Link></li>
                        <li><Link to="/recruiter/post-job" style={link}>Post a Job</Link></li>
                        <li><Link to="/view-applicants" style={link}>View Applicants</Link></li>
                    </ul>
                </section>

                {/* Account */}
                <section style={section}>
                    <h2 style={heading}>Account & Settings</h2>
                    <ul style={list}>
                        <li><Link to="/profile" style={link}>Edit Profile</Link></li>
                        <li><Link to="/settings/security" style={link}>Password & Security</Link></li>
                        <li><Link to="/settings/customize" style={link}>Customize</Link></li>
                        <li><Link to="/settings/notifications" style={link}>Notifications</Link></li>
                    </ul>
                </section>

                {/* Legal */}
                <section style={section}>
                    <h2 style={heading}>Legal</h2>
                    <ul style={list}>
                        <li><Link to="/privacy-policy" style={link}>Privacy Policy</Link></li>
                        <li><Link to="/terms" style={link}>Terms of Use</Link></li>
                        <li><Link to="/sales-policy" style={link}>Sales Policy</Link></li>
                        <li><Link to="/legal" style={link}>Legal Information</Link></li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

const container = { maxWidth: "1000px" };
const title = { fontSize: "32px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" };
const subtitle = { fontSize: "17px", color: "var(--text-secondary)", marginBottom: "40px" };
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "32px" };
const section = { background: "var(--card-bg)", padding: "24px", borderRadius: "16px", border: "1px solid var(--border)" };
const heading = { fontSize: "16px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "16px" };
const list = { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" };
const link = { color: "var(--text-secondary)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" };
