import { useState } from 'react';
import { Link, useRouter } from '@/lib/router';
import { useScrollPosition } from '@/lib/hooks';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', to: '/work' },
  { label: 'Capabilities', to: '/#capabilities' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const scrolled = useScrollPosition(10);
  const [open, setOpen] = useState(false);
  const { navigate } = useRouter();

  const handleNav = (to: string) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled || open
          ? 'bg-paper/95 backdrop-blur-md border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-tl flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('/');
          }}
          className="flex items-center gap-2.5 font-serif text-lg tracking-tight text-ink"
          aria-label="TryLabs — home"
        >
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 bg-ink rounded-sm" />
            <span className="inline-block w-2 h-2 bg-ink rounded-sm" />
            <span className="inline-block w-2 h-2 bg-ink rounded-sm" />
          </span>
          <span>TryLabs</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.to);
              }}
              className="link-underline text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/contact');
            }}
            className="inline-flex items-center text-sm font-medium px-5 py-2.5 bg-ink text-paper hover:bg-ink-soft transition-colors duration-300"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-paper border-t border-line">
          <div className="container-tl py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.to);
                }}
                className="block py-3 text-base font-medium text-ink-soft hover:text-ink border-b border-line-soft"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/contact');
              }}
              className="mt-4 inline-flex items-center justify-center text-sm font-medium px-5 py-3 bg-ink text-paper"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
