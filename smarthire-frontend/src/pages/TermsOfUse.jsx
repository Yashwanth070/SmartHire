import "../styles/theme.css";

export default function TermsOfUse() {
    return (
        <div style={container}>
            <h1 style={title}>Terms of Use</h1>
            <p style={updated}>Last updated: February 10, 2026</p>

            <section style={section}>
                <h2 style={heading}>1. Acceptance of Terms</h2>
                <p style={text}>
                    By accessing or using SmartHire's services, you agree to be bound by these Terms of Use.
                    If you do not agree to these terms, please do not use our services.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>2. Use of Services</h2>
                <p style={text}>You agree to use SmartHire only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul style={list}>
                    <li>Post false, misleading, or fraudulent job listings or applications</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use automated systems to scrape or collect data</li>
                    <li>Violate any applicable laws or regulations</li>
                </ul>
            </section>

            <section style={section}>
                <h2 style={heading}>3. Account Responsibilities</h2>
                <p style={text}>
                    You are responsible for maintaining the confidentiality of your account credentials and for all
                    activities that occur under your account. You must notify us immediately of any unauthorized use.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>4. Intellectual Property</h2>
                <p style={text}>
                    All content, features, and functionality of SmartHire are owned by SmartHire Inc. and are
                    protected by copyright, trademark, and other intellectual property laws.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>5. Limitation of Liability</h2>
                <p style={text}>
                    SmartHire is not liable for any indirect, incidental, special, or consequential damages arising
                    from your use of our services. We do not guarantee employment outcomes.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>6. Termination</h2>
                <p style={text}>
                    We reserve the right to terminate or suspend your account at any time for violations of these
                    Terms or for any other reason at our sole discretion.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>7. Contact</h2>
                <p style={text}>
                    For questions about these Terms, contact us at{" "}
                    <a href="mailto:legal@smarthire.com" style={link}>legal@smarthire.com</a>
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
