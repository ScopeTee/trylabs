export type ProjectCategory =
  | 'Logistics & Supply Chain'
  | 'Developer Tools'
  | 'Commerce'
  | 'Social & Community'
  | 'Business Software'
  | 'Enterprise Systems';

export type AttributionType =
  | 'trylabs'
  | 'prior-experience'
  | 'concept';

export type StatusLabel =
  | 'Product Build'
  | 'Professional Experience'
  | 'Pilot'
  | 'Production'
  | 'Implementation';

export interface Capability {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  note?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
  sublabel?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  categoryLabel: string;
  attribution: AttributionType;
  attributionLabel: string;
  statusLabel: StatusLabel;
  headline: string;
  overview: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  prominent?: boolean;
  ctaText: string;
  ctaLink: string;
  coreCapabilities: string[];
  metrics?: ProjectMetric[];
  metricsHeading?: string;
  metricsNote?: string;
  expertise: string;
  attributionNote?: string;
  relatedSlugs: string[];
}

export const projects: Project[] = [
  {
    slug: 'logistics-visibility',
    title: 'Shipment Tracking Platform',
    shortTitle: 'Shipment Tracking',
    category: 'Logistics & Supply Chain',
    categoryLabel: 'Logistics & Supply Chain',
    attribution: 'prior-experience',
    attributionLabel: 'Professional Experience',
    statusLabel: 'Professional Experience',
    headline: 'Shipment visibility beyond the booking confirmation.',
    overview:
      'Freight teams and their customers need more than a booking reference. They need to know where a shipment is, what has changed and when action may be required. This shipment tracking platform brought ocean and air freight visibility into one experience, supporting shipment lookup, status updates and notifications that help users stay informed throughout the journey.',
    summary:
      'A shipment tracking platform providing visibility across ocean and air freight, with shipment lookup, status updates and WhatsApp notifications.',
    description:
      'A multimodal freight visibility platform that lets businesses track ocean and air shipments, with milestone updates, automated status tracking and customer notifications.',
    image:
      'https://images.pexels.com/photos/12530455/pexels-photo-12530455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'Aerial view of a loaded container ship sailing through open water.',
    imageCaption:
      'Illustrative image — not a screenshot of the actual product.',
    prominent: true,
    ctaText: 'Discuss your logistics software project',
    ctaLink: '/contact',
    coreCapabilities: [
      'Ocean and air shipment tracking',
      'Shipment lookup using container numbers, bills of lading and air waybills',
      'Automated shipment status updates through tracking integrations',
      'WhatsApp notifications to keep users informed of shipment progress',
    ],
    metrics: [
      { value: '104', label: 'Users', sublabel: '49 customer users and 55 guest users' },
      { value: '375', label: 'Shipments tracked', sublabel: 'During the documented historical reporting period' },
      { value: '2', label: 'Transport modes', sublabel: 'Ocean and air' },
      { value: '3', label: 'Shipment lookup identifiers', sublabel: 'Container number, bill of lading and air waybill' },
    ],
    metricsHeading: 'Platform at a glance',
    metricsNote:
      'These figures are historical, drawn from a documented reporting period. They are not current totals or lifetime totals.',
    expertise:
      'Experience translating freight operations into practical software, integrating external tracking services and designing shipment visibility for logistics teams and their customers.',
    attributionNote:
      'Presented as professional experience, not as a project commissioned or delivered by TryLabs. No employer, client, former company or confidential provider is identified.',
    relatedSlugs: ['api-infrastructure', 'erp-implementation'],
  },
  {
    slug: 'api-infrastructure',
    title: 'API Testing & Infrastructure Tool',
    shortTitle: 'API Testing Tool',
    category: 'Developer Tools',
    categoryLabel: 'Developer Tools',
    attribution: 'trylabs',
    attributionLabel: 'Product Build',
    statusLabel: 'Pilot',
    headline: 'Making API testing easier to manage.',
    overview:
      'Developers need a reliable way to test endpoints, inspect responses and troubleshoot integrations without unnecessary friction. This tool supports API testing workflows, helping developers send requests, examine responses and validate how services behave.',
    summary:
      'A developer tool for API request handling, integration testing, debugging and validation — designed to make interconnected systems more reliable.',
    description:
      'A developer tooling product for testing, debugging and validating API integrations, with structured request handling and response inspection.',
    image: '/images/headers/image.png',
    imageAlt: 'A laptop displaying code on a desk in a bright workspace.',
    imageCaption:
      'Illustrative image — not a screenshot of the actual product.',
    prominent: true,
    ctaText: 'Build a connected software solution',
    ctaLink: '/contact',
    coreCapabilities: [
      'Create and execute API requests',
      'Inspect response status, headers and payloads',
      'Organise and repeat test scenarios',
      'Identify integration issues during development',
    ],
    metrics: [
      { value: '12', label: 'Pilot users' },
      { value: '25', label: 'Endpoints' },
      { value: '120', label: 'Test requests', sublabel: 'Test activity, not production traffic' },
      { value: '4', label: 'Test collections' },
    ],
    metricsHeading: 'Product at a glance',
    metricsNote:
      'Pilot and testing figures. Not large-scale production adoption or independently verified business outcomes.',
    expertise:
      'Hands-on understanding of APIs, request-response behaviour, integration workflows and the developer experience required to work with connected systems.',
    relatedSlugs: ['logistics-visibility', 'tax-software'],
  },
  {
    slug: 'fashion-commerce',
    title: 'Fashion E-commerce Platform',
    shortTitle: 'Fashion E-commerce',
    category: 'Commerce',
    categoryLabel: 'Commerce',
    attribution: 'trylabs',
    attributionLabel: 'Product Build',
    statusLabel: 'Production',
    headline: 'Turning product discovery into a purchase journey.',
    overview:
      'A fashion storefront needs to do more than display products. Customers should be able to explore a collection, understand their options and move through the shopping journey with minimal friction. This platform provides a digital shopping experience for browsing fashion products and progressing from product selection towards purchase.',
    summary:
      'A clothing e-commerce platform with product browsing, cart and checkout workflows, built for a fashion retail brand.',
    description:
      'An online store for a fashion brand, featuring product catalogue, cart management and checkout — designed with a clean, editorial visual identity.',
    image: '/images/headers/image copy 2.png',
    imageAlt: 'A hand arranging beige clothing items on a retail rack.',
    imageCaption:
      'Illustrative image — not a screenshot of the actual product.',
    ctaText: 'Discuss your commerce platform',
    ctaLink: '/contact',
    coreCapabilities: [
      'Product catalogue and product detail pages',
      'Collection browsing and product discovery',
      'Shopping cart and checkout journey',
      'Responsive storefront experience across devices',
    ],
    metrics: [
      { value: '85', label: 'Products' },
      { value: '30', label: 'Customer accounts' },
      { value: '18', label: 'Orders' },
      { value: '3', label: 'Product categories' },
    ],
    metricsHeading: 'Store at a glance',
    metricsNote:
      'Figures from the current application data. Orders are not implied to be paid or fulfilled unless confirmed by the actual system.',
    expertise:
      'Experience building customer-facing commerce journeys, structuring product information and connecting browsing, cart and checkout workflows into one coherent experience.',
    relatedSlugs: ['social-discovery', 'api-infrastructure'],
  },
  {
    slug: 'social-discovery',
    title: 'Social Discovery Platform',
    shortTitle: 'Social Discovery',
    category: 'Social & Community',
    categoryLabel: 'Social & Community',
    attribution: 'trylabs',
    attributionLabel: 'Product Build',
    statusLabel: 'Production',
    headline: 'Helping people discover connections and make plans.',
    overview:
      'Online discovery is more useful when it helps people move from finding others to meaningful interactions and shared experiences. This platform explores social discovery through user profiles, discovery and interaction flows designed to help people connect around common interests.',
    summary:
      'A social application for discovering and meeting people with shared interests, with profiles, discovery and meetup workflows.',
    description:
      'A social discovery platform that helps people find and connect with others based on shared interests, with profiles, matching and meetup coordination.',
    image: '/images/headers/image copy.png',
    imageAlt: 'A diverse group of people sitting together outdoors on a sunny day.',
    imageCaption:
      'Illustrative image — not a screenshot of the actual product.',
    ctaText: 'Explore your product idea with us',
    ctaLink: '/contact',
    coreCapabilities: [
      'User profiles and identity-based discovery',
      'Browsing and discovering other users',
      'Interaction flows that support connection',
      'Meetup-oriented experiences, where supported by the existing product',
    ],
    metrics: [
      { value: '300+', label: 'User profiles' },
      { value: '200+', label: 'Connection requests' },
      { value: '100+', label: 'Mutual connections' },
      { value: '50+', label: 'Meetup activities' },
    ],
    metricsHeading: 'Community at a glance',
    metricsNote:
      'Presentation figures based on product scope. Not independently verified production statistics. Meetup features are only claimed where supported by the actual product.',
    expertise:
      'Experience designing profile-driven products, multi-step user journeys and interaction patterns that underpin social applications.',
    relatedSlugs: ['fashion-commerce', 'tax-software'],
  },
  {
    slug: 'tax-software',
    title: 'Tax Management Software',
    shortTitle: 'Tax Software',
    category: 'Business Software',
    categoryLabel: 'Business Software',
    attribution: 'trylabs',
    attributionLabel: 'Product Build',
    statusLabel: 'Production',
    headline: 'Bringing tax-related workflows into a structured digital experience.',
    overview:
      'Tax processes involve information gathering, calculations, records and clear visibility into what needs attention. Poorly structured workflows can make these processes harder to manage and review. This software digitises defined tax-related workflows, helping users work with relevant information through a more organised interface.',
    summary:
      'A tax management platform handling calculations, reporting and structured workflows for tax-related business processes.',
    description:
      'A business software platform for tax preparation, with structured workflows for calculations, reporting and organised records.',
    image:
      'https://images.pexels.com/photos/17065743/pexels-photo-17065743.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'A calculator with glasses and folders on an office desk.',
    imageCaption:
      'Illustrative image — not a screenshot of the actual product.',
    ctaText: 'Discuss your business software needs',
    ctaLink: '/contact',
    coreCapabilities: [
      'Structured tax information capture',
      'Tax-related calculations and data handling',
      'Organised records and workflow progression',
      'Clear presentation of relevant information for review',
    ],
    metrics: undefined,
    expertise:
      'Experience translating rule-driven business processes into software, handling structured data and building interfaces for workflows where accuracy and clarity matter.',
    attributionNote:
      'Do not claim regulatory compliance, tax accuracy guarantees or successful filings unless supported by the actual product.',
    relatedSlugs: ['api-infrastructure', 'erp-implementation'],
  },
  {
    slug: 'erp-implementation',
    title: 'Procurement & ERP Implementation',
    shortTitle: 'Procurement & ERP',
    category: 'Enterprise Systems',
    categoryLabel: 'Enterprise Systems',
    attribution: 'prior-experience',
    attributionLabel: 'Professional Experience',
    statusLabel: 'Implementation',
    headline: 'Connecting procurement processes with day-to-day operations.',
    overview:
      'Procurement software is valuable when purchasing workflows, approvals, suppliers and records work together instead of being managed across disconnected processes. This implementation experience involved supporting the setup of procurement workflows within a business environment, with attention to process requirements, system configuration and operational adoption.',
    summary:
      'Experience from a procurement and ERP implementation involving workflow configuration, supplier setup and process validation — undertaken during previous employment.',
    description:
      'Professional experience with a procurement and ERP platform implementation, covering workflow configuration, supplier management and operational process standardisation.',
    image:
      'https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt:
      'A person walking through a large industrial warehouse with stacked shelves.',
    imageCaption:
      'Illustrative image — not a screenshot of the actual product.',
    ctaText: 'Discuss your ERP implementation',
    ctaLink: '/contact',
    coreCapabilities: [
      'Procurement process and workflow configuration',
      'Supplier and purchasing workflow setup',
      'Requirements alignment with business operations',
      'Implementation coordination and process validation',
    ],
    metrics: undefined,
    expertise:
      'Experience working through the practical realities of enterprise software implementation: understanding how a business operates, translating requirements into system workflows and validating that the configured solution supports the intended process.',
    attributionNote:
      'Presented as professional experience. No employer, client, procurement product or third-party ERP provider is named. TryLabs does not independently claim delivery of the entire implementation.',
    relatedSlugs: ['logistics-visibility', 'tax-software'],
  },
];

