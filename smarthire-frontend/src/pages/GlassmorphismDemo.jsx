import "../styles/theme.css";
import GlassCard from "../components/GlassCard";

/**
 * GlassmorphismDemo - Showcase page for all glassmorphism styles
 * This page demonstrates all available glass variants and combinations
 */
export default function GlassmorphismDemo() {
    return (
        <div style={styles.pageWrapper}>
            <div style={styles.container}>
                <h1 style={styles.mainTitle}>Glassmorphism Design System</h1>
                <p style={styles.subtitle}>Explore all glassmorphism variants and styles</p>

                {/* Size Variants */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Size Variants</h2>
                    <div style={styles.grid}>
                        <div className="glass-card glass-card-sm glass-hover" style={styles.demoCard}>
                            <h3 style={styles.cardTitle}>Small</h3>
                            <p style={styles.cardText}>180×240</p>
                        </div>
                        <div className="glass-card glass-hover" style={styles.demoCard}>
                            <h3 style={styles.cardTitle}>Default</h3>
                            <p style={styles.cardText}>240×360</p>
                        </div>
                        <div className="glass-card glass-card-lg glass-hover" style={styles.demoCard}>
                            <h3 style={styles.cardTitle}>Large</h3>
                            <p style={styles.cardText}>320×460</p>
                        </div>
                    </div>
                </section>

                {/* Opacity Variants */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Opacity Levels</h2>
                    <div style={styles.gridFull}>
                        <GlassCard variant="panel" size="full" opacity="subtle" hover>
                            <h3 style={styles.cardTitle}>Subtle</h3>
                            <p style={styles.cardText}>rgba(255, 255, 255, 0.08)</p>
                        </GlassCard>
                        <GlassCard variant="panel" size="full" opacity="light" hover>
                            <h3 style={styles.cardTitle}>Light</h3>
                            <p style={styles.cardText}>rgba(255, 255, 255, 0.12)</p>
                        </GlassCard>
                        <GlassCard variant="panel" size="full" opacity="medium" hover>
                            <h3 style={styles.cardTitle}>Medium</h3>
                            <p style={styles.cardText}>rgba(255, 255, 255, 0.15)</p>
                        </GlassCard>
                        <GlassCard variant="panel" size="full" opacity="strong" hover>
                            <h3 style={styles.cardTitle}>Strong</h3>
                            <p style={styles.cardText}>rgba(255, 255, 255, 0.25)</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Color Variants */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Colored Glass</h2>
                    <div style={styles.gridFull}>
                        <GlassCard variant="panel" size="full" color="primary" hover>
                            <h3 style={styles.cardTitle}>Primary</h3>
                            <p style={styles.cardText}>Blue tint</p>
                        </GlassCard>
                        <GlassCard variant="panel" size="full" color="success" hover>
                            <h3 style={styles.cardTitle}>Success</h3>
                            <p style={styles.cardText}>Green tint</p>
                        </GlassCard>
                        <GlassCard variant="panel" size="full" color="warning" hover>
                            <h3 style={styles.cardTitle}>Warning</h3>
                            <p style={styles.cardText}>Orange tint</p>
                        </GlassCard>
                        <GlassCard variant="panel" size="full" color="danger" hover>
                            <h3 style={styles.cardTitle}>Danger</h3>
                            <p style={styles.cardText}>Red tint</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Interactive States */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Interactive Elements</h2>
                    <div style={styles.gridFull}>
                        <div className="glass-panel glass-hover" style={styles.interactiveCard}>
                            <h3 style={styles.cardTitle}>Hover Effect</h3>
                            <p style={styles.cardText}>Hover to see lift animation</p>
                        </div>
                        <div className="glass-panel glass-interactive" style={styles.interactiveCard}>
                            <h3 style={styles.cardTitle}>Interactive</h3>
                            <p style={styles.cardText}>Click to see scale effect</p>
                        </div>
                        <div className="glass-panel glass-hover glass-interactive" style={styles.interactiveCard}>
                            <h3 style={styles.cardTitle}>Combined</h3>
                            <p style={styles.cardText}>Hover + Interactive</p>
                        </div>
                    </div>
                </section>

                {/* Practical Example */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Practical Example: Dashboard Cards</h2>
                    <div style={styles.gridDashboard}>
                        <GlassCard variant="panel" size="full" color="primary" hover interactive>
                            <div style={styles.statCard}>
                                <p style={styles.statLabel}>Total Jobs</p>
                                <h2 style={styles.statValue}>142</h2>
                                <p style={styles.statChange}>+12% from last month</p>
                            </div>
                        </GlassCard>
                        <GlassCard variant="panel" size="full" color="success" hover interactive>
                            <div style={styles.statCard}>
                                <p style={styles.statLabel}>Applications</p>
                                <h2 style={styles.statValue}>1,284</h2>
                                <p style={styles.statChange}>+23% from last month</p>
                            </div>
                        </GlassCard>
                        <GlassCard variant="panel" size="full" color="warning" hover interactive>
                            <div style={styles.statCard}>
                                <p style={styles.statLabel}>Interviews</p>
                                <h2 style={styles.statValue}>89</h2>
                                <p style={styles.statChange}>+8% from last month</p>
                            </div>
                        </GlassCard>
                        <GlassCard variant="panel" size="full" color="danger" hover interactive>
                            <div style={styles.statCard}>
                                <p style={styles.statLabel}>Pending</p>
                                <h2 style={styles.statValue}>34</h2>
                                <p style={styles.statChange}>-5% from last month</p>
                            </div>
                        </GlassCard>
                    </div>
                </section>
            </div>
        </div>
    );
}

const styles = {
    pageWrapper: {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "40px 20px",
    },
    container: {
        maxWidth: "1400px",
        margin: "0 auto",
    },
    mainTitle: {
        color: "#fff",
        fontSize: "48px",
        fontWeight: "800",
        textAlign: "center",
        marginBottom: "12px",
        textShadow: "0 4px 20px rgba(0,0,0,0.3)",
    },
    subtitle: {
        color: "rgba(255, 255, 255, 0.9)",
        fontSize: "18px",
        textAlign: "center",
        marginBottom: "60px",
    },
    section: {
        marginBottom: "60px",
    },
    sectionTitle: {
        color: "#fff",
        fontSize: "28px",
        fontWeight: "700",
        marginBottom: "24px",
        textShadow: "0 2px 10px rgba(0,0,0,0.2)",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 240px))",
        gap: "24px",
        justifyContent: "center",
    },
    gridFull: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
    },
    gridDashboard: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
    },
    demoCard: {
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    interactiveCard: {
        minHeight: "140px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    cardTitle: {
        color: "#fff",
        fontSize: "20px",
        fontWeight: "700",
        marginBottom: "8px",
        textAlign: "center",
    },
    cardText: {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: "14px",
        textAlign: "center",
    },
    statCard: {
        textAlign: "center",
    },
    statLabel: {
        color: "rgba(255, 255, 255, 0.9)",
        fontSize: "14px",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        marginBottom: "8px",
    },
    statValue: {
        color: "#fff",
        fontSize: "42px",
        fontWeight: "800",
        marginBottom: "4px",
    },
    statChange: {
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: "13px",
    },
};
