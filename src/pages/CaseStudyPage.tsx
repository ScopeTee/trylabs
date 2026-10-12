import { useMeta } from '@/lib/hooks';
import { Link } from '@/lib/router';
import { Reveal } from '@/components/Reveal';
import { ProjectCard } from '@/components/ProjectCard';
import {
  getProject,
  getProjectsBySlugs,
} from '@/lib/projects';
import { ArrowRight, ChevronRight } from 'lucide-react';

export function CaseStudyPage({ slug }: { slug: string }) {
  const project = getProject(slug);

  useMeta(
    project
      ? `${project.title} — TryLabs`
      : 'Selected Work — TryLabs',
    project?.summary
  );

  if (!project) {
    return (
      <div className="pt-40 pb-20 min-h-screen bg-paper">
        <div className="container-tl text-center">
          <h1 className="text-3xl font-light text-ink mb-4">
            Project not found
          </h1>
          <p className="text-ink-muted mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/work"
            className="inline-flex items-center justify-center px-6 py-3 bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition-colors"
          >
            Back to Selected Work
          </Link>
        </div>
      </div>
    );
  }

  const related = getProjectsBySlugs(project.relatedSlugs).filter(
    (p) => p.slug !== project.slug
  );

  return (
    <>
      <article>
        {/* Breadcrumbs + Header */}
        <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-paper">
          <div className="container-tl">
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-1.5 text-xs text-ink-muted">
                  <li>
                    <Link to="/" className="hover:text-ink transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="h-3 w-3 text-ink-light" />
                  </li>
                  <li>
                    <Link to="/work" className="hover:text-ink transition-colors">
                      Selected Work
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="h-3 w-3 text-ink-light" />
                  </li>
                  <li
                    className="text-ink-soft font-medium truncate max-w-[200px]"
                    aria-current="page"
                  >
                    {project.shortTitle}
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delay={50}>
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="label">{project.categoryLabel}</span>
                <span className="inline-flex items-center gap-2 border px-3 py-1 text-xs font-medium tracking-wide rounded-full bg-paper-deep text-ink-soft border-line-strong">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink-muted" />
                  {project.statusLabel}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-ink">
                {project.title}
              </h1>
              <p className="mt-5 text-xl md:text-2xl font-light leading-[1.35] text-ink-soft max-w-reading">
                {project.headline}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Hero image */}
        <section className="pb-12 md:pb-16 bg-paper">
          <div className="container-tl">
            <Reveal delay={100}>
              <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-paper-deep border border-line">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 md:py-16 bg-paper-warm">
          <div className="container-tl">
            <Reveal>
              <div className="max-w-reading">
                <p className="label mb-5">Overview</p>
                <p className="text-lg md:text-xl leading-[1.65] text-ink-soft">
                  {project.overview}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Core capabilities */}
        <section className="py-16 md:py-20 bg-paper">
          <div className="container-tl">
            <div className="max-w-reading mx-auto">
              <Reveal>
                <p className="label mb-6">Core capabilities</p>
                <ul className="space-y-4">
                  {project.coreCapabilities.map((cap, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-base leading-[1.65] text-ink-soft"
                    >
                      <span className="font-mono text-xs text-ink-light tabular-nums flex-shrink-0 mt-1.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Metrics — only when defined */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="py-16 md:py-20 bg-paper-warm border-y border-line">
            <div className="container-tl">
              <Reveal>
                <p className="label mb-3">
                  {project.metricsHeading || 'At a glance'}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line mt-6">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="bg-paper-card p-6 md:p-8">
                      <p className="font-serif text-3xl md:text-4xl font-light text-ink leading-none mb-3">
                        {m.value}
                      </p>
                      <p className="text-sm font-medium text-ink-soft mb-1">
                        {m.label}
                      </p>
                      {m.sublabel && (
                        <p className="text-xs leading-[1.55] text-ink-muted">
                          {m.sublabel}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* Expertise demonstrated */}
        <section className="py-16 md:py-20 bg-paper">
          <div className="container-tl">
            <div className="max-w-reading mx-auto">
              <Reveal>
                <p className="label mb-5">Expertise demonstrated</p>
                <p className="text-lg leading-[1.65] text-ink-soft">
                  {project.expertise}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </article>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-paper-warm border-t border-line">
          <div className="container-tl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <h2 className="text-2xl font-light tracking-tight text-ink">
                Related projects
              </h2>
              <Link
                to="/work"
                className="link-underline text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                View all work
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-ink text-paper">
        <div className="container-tl">
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight">
                  {project.ctaText}
                </h2>
                <p className="mt-3 text-base text-ink-light">
                  We'd like to hear about what you need.
                </p>
              </div>
              <Link
                to={project.ctaLink}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-paper text-paper text-sm font-medium hover:bg-ink-soft transition-colors duration-300 ease-smooth"
              >
                {project.ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