export const capabilities: Capability[] = [
  {
    title: 'Custom software development',
    description:
      'End-to-end product development — from architecture to deployment — for software that is built to serve your specific business, not a generic use case.',
  },
  {
    title: 'Web application development',
    description:
      'Customer-facing and internal web applications, built with modern frontend and backend practices for performance, reliability, and maintainability.',
  },
  {
    title: 'API and systems integration',
    description:
      'Connecting your product to external services, carrier systems, payment providers, and internal tools — with the testing and error handling that integrations demand.',
  },
  {
    title: 'Product design and prototyping',
    description:
      'Turning ambiguous requirements into tangible prototypes, so you can see and evaluate the product before committing to a full build.',
  },
  {
    title: 'Business workflow automation',
    description:
      'Replacing manual, repetitive processes with software that handles them reliably — freeing your team to focus on decisions that actually need human judgment.',
  },
  {
    title: 'Technical discovery and solution architecture',
    description:
      'Understanding the problem before writing code. We map the constraints, evaluate options, and design a system architecture that fits your reality.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Design',
    description:
      'Understand the problem, define requirements, and shape the right solution.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'Translate requirements into working software through development and iteration.',
  },
  {
    number: '03',
    title: 'Deploy',
    description:
      'Test, release, and validate the product in its intended environment.',
  },
  {
    number: '04',
    title: 'Support',
    description:
      'Maintain, troubleshoot, and improve the product through an agreed support arrangement.',
    note: 'Support arrangements are project-specific. Not every engagement includes ongoing support — actual terms determine what is provided.',
  },
];

