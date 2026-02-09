import "../styles/theme.css";

export default function PrivacyPolicy() {
    return (
        <div style={container}>
            <h1 style={title}>Privacy Policy</h1>
            <p style={updated}>Last updated: February 10, 2026</p>

            <section style={section}>
                <h2 style={heading}>1. Information We Collect</h2>
                <p style={text}>
                    SmartHire Inc. collects information you provide directly to us, including:
                </p>
                <ul style={list}>
                    <li>Personal information (name, email address, phone number)</li>
                    <li>Professional information (resume, work history, skills)</li>
                    <li>Account credentials and preferences</li>
                    <li>Communications with employers or candidates</li>
                </ul>
            </section>

            <section style={section}>
                <h2 style={heading}>2. How We Use Your Information</h2>
                <p style={text}>We use the information we collect to:</p>
                <ul style={list}>
                    <li>Provide, maintain, and improve our services</li>
                    <li>Match candidates with job opportunities</li>
                    <li>Send you notifications about applications and interviews</li>
                    <li>Communicate with you about products, services, and events</li>
                    <li>Protect against fraudulent or illegal activity</li>
                </ul>
            </section>

            <section style={section}>
                <h2 style={heading}>3. Information Sharing</h2>
                <p style={text}>
                    We share your information only with employers you apply to, service providers who assist our operations,
                    and when required by law. We never sell your personal information to third parties.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>4. Data Security</h2>
                <p style={text}>
                    We implement industry-standard security measures including encryption, secure servers,
                    and regular security audits to protect your personal information.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>5. Your Rights</h2>
                <p style={text}>You have the right to:</p>
                <ul style={list}>
                    <li>Access and update your personal information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request a copy of your data</li>
                </ul>
            </section>

            <section style={section}>
                <h2 style={heading}>6. Contact Us</h2>
                <p style={text}>
                    If you have questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@smarthire.com" style={link}>privacy@smarthire.com</a>
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
const list = { fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.8, paddingLeft: "24px" };
const link = { color: "var(--accent)", textDecoration: "none" };
