type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
}: Props) {
  return (
    <div
      className={`${align === 'center' ? 'text-center mx-auto max-w-reading' : ''} ${className}`}
    >
      {eyebrow && <p className="label mb-4">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-light leading-[1.15] tracking-tight text-ink">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lg leading-[1.6] text-ink-muted max-w-reading">
          {intro}
        </p>
      )}
    </div>
  );
}
