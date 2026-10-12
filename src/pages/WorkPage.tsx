import { useState } from 'react';
import { useMeta } from '@/lib/hooks';
import { Reveal } from '@/components/Reveal';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/Button';
import { projects, projectFilters } from '@/lib/projects';
import { ArrowRight } from 'lucide-react';

export function WorkPage() {
  useMeta(
    'Selected Work — TryLabs',
    'A selection of digital products and business systems spanning logistics, developer tools, commerce, social discovery and enterprise operations.'
  );

  const [filter, setFilter] = useState('all');

  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-paper">
        <div className="container-tl">
          <Reveal>
            <p className="label mb-5">Selected Work</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-ink max-w-3xl">
              Software built around real problems.
            </h1>
            <p className="mt-6 text-lg leading-[1.6] text-ink-muted max-w-reading">
              A selection of digital products and business systems spanning
              logistics, developer tools, commerce, social discovery and
              enterprise operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 md:py-8 bg-paper border-y border-line sticky top-16 md:top-20 z-30 backdrop-blur-sm bg-paper/95">
        <div className="container-tl">
          <div className="flex flex-wrap items-center gap-2">
            {projectFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 text-sm font-medium border transition-all duration-300 ease-smooth ${
                  filter === f.value
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-transparent text-ink-soft border-line hover:border-line-strong hover:text-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Attribution legend */}
      <section className="pt-10 md:pt-12 bg-paper-warm">
        <div className="container-tl">
          <Reveal>
            <div className="flex flex-wrap gap-6 text-xs text-ink-muted">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                Product Build
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-ink-muted" />
                Professional Experience
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Project grid */}
      <section className="py-10 md:py-14 bg-paper-warm min-h-[50vh]">
        <div className="container-tl">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  variant={project.prominent ? 'prominent' : 'default'}
                  className={
                    project.prominent && filter === 'all'
                      ? 'md:col-span-2'
                      : ''
                  }
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-ink-muted text-lg">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-paper border-t border-line">
        <div className="container-tl">
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-tight text-ink">
                  Have a project in mind?
                </h2>
                <p className="mt-3 text-base text-ink-muted">
                  We'd like to hear about it.
                </p>
              </div>
              <Button to="/contact" variant="primary">
                <span className="flex items-center gap-2">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
