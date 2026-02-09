import "../styles/theme.css";

export default function Legal() {
    return (
        <div style={container}>
            <h1 style={title}>Legal Information</h1>
            <p style={updated}>SmartHire Inc. Legal Resources</p>

            <section style={section}>
                <h2 style={heading}>Company Information</h2>
                <p style={text}>
                    SmartHire Inc.<br />
                    123 Innovation Drive, Suite 500<br />
                    San Francisco, CA 94105<br />
                    United States
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>Legal Documents</h2>
                <div style={linkGrid}>
                    <a href="/privacy-policy" style={docLink}>
                        <span style={docIcon}>📄</span>
                        <div>
                            <p style={docTitle}>Privacy Policy</p>
                            <p style={docDesc}>How we collect and use your data</p>
                        </div>
                    </a>
                    <a href="/terms" style={docLink}>
                        <span style={docIcon}>📋</span>
                        <div>
                            <p style={docTitle}>Terms of Use</p>
                            <p style={docDesc}>Rules for using our services</p>
                        </div>
                    </a>
                    <a href="/sales-policy" style={docLink}>
                        <span style={docIcon}>💳</span>
                        <div>
                            <p style={docTitle}>Sales Policy</p>
                            <p style={docDesc}>Pricing and payment terms</p>
                        </div>
                    </a>
                </div>
            </section>

            <section style={section}>
                <h2 style={heading}>Trademark Information</h2>
                <p style={text}>
                    SmartHire, the SmartHire logo, and other SmartHire trademarks are trademarks
                    of SmartHire Inc. All other trademarks are the property of their respective owners.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>Copyright Notice</h2>
                <p style={text}>
                    © 2026 SmartHire Inc. All rights reserved. All content on this website, including
                    text, graphics, logos, and software, is the property of SmartHire Inc. and is
                    protected by copyright laws.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>Contact Legal Department</h2>
                <p style={text}>
                    For legal inquiries, please contact:<br />
                    Email: <a href="mailto:legal@smarthire.com" style={link}>legal@smarthire.com</a>
                </p>
            </section>
        </div>
    );
}

const container = { maxWidth: "800px" };
const title = { fontSize: "32px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "8px" };
const updated = { fontSize: "14px", color: "var(--text-secondary)", marginBottom: "40px" };
const section = { marginBottom: "32px" };
const heading = { fontSize: "20px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" };
const text = { fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.7 };
const link = { color: "var(--accent)", textDecoration: "none" };
const linkGrid = { display: "grid", gap: "12px" };
const docLink = { display: "flex", alignItems: "center", gap: "12px", padding: "16px", background: "var(--card-bg)", borderRadius: "12px", border: "1px solid var(--border)", textDecoration: "none", transition: "all 0.2s" };
const docIcon = { fontSize: "24px" };
const docTitle = { fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "2px" };
const docDesc = { fontSize: "13px", color: "var(--text-secondary)" };
