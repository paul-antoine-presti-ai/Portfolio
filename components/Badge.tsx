interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const baseClasses = "px-3 py-1 rounded-full text-xs font-medium transition-all";
  const variantClasses = variant === "accent"
    ? "bg-accent/10 text-accent border border-accent/30 orange-glow"
    : "bg-glass-bg backdrop-blur-sm text-foreground-muted border border-glass-border";

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {children}
    </span>
  );
}

