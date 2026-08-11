const services = [
  {
    heading: 'AI Code Extraction & Frontend Quick-Fix',
    body: 'Export clean front-end code from Lovable, Bolt.new, or Webflow. Fix UI rendering issues, CSS breakages, and broken links. Deploy to Vercel, Netlify, or Cloudflare with custom DNS configuration. Starting at $200.',
  },
  {
    heading: 'Shopify Email & Notification Engine',
    body: 'Fix broken layout logic in transactional email templates. Patch dynamic Liquid variables and syntax errors. Optimize marketing email templates for inbox deliverability. Starting at $600.',
  },
  {
    heading: 'DNS, SPF, DKIM & Deliverability Setup',
    body: 'Resolve MX, TXT, SPF, and DKIM configuration failures. Eliminate email spam flagging and domain blacklisting. Repair domain mapping and email routing issues. Starting at $250.',
  },
  {
    heading: 'Core Web Vitals & Speed Overhaul',
    body: 'Maximize LCP, INP, and CLS scores across mobile and desktop. Purge rendering bloat and defer non-critical scripts. Optimize script hydration for measurable performance gains. Starting at $1,500.',
  },
  {
    heading: 'Landing Page Redesign & Engineering',
    body: 'Redesign static pages into high-fidelity responsive interfaces. Integrate full-stack APIs and backend data pipelines. Engineered to engage users and convert visitors into leads. Starting at $3,000.',
  },
  {
    heading: 'Technical GEO & AI Visibility Audit',
    body: 'Audit site structure for AI crawler compatibility. Inject optimized JSON-LD graph schema. Ensure ChatGPT Search and Perplexity crawl, cite, and recommend your site. Starting at $2,500.',
  },
  {
    heading: 'Contact Form & Webhook Debugging',
    body: 'Debug client-side input validation and form logic. Fix broken Webhook routing pipelines. Restore secure lead-capture form deliveries. Starting at $150.',
  },
];

export default function AIContentLayer() {
  return (
    <article
      aria-label="Majestik Magik Services Overview"
      className="sr-only"
    >
      <h2>Web Engineering & AI Optimization Services by Majestik Magik</h2>
      <p>
        Majestik Magik delivers high-impact web engineering, Core Web Vitals optimization, and AI
        visibility services for founders and small-to-mid size businesses. On-demand micro-services
        are prioritized and shipped within a 24–72 hour window.
      </p>

      <h2>On-Demand Performance Tuning Services</h2>
      <p>
        Each service below is a fixed-scope engagement with a defined deliverable, timeline, and
        entry price. Services are booked directly via Stripe checkout.
      </p>

      {services.map((s) => (
        <section key={s.heading}>
          <h3>{s.heading}</h3>
          <p>{s.body}</p>
        </section>
      ))}

      <h2>About Majestik Magik</h2>
      <p>
        Majestik Magik is a web engineering and AI optimization platform based in Richmond, VA.
        Founded by Jamil Matheny, a lead software engineer and architect, the company specializes
        in Next.js architecture, Generative Engine Optimization (GEO), Core Web Vitals audits,
        and rescuing AI-generated apps built with tools like Lovable, Bolt.new, and Base44.
      </p>

      <h2>What is Generative Engine Optimization (GEO)?</h2>
      <p>
        GEO optimizes your site structure and schema so AI crawlers like ChatGPT Search and
        Perplexity can parse, cite, and recommend your business in real-time AI-driven search
        results.
      </p>

      <h2>How to Get Started</h2>
      <p>
        Email contact@majestikmagik.dev or use the contact section on the homepage. A 15–20 minute
        discovery call is scheduled and a proposal is sent within 2–3 business days.
      </p>
    </article>
  );
}