export interface Metric {
  value: string;
  label: string;
  explanation: string;
  source: string;
  verified: boolean;
}

export const metrics: Metric[] = [
  {
    value: '6',
    label: 'Products showcased',
    explanation:
      'Products and implementation experiences documented across the portfolio, including TryLabs-built work and prior professional experience.',
    source: 'Portfolio inventory — count of projects listed on this site.',
    verified: true,
  },
  {
    value: '5',
    label: 'Product domains represented',
    explanation:
      'Distinct domains covered: logistics, developer tools, commerce, social, business software, and enterprise systems.',
    source: 'Portfolio category count.',
    verified: true,
  },
  {
    value: '2',
    label: 'Prior professional experiences',
    explanation:
      'Case studies based on work performed by current team members in previous roles — clearly labelled and attributed.',
    source: 'Projects with attribution type "prior-experience".',
    verified: true,
  },
  {
    value: '4',
    label: 'Products built by TryLabs',
    explanation:
      'Products built directly by the current TryLabs team, across commerce, developer tooling, social, and business software.',
    source: 'Projects with attribution type "trylabs".',
    verified: true,
  },
];

export const projectFilters: { label: string; value: string }[] = [
  { label: 'All work', value: 'all' },
  { label: 'Logistics & Supply Chain', value: 'Logistics & Supply Chain' },
  { label: 'Developer Tools', value: 'Developer Tools' },
  { label: 'Commerce', value: 'Commerce' },
  { label: 'Social & Community', value: 'Social & Community' },
  { label: 'Business Software', value: 'Business Software' },
  { label: 'Enterprise Systems', value: 'Enterprise Systems' },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsBySlugs(slugs: string[]): Project[] {
  return slugs
    .map((slug) => getProject(slug))
    .filter((p): p is Project => p !== undefined);
}
