import { useEffect } from 'react';
import { useRouter, matchRoute } from '@/lib/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { WorkPage } from '@/pages/WorkPage';
import { CaseStudyPage } from '@/pages/CaseStudyPage';
import { ContactPage } from '@/pages/ContactPage';

function NotFoundPage() {
  return (
    <div className="pt-40 pb-20 min-h-screen bg-paper flex items-center justify-center">
      <div className="container-tl text-center">
        <p className="label mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-light text-ink mb-4">
          Page not found
        </h1>
        <p className="text-ink-muted mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition-colors"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}

function Routes() {
  const { path } = useRouter();

  // Scroll to top on route change (handled by navigate, but as fallback for direct loads)
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [path]);

  // /work/:slug
  const caseStudyMatch = matchRoute('/work/:slug', path);
  if (caseStudyMatch) {
    return <CaseStudyPage slug={caseStudyMatch.slug} />;
  }

  switch (path) {
    case '/':
      return <HomePage />;
    case '/work':
      return <WorkPage />;
    case '/contact':
      return <ContactPage />;
    default:
      return <NotFoundPage />;
  }
}

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Navbar />
      <main className="flex-1">
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
