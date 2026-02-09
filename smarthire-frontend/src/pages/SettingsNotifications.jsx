import { useState } from "react";
import "../styles/theme.css";

export default function SettingsNotifications() {
    const [settings, setSettings] = useState({
        emailApplications: localStorage.getItem("notify_emailApplications") !== "false",
        emailInterviews: localStorage.getItem("notify_emailInterviews") !== "false",
        emailOffers: localStorage.getItem("notify_emailOffers") !== "false",
        pushNew: localStorage.getItem("notify_pushNew") !== "false",
        pushUpdates: localStorage.getItem("notify_pushUpdates") !== "false",
        pushReminders: localStorage.getItem("notify_pushReminders") !== "false",
        weeklyDigest: localStorage.getItem("notify_weeklyDigest") === "true",
    });

    const [saved, setSaved] = useState(false);

    const toggle = (key) => {
        const newValue = !settings[key];
        setSettings({ ...settings, [key]: newValue });
        localStorage.setItem(`notify_${key}`, String(newValue));
        setSaved(true);
        setTimeout(() => setSaved(false), 1500);
    };

    const role = localStorage.getItem("role") || "CANDIDATE";

    return (
        <div>
            <header style={header}>
                <h1 style={title}>Notifications</h1>
                <p style={subtitle}>Choose how you want to be notified.</p>
                {saved && <span style={savedBadge}>✓ Saved</span>}
            </header>

            <div style={sectionsGrid}>
                {/* Email Notifications */}
                <div style={card}>
                    <h3 style={sectionTitle}>📧 Email Notifications</h3>

                    {role === "CANDIDATE" ? (
                        <>
                            <ToggleRow
                                label="Application Updates"
                                description="When your application status changes"
                                checked={settings.emailApplications}
                                onChange={() => toggle("emailApplications")}
                            />
                            <ToggleRow
                                label="Interview Invitations"
                                description="When you're invited for an interview"
                                checked={settings.emailInterviews}
                                onChange={() => toggle("emailInterviews")}
                            />
                            <ToggleRow
                                label="Job Offers"
                                description="When you receive a job offer"
                                checked={settings.emailOffers}
                                onChange={() => toggle("emailOffers")}
                            />
                        </>
                    ) : (
                        <>
                            <ToggleRow
                                label="New Applications"
                                description="When someone applies to your jobs"
                                checked={settings.emailApplications}
                                onChange={() => toggle("emailApplications")}
                            />
                            <ToggleRow
                                label="Interview Reminders"
                                description="Reminders before scheduled interviews"
                                checked={settings.emailInterviews}
                                onChange={() => toggle("emailInterviews")}
                            />
                            <ToggleRow
                                label="Hiring Milestones"
                                description="When you make a successful hire"
                                checked={settings.emailOffers}
                                onChange={() => toggle("emailOffers")}
                            />
                        </>
                    )}
                </div>

                {/* Push Notifications */}
                <div style={card}>
                    <h3 style={sectionTitle}>🔔 Push Notifications</h3>

                    <ToggleRow
                        label="New Activity"
                        description="Important updates about your account"
                        checked={settings.pushNew}
                        onChange={() => toggle("pushNew")}
                    />
                    <ToggleRow
                        label="Status Updates"
                        description="Real-time status changes"
                        checked={settings.pushUpdates}
                        onChange={() => toggle("pushUpdates")}
                    />
                    <ToggleRow
                        label="Reminders"
                        description="Upcoming interviews and deadlines"
                        checked={settings.pushReminders}
                        onChange={() => toggle("pushReminders")}
                    />
                </div>

                {/* Digest */}
                <div style={card}>
                    <h3 style={sectionTitle}>📬 Email Digest</h3>

                    <ToggleRow
                        label="Weekly Summary"
                        description="Get a weekly recap of your activity every Monday"
                        checked={settings.weeklyDigest}
                        onChange={() => toggle("weeklyDigest")}
                    />
                </div>
            </div>
        </div>
    );
}

function ToggleRow({ label, description, checked, onChange }) {
    return (
        <div style={toggleRow}>
            <div style={toggleInfo}>
                <p style={toggleLabel}>{label}</p>
                <p style={toggleDesc}>{description}</p>
            </div>
            <button style={toggle(checked)} onClick={onChange}>
                <span style={toggleKnob(checked)} />
            </button>
        </div>
    );
}

const header = { marginBottom: "40px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" };
const title = { fontSize: "32px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "8px" };
const subtitle = { fontSize: "17px", color: "var(--text-secondary)", width: "100%" };
const savedBadge = { padding: "6px 12px", background: "rgba(52, 199, 89, 0.1)", color: "var(--success)", borderRadius: "980px", fontSize: "13px", fontWeight: 500 };

const sectionsGrid = { display: "grid", gap: "20px", maxWidth: "600px" };

const card = {
    background: "var(--card-bg)",
    padding: "24px",
    borderRadius: "16px",
    border: "1px solid var(--border)",
    boxShadow: "var(--card-shadow)",
};

const sectionTitle = { fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "20px" };

const toggleRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid var(--border)",
};

const toggleInfo = { flex: 1 };
const toggleLabel = { fontSize: "15px", fontWeight: 500, color: "var(--text-primary)", marginBottom: "2px" };
const toggleDesc = { fontSize: "13px", color: "var(--text-secondary)" };

const toggle = (checked) => ({
    width: "50px",
    height: "30px",
    borderRadius: "15px",
    background: checked ? "var(--success)" : "var(--border-strong)",
    border: "none",
    padding: "3px",
    cursor: "pointer",
    position: "relative",
    transition: "background 0.2s",
});

const toggleKnob = (checked) => ({
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: "#fff",
    display: "block",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    transform: checked ? "translateX(20px)" : "translateX(0)",
    transition: "transform 0.2s",
});
