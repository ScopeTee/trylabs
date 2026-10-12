import { useMeta } from '@/lib/hooks';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { Link } from '@/lib/router';
import {
  projects,
  processSteps,
  metrics,
} from '@/lib/projects';
import { ArrowUpRight, ArrowRight, PenTool, Code2, Rocket, LifeBuoy } from 'lucide-react';

const processIcons = [PenTool, Code2, Rocket, LifeBuoy];

const capabilityStrip = [
  'Custom software development',
  'Business and operational systems',
  'API and systems integration',
];

const businessCapabilities = [
  {
    label: 'A.',
    title: 'Custom applications',
    description:
      'Build digital products around your customers, users, and business requirements.',
    relatedSlug: 'fashion-commerce',
  },
  {
    label: 'B.',
    title: 'Operational platforms',
    description:
      'Digitize complex workflows and give teams better tools to manage day-to-day operations.',
    relatedSlug: 'erp-implementation',
  },
  {
    label: 'C.',
    title: 'APIs and integrations',
    description:
      'Connect systems, exchange data, and reduce friction between business applications.',
    relatedSlug: 'api-infrastructure',
  },
  {
    label: 'D.',
    title: 'Product development',
    description:
      'Move from an early idea to a defined, tested, and deployable product.',
    relatedSlug: 'social-discovery',
  },
];

const principles = [
  {
    title: 'Understand before building',
    description:
      'We start with the problem, not the technology. The right solution follows from understanding what your business actually needs.',
  },
  {
    title: 'Build for real workflows',
    description:
      'Software should fit the way people work, not force them into new patterns that do not match their reality.',
  },
  {
    title: 'Deliver with clarity',
    description:
      'Clear scope, clear communication, clear decisions. No vague promises or surprises at delivery.',
  },
];

