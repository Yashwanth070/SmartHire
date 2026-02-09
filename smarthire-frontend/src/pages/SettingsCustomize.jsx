import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/theme.css";

export default function SettingsCustomize() {
    const { dark, toggleTheme } = useTheme();
    const [accentColor, setAccentColor] = useState(localStorage.getItem("accentColor") || "#0071e3");
    const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize") || "medium");

    const colors = [
        { name: "Blue", value: "#0071e3" },
        { name: "Purple", value: "#af52de" },
        { name: "Green", value: "#34c759" },
        { name: "Orange", value: "#ff9500" },
        { name: "Pink", value: "#ff2d55" },
        { name: "Red", value: "#ff3b30" },
    ];

    const handleColorChange = (color) => {
        setAccentColor(color);
        localStorage.setItem("accentColor", color);
        document.documentElement.style.setProperty("--accent", color);
    };

    return (
        <div>
            <header style={header}>
                <h1 style={title}>Customize</h1>
                <p style={subtitle}>Personalize your SmartHire experience.</p>
            </header>

            <div style={sectionsGrid}>
                {/* Theme */}
                <div style={card}>
                    <h3 style={sectionTitle}>🎨 Appearance</h3>
                    <p style={sectionDesc}>Choose your preferred theme.</p>

                    <div style={themeOptions}>
                        <button
                            style={themeOption(!dark)}
                            onClick={() => dark && toggleTheme()}
                        >
                            <span style={themeIcon}>☀️</span>
                            <span>Light</span>
                        </button>
                        <button
                            style={themeOption(dark)}
                            onClick={() => !dark && toggleTheme()}
                        >
                            <span style={themeIcon}>🌙</span>
                            <span>Dark</span>
                        </button>
                    </div>
                </div>

                {/* Accent Color */}
                <div style={card}>
                    <h3 style={sectionTitle}>🎯 Accent Color</h3>
                    <p style={sectionDesc}>Choose your brand color.</p>

                    <div style={colorGrid}>
                        {colors.map((c) => (
                            <button
                                key={c.value}
                                style={{
                                    ...colorOption,
                                    background: c.value,
                                    border: accentColor === c.value ? "3px solid var(--text-primary)" : "3px solid transparent",
                                }}
                                onClick={() => handleColorChange(c.value)}
                                title={c.name}
                            />
                        ))}
                    </div>
                </div>

                {/* Font Size */}
                <div style={card}>
                    <h3 style={sectionTitle}>📝 Text Size</h3>
                    <p style={sectionDesc}>Adjust the reading experience.</p>

                    <div style={sizeOptions}>
                        {["small", "medium", "large"].map((size) => (
                            <button
                                key={size}
                                style={sizeOption(fontSize === size)}
                                onClick={() => {
                                    setFontSize(size);
                                    localStorage.setItem("fontSize", size);
                                }}
                            >
                                {size.charAt(0).toUpperCase() + size.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const header = { marginBottom: "40px" };
const title = { fontSize: "32px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.5px", marginBottom: "8px" };
const subtitle = { fontSize: "17px", color: "var(--text-secondary)" };

const sectionsGrid = { display: "grid", gap: "20px", maxWidth: "600px" };

const card = {
    background: "var(--card-bg)",
    padding: "24px",
    borderRadius: "16px",
    border: "1px solid var(--border)",
    boxShadow: "var(--card-shadow)",
};

const sectionTitle = { fontSize: "17px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" };
const sectionDesc = { fontSize: "14px", color: "var(--text-secondary)", marginBottom: "20px" };

const themeOptions = { display: "flex", gap: "12px" };
const themeOption = (active) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    padding: "16px",
    background: active ? "var(--accent)" : "var(--bg-primary)",
    color: active ? "#fff" : "var(--text-primary)",
    border: active ? "none" : "1px solid var(--border)",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
});
const themeIcon = { fontSize: "24px" };

const colorGrid = { display: "flex", gap: "12px", flexWrap: "wrap" };
const colorOption = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "transform 0.15s",
};

const sizeOptions = { display: "flex", gap: "12px" };
const sizeOption = (active) => ({
    flex: 1,
    padding: "12px",
    background: active ? "var(--accent)" : "var(--bg-primary)",
    color: active ? "#fff" : "var(--text-primary)",
    border: active ? "none" : "1px solid var(--border)",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
});
