import "../styles/theme.css";

export default function SalesPolicy() {
    return (
        <div style={container}>
            <h1 style={title}>Sales Policy</h1>
            <p style={updated}>Last updated: February 10, 2026</p>

            <section style={section}>
                <h2 style={heading}>1. Subscription Plans</h2>
                <p style={text}>
                    SmartHire offers various subscription plans for recruiters and enterprises.
                    All plans include access to our core features with additional premium features
                    available at higher tiers.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>2. Pricing</h2>
                <p style={text}>
                    Prices are listed in USD and are subject to change. Any price changes will be
                    communicated in advance and will not affect active subscriptions until renewal.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>3. Payment Terms</h2>
                <ul style={list}>
                    <li>Payments are processed securely through our payment partners</li>
                    <li>Subscriptions are billed monthly or annually based on your plan</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>Failed payments may result in service interruption</li>
                </ul>
            </section>

            <section style={section}>
                <h2 style={heading}>4. Free Trial</h2>
                <p style={text}>
                    We offer a 14-day free trial for new users. No credit card is required to start
                    your trial. At the end of the trial, you can choose a paid plan to continue.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>5. Cancellation</h2>
                <p style={text}>
                    You may cancel your subscription at any time. Cancellation will take effect at
                    the end of your current billing period, and you will retain access until then.
                </p>
            </section>

            <section style={section}>
                <h2 style={heading}>6. Refunds</h2>
                <p style={text}>
                    Refunds are considered on a case-by-case basis. Please contact our support team
                    at <a href="mailto:billing@smarthire.com" style={link}>billing@smarthire.com</a> for
                    refund requests.
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
