import type { Project } from '@/lib/projects';
import { Link } from '@/lib/router';
import { Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

type Props = {
  project: Project;
  variant?: 'default' | 'prominent' | 'compact';
  className?: string;
};

function StatusBadge({ project }: { project: Project }) {
  const dotColor =
    project.attribution === 'prior-experience'
      ? 'bg-ink-muted'
      : 'bg-accent';
  return (
    <span className="inline-flex items-center gap-2 border px-3 py-1 text-xs font-medium tracking-wide rounded-full bg-paper-deep text-ink-soft border-line-strong">
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotColor}`} />
      {project.statusLabel}
    </span>
  );
}

export function ProjectCard({
  project,
  variant = 'default',
  className = '',
}: Props) {
  if (variant === 'prominent') {
    return (
      <Reveal className={className}>
        <Link
          to={`/work/${project.slug}`}
          className="group block bg-paper-card border border-line overflow-hidden hover:border-line-strong transition-all duration-500 ease-smooth"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-7 md:p-9">
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="label">{project.categoryLabel}</span>
              <StatusBadge project={project} />
            </div>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-ink mb-3">
              {project.title}
            </h3>
            <p className="text-base leading-[1.6] text-ink-muted max-w-reading">
              {project.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-ink-soft transition-colors">
              View Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </Reveal>
    );
  }

  if (variant === 'compact') {
    return (
      <Reveal className={className}>
        <Link
          to={`/work/${project.slug}`}
          className="group flex items-start gap-5 p-5 border border-line bg-paper-card hover:border-line-strong hover:bg-paper-warm transition-all duration-300 ease-smooth"
        >
          <div className="flex-shrink-0 w-20 h-20 overflow-hidden bg-paper-deep">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-wider text-ink-muted mb-1">
              {project.categoryLabel}
            </p>
            <h4 className="text-base font-medium text-ink mb-1 truncate">
              {project.shortTitle}
            </h4>
            <p className="text-sm text-ink-muted line-clamp-2">
              {project.summary}
            </p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-ink-light flex-shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal className={className}>
      <Link
        to={`/work/${project.slug}`}
        className="group block bg-paper-card border border-line overflow-hidden hover:border-line-strong transition-all duration-500 ease-smooth"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6 md:p-7">
          <div className="flex items-center justify-between gap-4 mb-2.5">
            <span className="label">{project.categoryLabel}</span>
            <StatusBadge project={project} />
          </div>
          <h3 className="text-xl font-light tracking-tight text-ink mb-2">
            {project.title}
          </h3>
          <p className="text-sm leading-[1.6] text-ink-muted line-clamp-2">
            {project.summary}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-ink-soft transition-colors">
            View Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
