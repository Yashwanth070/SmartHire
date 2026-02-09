import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/theme.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { dark, toggleTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";
  const userAvatar = localStorage.getItem("userAvatar") || "";

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="glass-nav" style={nav}>
      <h1
        style={brandText}
        onClick={() => {
          const role = localStorage.getItem("role");
          navigate(role === "RECRUITER" ? "/recruiter" : "/candidate");
        }}
      >
        SmartHire
      </h1>

      <div style={rightSection}>
        {/* Theme Toggle */}
        <button style={themeButton} onClick={toggleTheme} aria-label="Toggle theme">
          {dark ? "☀️" : "🌙"}
        </button>

        {/* User Profile */}
        <div style={profileWrapper}>
          <button style={profileButton} onClick={() => setShowMenu(!showMenu)}>
            {userAvatar ? (
              <img src={userAvatar} alt="Profile" style={avatarImg} />
            ) : (
              <div style={avatar}>{userName.charAt(0).toUpperCase()}</div>
            )}
            <span style={profileName}>{userName}</span>
            <span style={chevron}>▾</span>
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div style={dropdownMenu} className="glass-card">
              <div style={menuHeader}>
                {userAvatar ? (
                  <img src={userAvatar} alt="Profile" style={avatarImgLarge} />
                ) : (
                  <div style={avatarLarge}>{userName.charAt(0).toUpperCase()}</div>
                )}
                <div>
                  <p style={menuName}>{userName}</p>
                  <p style={menuEmail}>{userEmail}</p>
                </div>
              </div>

              <div style={menuDivider} />

              <button style={menuItem} onClick={() => { navigate("/profile"); setShowMenu(false); }}>
                <span>👤</span> Edit Profile
              </button>
              <button style={menuItem} onClick={() => { navigate("/settings/security"); setShowMenu(false); }}>
                <span>🔒</span> Password & Security
              </button>
              <button style={menuItem} onClick={() => { navigate("/settings/customize"); setShowMenu(false); }}>
                <span>🎨</span> Customize
              </button>
              <button style={menuItem} onClick={() => { navigate("/settings/notifications"); setShowMenu(false); }}>
                <span>🔔</span> Notifications
              </button>

              <div style={menuDivider} />

              <button style={menuItemDanger} onClick={logout}>
                <span>🚪</span> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 40px",
  position: "sticky",
  top: 0,
  zIndex: 100,
};

const brandText = {
  fontSize: "21px",
  fontWeight: 600,
  color: "var(--text-primary)",
  letterSpacing: "-0.3px",
  cursor: "pointer",
};

const rightSection = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const themeButton = {
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--card-bg)",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "18px",
  transition: "all 0.2s ease",
};

const profileWrapper = {
  position: "relative",
};

const profileButton = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "6px 12px 6px 6px",
  background: "var(--card-bg)",
  border: "1px solid var(--border)",
  borderRadius: "28px",
  cursor: "pointer",
  transition: "all 0.2s",
};

const avatar = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  background: "var(--accent)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 600,
};

const avatarImg = {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  objectFit: "cover",
};

const avatarLarge = {
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: "var(--accent)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: 600,
  flexShrink: 0,
};

const avatarImgLarge = {
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  objectFit: "cover",
  flexShrink: 0,
};

const profileName = {
  fontSize: "14px",
  fontWeight: 500,
  color: "var(--text-primary)",
};

const chevron = {
  fontSize: "12px",
  color: "var(--text-secondary)",
};

const dropdownMenu = {
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  width: "280px",
  padding: "12px",
  zIndex: 1000,
  background: "var(--glass-bg-solid)",
  backdropFilter: "blur(40px)",
  WebkitBackdropFilter: "blur(40px)",
  borderRadius: "16px",
  border: "1px solid var(--glass-border)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
};

const menuHeader = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "8px",
  marginBottom: "4px",
};

const menuName = {
  fontSize: "15px",
  fontWeight: 600,
  color: "var(--text-primary)",
  marginBottom: "2px",
};

const menuEmail = {
  fontSize: "13px",
  color: "var(--text-secondary)",
};

const menuDivider = {
  height: "1px",
  background: "var(--border)",
  margin: "8px 0",
};

const menuItem = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  padding: "12px",
  background: "transparent",
  border: "none",
  borderRadius: "10px",
  fontSize: "14px",
  color: "var(--text-primary)",
  cursor: "pointer",
  textAlign: "left",
  transition: "background 0.15s",
};

const menuItemDanger = {
  ...menuItem,
  color: "var(--danger)",
};