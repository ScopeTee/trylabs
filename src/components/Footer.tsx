import { Link } from '@/lib/router';

const footerNav = [
  { label: 'Work', to: '/work' },
  { label: 'Capabilities', to: '/#capabilities' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/contact' },
];

const caseStudies = [
  { label: 'Shipment Tracking Platform', to: '/work/logistics-visibility' },
  { label: 'API Testing & Infrastructure', to: '/work/api-infrastructure' },
  { label: 'Fashion E-commerce', to: '/work/fashion-commerce' },
  { label: 'Social Discovery Platform', to: '/work/social-discovery' },
  { label: 'Tax Management Software', to: '/work/tax-software' },
  { label: 'Procurement & ERP', to: '/work/erp-implementation' },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-warm mt-auto">
      <div className="container-tl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link
              to="/"
              className="flex items-center gap-2.5 font-serif text-lg tracking-tight text-ink"
            >
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 bg-ink rounded-sm" />
                <span className="inline-block w-2 h-2 bg-ink rounded-sm" />
                <span className="inline-block w-2 h-2 bg-ink rounded-sm" />
              </span>
              <span>TryLabs</span>
            </Link>
            <p className="mt-4 text-sm leading-[1.7] text-ink-muted max-w-xs">
              TryLabs partners with businesses to design, build, and deliver
              custom digital products — from customer-facing applications to
              operational platforms and connected systems.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <p className="label mb-5">Navigation</p>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline text-sm text-ink-soft hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Selected Work */}
          <div className="md:col-span-3">
            <p className="label mb-5">Selected Work</p>
            <ul className="space-y-3">
              {caseStudies.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline text-sm text-ink-soft hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="label mb-5">Contact</p>
            <p className="text-sm text-ink-muted leading-[1.7]">
              Contact details are being finalized. In the meantime, use the
              project inquiry form to reach us.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center text-sm font-medium text-ink hover:text-ink-soft transition-colors link-underline"
            >
              Start a project
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ink-light">
            &copy; {new Date().getFullYear()} TryLabs Corporation. All rights
            reserved.
          </p>
          <p className="text-xs text-ink-light">
            Built with attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}
