import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/theme.css";

export default function SettingsSecurity() {
    const navigate = useNavigate();
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");

    const handleSave = (e) => {
        e.preventDefault();
        setError("");

        if (newPassword !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        if (newPassword.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        // Demo: just show success
        setSaved(true);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div>
            <header style={header}>
                <h1 style={title}>Password & Security</h1>
                <p style={subtitle}>Manage your account security settings.</p>
            </header>

            <form style={formCard} onSubmit={handleSave}>
                <h3 style={sectionTitle}>Change Password</h3>

                <div style={inputGroup}>
                    <label style={label}>Current Password</label>
                    <input
                        style={input}
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Enter current password"
                        required
                    />
                </div>

                <div style={inputGroup}>
                    <label style={label}>New Password</label>
                    <input
                        style={input}
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        required
                    />
                </div>

                <div style={inputGroup}>
                    <label style={label}>Confirm New Password</label>
                    <input
                        style={input}
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        required
                    />
                </div>

                {error && <p style={errorText}>{error}</p>}

                <div style={buttonRow}>
                    <button type="submit" style={primaryBtn}>
                        {saved ? "✓ Password Updated!" : "Update Password"}
                    </button>
                    <button type="button" style={secondaryBtn} onClick={() => navigate(-1)}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

const header = { marginBottom: "40px" };
const title = { fontSize: "32px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "8px" };
const subtitle = { fontSize: "17px", color: "var(--text-secondary)" };

const formCard = {
    background: "var(--card-bg)",
    padding: "32px",
    borderRadius: "16px",
    border: "1px solid var(--border)",
    maxWidth: "480px",
    boxShadow: "var(--card-shadow)",
};

const sectionTitle = { fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "24px" };

const inputGroup = { marginBottom: "20px" };
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

const errorText = { color: "var(--danger)", fontSize: "14px", marginBottom: "16px" };

const buttonRow = { display: "flex", gap: "12px", marginTop: "24px" };

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

const secondaryBtn = {
    padding: "12px 28px",
    background: "transparent",
    color: "var(--text-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "980px",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
};
