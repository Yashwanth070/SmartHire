import "../styles/theme.css";

/**
 * GlassCard Component - Example component using glassmorphism styles
 * 
 * Usage examples:
 * 
 * 1. Basic glass card:
 *    <GlassCard>Your content here</GlassCard>
 * 
 * 2. Auto-sized glass panel:
 *    <GlassCard variant="panel">Your content here</GlassCard>
 * 
 * 3. Interactive glass card with hover effect:
 *    <GlassCard hover interactive>Your content here</GlassCard>
 * 
 * 4. Colored glass card:
 *    <GlassCard color="primary">Your content here</GlassCard>
 * 
 * 5. Custom size:
 *    <GlassCard size="lg">Your content here</GlassCard>
 */

export default function GlassCard({
    children,
    variant = "card", // "card" or "panel"
    size = "default", // "sm", "default", "lg", "auto", "full"
    opacity = "medium", // "subtle", "light", "medium", "strong"
    color = null, // null, "primary", "secondary", "success", "warning", "danger", "dark"
    hover = false,
    interactive = false,
    className = "",
    style = {},
    onClick = null
}) {
    const baseClass = variant === "panel" ? "glass-panel" : "glass-card";

    // Build class names
    const classes = [
        baseClass,
        size !== "default" && `${baseClass}-${size}`,
        opacity !== "medium" && `glass-${opacity}`,
        color && `glass-${color}`,
        hover && "glass-hover",
        interactive && "glass-interactive",
        className
    ].filter(Boolean).join(" ");

    return (
        <div className={classes} style={style} onClick={onClick}>
            {children}
        </div>
    );
}
