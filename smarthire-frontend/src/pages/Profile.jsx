import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/theme.css";

export default function Profile() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [name, setName] = useState(localStorage.getItem("userName") || "");
    const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
    const [phone, setPhone] = useState(localStorage.getItem("userPhone") || "");
    const [bio, setBio] = useState(localStorage.getItem("userBio") || "");
    const [avatar, setAvatar] = useState(localStorage.getItem("userAvatar") || "");
    const [saved, setSaved] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert("Image size must be less than 5MB");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result;
                setAvatar(base64);
                localStorage.setItem("userAvatar", base64);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setAvatar("");
        localStorage.removeItem("userAvatar");
    };

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPhone", phone);
        localStorage.setItem("userBio", bio);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const role = localStorage.getItem("role") || "CANDIDATE";

    return (
        <div>
            <header style={header}>
                <h1 style={title}>Edit Profile</h1>
                <p style={subtitle}>Update your personal information.</p>
            </header>

            <form style={formCard} onSubmit={handleSave}>
                {/* Avatar Section */}
                <div style={avatarSection}>
                    <div style={avatarWrapper}>
                        {avatar ? (
                            <img src={avatar} alt="Profile" style={avatarImage} />
                        ) : (
                            <div style={avatarPlaceholder}>
                                {name.charAt(0).toUpperCase() || "U"}
                            </div>
                        )}
                        <button
                            type="button"
                            style={cameraButton}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            📷
                        </button>
                    </div>
                    <div style={avatarInfo}>
                        <p style={avatarName}>{name || "Your Name"}</p>
                        <p style={avatarRole}>{role === "RECRUITER" ? "Recruiter" : "Candidate"}</p>
                        <div style={avatarActions}>
                            <button
                                type="button"
                                style={uploadBtn}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                Upload Photo
                            </button>
                            {avatar && (
                                <button type="button" style={removeBtn} onClick={removeImage}>
                                    Remove
                                </button>
                            )}
                        </div>
                        <p style={imageHint}>JPG, PNG or GIF. Max 5MB.</p>
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                    />
                </div>

                <div style={divider} />

                <div style={inputGroup}>
                    <label style={label}>Full Name</label>
                    <input
                        style={input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div style={inputGroup}>
                    <label style={label}>Email Address</label>
                    <input
                        style={input}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                    />
                </div>

                <div style={inputGroup}>
                    <label style={label}>Phone Number</label>
                    <input
                        style={input}
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                    />
                </div>

                <div style={inputGroup}>
                    <label style={label}>Bio</label>
                    <textarea
                        style={textarea}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell us a bit about yourself..."
                        rows={3}
                    />
                </div>

                <div style={buttonRow}>
                    <button type="submit" style={primaryBtn}>
                        {saved ? "✓ Saved!" : "Save Changes"}
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
    maxWidth: "560px",
    boxShadow: "var(--card-shadow)",
};

const avatarSection = { display: "flex", alignItems: "flex-start", gap: "24px", marginBottom: "24px" };

const avatarWrapper = { position: "relative", flexShrink: 0 };

const avatarImage = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid var(--accent)",
};

const avatarPlaceholder = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "var(--accent)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: 600,
};

const cameraButton = {
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "var(--card-bg)",
    border: "2px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "12px",
};

const avatarInfo = { flex: 1 };
const avatarName = { fontSize: "18px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "2px" };
const avatarRole = { fontSize: "14px", color: "var(--text-secondary)", marginBottom: "12px" };

const avatarActions = { display: "flex", gap: "8px", marginBottom: "8px" };

const uploadBtn = {
    padding: "8px 16px",
    background: "var(--accent)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
};

const removeBtn = {
    padding: "8px 16px",
    background: "transparent",
    color: "var(--danger)",
    border: "1px solid var(--danger)",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
};

const imageHint = { fontSize: "12px", color: "var(--text-secondary)" };

const divider = { height: "1px", background: "var(--border)", margin: "0 0 24px 0" };

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

const textarea = {
    ...input,
    resize: "vertical",
    minHeight: "80px",
    fontFamily: "inherit",
};

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
