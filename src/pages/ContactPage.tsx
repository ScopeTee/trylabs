import { useState, type FormEvent } from 'react';
import { useMeta } from '@/lib/hooks';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, AlertCircle, Loader2, Mail } from 'lucide-react';

// ─── Configuration ──────────────────────────────────────────────
// Replace this with the real business email when available.
// Until a real address is set, the mailto fallback stays hidden.
const CONTACT_EMAIL = '';
// ────────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const projectTypes = [
  'Custom software development',
  'Web application',
  'API integration',
  'Product design and prototyping',
  'Business workflow automation',
  'Technical discovery',
  'ERP implementation',
  'Logistics software',
  'Other',
];

const budgetRanges = [
  'Under $10,000',
  '$10,000 — $25,000',
  '$25,000 — $50,000',
  '$50,000 — $100,000',
  '$100,000+',
  'Not sure yet',
];

const timelineOptions = [
  'ASAP — within 1 month',
  '1 — 3 months',
  '3 — 6 months',
  '6+ months',
  'Flexible / exploratory',
];

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  description: '',
  budget: '',
  timeline: '',
};

export function ContactPage() {
  useMeta(
    'Contact — TryLabs',
    'Start a project with TryLabs. Tell us about your business problem and the software you need.'
  );

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [status, setStatus] = useState<'idle' | 'error'>('idle');
  const [submitting, setSubmitting] = useState(false);

  function validate(state: FormState): FormErrors {
    const errs: FormErrors = {};

    if (!state.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!state.email.trim()) {
      errs.email = 'Please enter your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!state.company.trim()) {
      errs.company = 'Please enter your company name.';
    }
    if (!state.projectType) {
      errs.projectType = 'Please select a project type.';
    }
    if (!state.description.trim()) {
      errs.description = 'Please describe your project briefly.';
    } else if (state.description.trim().length < 20) {
      errs.description = 'Please provide at least a sentence or two.';
    }

    return errs;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (touched[field]) {
        setErrors(validate(next));
      }
      return next;
    });
  }

  function handleBlur(field: keyof FormState) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(form));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched({
      name: true,
      email: true,
      company: true,
      projectType: true,
      description: true,
    });

    if (Object.keys(errs).length > 0) {
      setStatus('error');
      return;
    }

    setStatus('idle');
    setSubmitting(true);

    // ─── Submission integration point ─────────────────────────
    // Connect a real form handler here:
    //   - Email service (Resend, SendGrid, Postmark)
    //   - API endpoint
    //   - Supabase table insert
    //
    // Example (Supabase):
    //   const { error } = await supabase.from('inquiries').insert(form);
    //   if (error) { setStatus('error'); setSubmitting(false); return; }
    //
    // Until a handler is connected, we simulate a brief delay
    // and then show a configuration notice — not a fake success.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    // ───────────────────────────────────────────────────────────
  }

  const hasErrors = Object.keys(errors).length > 0;

  // Build a mailto link from current form data (only when email is configured)
  function buildMailto(): string {
    if (!CONTACT_EMAIL) return '';
    const subject = `Project Inquiry — ${form.projectType || 'General'}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Company: ${form.company}`,
      `Project type: ${form.projectType}`,
      form.budget ? `Budget: ${form.budget}` : '',
      form.timeline ? `Timeline: ${form.timeline}` : '',
      '',
      'Project description:',
      form.description,
    ]
      .filter(Boolean)
      .join('\n');
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const mailtoLink = CONTACT_EMAIL ? buildMailto() : '';

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-paper">
        <div className="container-tl">
          <Reveal>
            <p className="label mb-5">Project inquiry</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-ink max-w-3xl">
              Tell us about your project
            </h1>
            <p className="mt-6 text-lg leading-[1.6] text-ink-muted max-w-reading">
              Share a few details about what you're building. We'll get back to
              you to discuss the problem, the scope, and whether we're the right
              fit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-paper">
        <div className="container-tl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                  aria-label="Project inquiry form"
                >
                  {/* Name */}
                  <Field
                    label="Full name"
                    required
                    error={touched.name ? errors.name : undefined}
                  >
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={inputClass(!!(touched.name && errors.name))}
                      placeholder="Your full name"
                      aria-required="true"
                      aria-invalid={!!(touched.name && errors.name)}
                    />
                  </Field>

                  {/* Email + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field
                      label="Work email"
                      required
                      error={touched.email ? errors.email : undefined}
                    >
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          handleChange('email', e.target.value)
                        }
                        onBlur={() => handleBlur('email')}
                        className={inputClass(
                          !!(touched.email && errors.email)
                        )}
                        placeholder="you@company.com"
                        aria-required="true"
                        aria-invalid={!!(touched.email && errors.email)}
                      />
                    </Field>
                    <Field
                      label="Company name"
                      required
                      error={touched.company ? errors.company : undefined}
                    >
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) =>
                          handleChange('company', e.target.value)
                        }
                        onBlur={() => handleBlur('company')}
                        className={inputClass(
                          !!(touched.company && errors.company)
                        )}
                        placeholder="Company name"
                        aria-required="true"
                        aria-invalid={!!(touched.company && errors.company)}
                      />
                    </Field>
                  </div>

                  {/* Project type */}
                  <Field
                    label="Type of project"
                    required
                    error={
                      touched.projectType ? errors.projectType : undefined
                    }
                  >
                    <select
                      value={form.projectType}
                      onChange={(e) =>
                        handleChange('projectType', e.target.value)
                      }
                      onBlur={() => handleBlur('projectType')}
                      className={inputClass(
                        !!(touched.projectType && errors.projectType)
                      )}
                      aria-required="true"
                      aria-invalid={
                        !!(touched.projectType && errors.projectType)
                      }
                    >
                      <option value="">Select a project type…</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {/* Description */}
                  <Field
                    label="Project description"
                    required
                    error={
                      touched.description ? errors.description : undefined
                    }
                  >
                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        handleChange('description', e.target.value)
                      }
                      onBlur={() => handleBlur('description')}
                      rows={5}
                      className={inputClass(
                        !!(touched.description && errors.description)
                      )}
                      placeholder="What problem are you trying to solve? What should the software do? Any context that would help us understand."
                      aria-required="true"
                      aria-invalid={
                        !!(touched.description && errors.description)
                      }
                    />
                  </Field>

                  {/* Budget + Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Budget range" optional>
                      <select
                        value={form.budget}
                        onChange={(e) =>
                          handleChange('budget', e.target.value)
                        }
                        className={inputClass(false)}
                      >
                        <option value="">Select a range (optional)…</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Expected timeline" optional>
                      <select
                        value={form.timeline}
                        onChange={(e) =>
                          handleChange('timeline', e.target.value)
                        }
                        className={inputClass(false)}
                      >
                        <option value="">Select a timeline (optional)…</option>
                        {timelineOptions.map((tl) => (
                          <option key={tl} value={tl}>
                            {tl}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  {/* Error summary */}
                  {status === 'error' && hasErrors && (
                    <div
                      className="flex items-start gap-3 p-4 border border-error/30 bg-error-soft"
                      role="alert"
                    >
                      <AlertCircle className="h-5 w-5 text-error flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-error">
                        Please correct the highlighted fields above and try
                        again.
                      </p>
                    </div>
                  )}

                  {/* Awaiting configuration notice */}
                  <div className="flex items-start gap-3 p-4 border border-line bg-paper-warm">
                    <AlertCircle className="h-5 w-5 text-ink-muted flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-ink-soft font-medium">
                        Form submission awaiting configuration
                      </p>
                      <p className="text-xs text-ink-muted mt-1 leading-[1.6]">
                        This form validates input but does not yet send data
                        anywhere. To enable submissions, connect a form handler
                        (email service, API endpoint, or Supabase table) in the
                        submit handler. Set the contact email constant at the
                        top of this file to enable the email fallback.
                      </p>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition-colors duration-300 ease-smooth focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit inquiry
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="lg:border-l lg:border-line lg:pl-10 space-y-10">
                  <div>
                    <p className="label mb-4">What happens next</p>
                    <ol className="space-y-4">
                      {[
                        'We review your inquiry and assess fit.',
                        'We schedule a call to understand the problem in detail.',
                        'We propose an approach, scope, and timeline.',
                        'If we agree, we start with a discovery phase.',
                      ].map((step, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-[1.65] text-ink-soft"
                        >
                          <span className="font-mono text-xs text-ink-light tabular-nums flex-shrink-0 mt-0.5">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                    <p className="mt-4 text-xs text-ink-light italic">
                      Response times vary based on inquiry volume. We do not
                      guarantee a specific turnaround, but every inquiry is
                      reviewed.
                    </p>
                  </div>

                  {/* Email fallback — only shows when configured */}
                  {mailtoLink ? (
                    <div className="pt-8 border-t border-line">
                      <p className="label mb-4">Prefer email?</p>
                      <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-ink-soft transition-colors link-underline"
                      >
                        <Mail className="h-4 w-4" />
                        {CONTACT_EMAIL}
                      </a>
                      <p className="mt-3 text-xs text-ink-muted leading-[1.6]">
                        Clicking the link will open your email client with the
                        subject and project details pre-filled from the form
                        above.
                      </p>
                    </div>
                  ) : (
                    <div className="pt-8 border-t border-line">
                      <p className="label mb-4">Prefer email?</p>
                      <p className="text-sm text-ink-muted leading-[1.7]">
                        A direct email address will appear here once configured.
                        Until then, please use the form above.
                      </p>
                    </div>
                  )}

                  <div className="pt-8 border-t border-line">
                    <p className="label mb-4">Logistics inquiries</p>
                    <p className="text-sm text-ink-muted leading-[1.7]">
                      If you're exploring a shipment visibility or logistics
                      software project, mention it in the description above.
                      We'll prioritize the conversation.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 bg-paper-card border text-sm text-ink placeholder:text-ink-light transition-colors duration-200 focus:outline-none focus:border-ink ${
    hasError
      ? 'border-error bg-error-soft/30'
      : 'border-line-strong focus:border-ink'
  }`;
}

function Field({
  label,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-ink">{label}</span>
        {required && (
          <span className="text-xs text-ink-light" aria-hidden="true">
            Required
          </span>
        )}
        {optional && (
          <span className="text-xs text-ink-light" aria-hidden="true">
            Optional
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-xs text-error flex items-center gap-1.5">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
