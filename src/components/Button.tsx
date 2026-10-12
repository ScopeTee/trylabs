import { Link } from '@/lib/router';

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  ariaLabel?: string;
};

const base =
  'inline-flex items-center justify-center font-medium text-sm tracking-wide transition-all duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-4 px-6 py-3';

const variants = {
  primary:
    'bg-ink text-paper hover:bg-ink-soft rounded-none border border-ink',
  secondary:
    'bg-transparent text-ink border border-line-strong hover:border-ink hover:bg-paper-warm',
  ghost: 'bg-transparent text-ink hover:text-ink-soft px-2 py-1',
};

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