export function HomePage() {
  useMeta(
    'TryLabs — Custom Software Development',
    'We partner with businesses to turn complex problems into practical digital products — from custom applications and operational platforms to connected systems that help work run better.'
  );

  const prominentProjects = projects.filter((p) => p.prominent);
  const otherProjects = projects.filter((p) => !p.prominent);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-paper overflow-hidden">
        <div className="container-tl">
          <div className="max-w-3xl">
            <Reveal>
              <p className="label mb-6">TryLabs Corporation</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-ink">
                We build the software
                <br />
                your business needs
                <br />
                to move forward.
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-8 text-lg md:text-xl leading-[1.6] text-ink-muted max-w-2xl">
                We partner with businesses to turn complex problems into
                practical digital products — from custom applications and
                operational platforms to connected systems that help work run
                better.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button to="/contact" variant="primary">
                  <span className="flex items-center gap-2">
                    Discuss a project
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
                <Button to="/work" variant="secondary">
                  Explore our work
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Capability strip */}
        <div className="container-tl mt-16 md:mt-20">
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 border-t border-line pt-6">
              {capabilityStrip.map((cap, i) => (
                <div
                  key={cap}
                  className={`flex items-center gap-3 ${
                    i > 0 ? 'sm:ml-8 sm:pl-8 sm:border-l sm:border-line' : ''
                  }`}
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ink-muted flex-shrink-0" />
                  <span className="text-sm font-medium text-ink-soft">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Delivery process stages */}
      <section className="py-12 md:py-16 bg-paper-warm border-y border-line">
        <div className="container-tl">
          <Reveal>
            <p className="label mb-8">How we deliver</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
              {processSteps.map((step, idx) => {
                const Icon = processIcons[idx] || Code2;
                return (
                <div
                  key={step.number}
                  className="bg-paper-card p-6 md:p-8 flex flex-col min-h-[140px] md:min-h-[200px]"
                >
                  <div className="flex items-center justify-between mb-auto">
                    <span className="font-mono text-xs text-ink-light tabular-nums">
                      {step.number}
                    </span>
                    <span className="flex items-center justify-center w-9 h-9 border border-line-strong rounded-full flex-shrink-0 text-ink-soft bg-paper-warm">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-sm md:text-base font-serif text-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-[1.6] text-ink-muted">
                      {step.description}
                    </p>
                    {step.note && (
                      <p className="text-[10px] leading-[1.5] text-ink-light italic mt-2 hidden md:block">
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Selected work */}
      <section id="selected-work" className="py-20 md:py-28 bg-paper">
        <div className="container-tl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Selected Work"
              title="Software built around real problems."
              intro="From shipment visibility and API infrastructure to commerce and enterprise workflows, explore the products and professional experience that shape how we approach software development."
            />
            <Link
              to="/work"
              className="link-underline text-sm font-medium text-ink hover:text-ink-soft transition-colors flex items-center gap-1.5 flex-shrink-0"
            >
              View all work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Prominent projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {prominentProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                variant="prominent"
              />
            ))}
          </div>

          {/* Other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Business problems and capabilities */}
      <section id="capabilities" className="py-20 md:py-28 bg-paper-warm">
        <div className="container-tl">
          <SectionHeading
            eyebrow="Capabilities"
            title="Software shaped around your business."
            intro="Every business has different processes, constraints, and ambitions. We help translate those realities into software that fits the way your business needs to work."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
            {businessCapabilities.map((cap, i) => {
              const related = projects.find(
                (p) => p.slug === cap.relatedSlug
              );
              return (
                <Reveal key={cap.title} delay={i * 80}>
                  <div className="bg-paper-card p-8 md:p-10 h-full flex flex-col">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="font-serif text-lg text-ink-light">
                        {cap.label}
                      </span>
                      <h3 className="text-lg font-medium text-ink">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-[1.65] text-ink-muted pl-8">
                      {cap.description}
                    </p>
                    {related && (
                      <Link
                        to={`/work/${related.slug}`}
                        className="mt-4 pl-8 link-underline text-sm font-medium text-ink-soft hover:text-ink transition-colors"
                      >
                        Related: {related.shortTitle}
                      </Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience in numbers */}
      <section className="py-20 md:py-28 bg-paper">
        <div className="container-tl">
          <SectionHeading
            eyebrow="Experience in numbers"
            title="Experience across products, domains, and systems."
            intro="These figures are drawn directly from the documented projects on this site. Metrics that require external verification — user counts, business outcomes, performance benchmarks — are intentionally omitted until they can be confirmed."
          />

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {metrics
              .filter((m) => m.verified)
              .map((metric, i) => (
                <Reveal key={metric.label} delay={i * 80}>
                  <div className="bg-paper-card p-7 md:p-9 h-full">
                    <p className="font-serif text-4xl md:text-5xl font-light text-ink leading-none mb-4">
                      {metric.value}
                    </p>
                    <p className="text-sm font-medium text-ink-soft mb-2">
                      {metric.label}
                    </p>
                    <p className="text-xs leading-[1.6] text-ink-muted">
                      {metric.explanation}
                    </p>
                  </div>
                </Reveal>
              ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-6 text-xs text-ink-light italic leading-[1.6]">
              Only verified metrics are displayed. User counts, revenue impact,
              and adoption figures are hidden until confirmed. To update these
              figures, edit the metrics data source in the project data file.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why work with TryLabs */}
      <section id="about" className="py-20 md:py-28 bg-paper-warm">
        <div className="container-tl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Why TryLabs"
                title="Practical thinking. Thoughtful engineering."
                intro="We approach software as a business investment, not just a technical deliverable. That means understanding the problem before building, making considered implementation decisions, and keeping the solution aligned with the people who will use it."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-8">
                {principles.map((p, i) => (
                  <Reveal key={p.title} delay={i * 100}>
                    <div className="flex items-start gap-5 pb-8 last:pb-0 border-b border-line last:border-0">
                      <span className="font-mono text-xs text-ink-light tabular-nums flex-shrink-0 mt-1">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-base font-medium text-ink mb-2">
                          {p.title}
                        </h3>
                        <p className="text-sm leading-[1.65] text-ink-muted max-w-reading">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 bg-paper border-t border-line">
        <div className="container-tl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="label mb-5">Let's talk</p>
              <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-ink">
                Have a business problem software could solve?
              </h2>
              <p className="mt-6 text-lg leading-[1.6] text-ink-muted max-w-xl">
                Let's understand what you need, explore the right approach, and
                work towards a solution built for your business.
              </p>
              <div className="mt-8">
                <Button to="/contact" variant="primary">
                  <span className="flex items-center gap-2">
                    Start a conversation
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
