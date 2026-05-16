import Link from 'next/link';
import Layout from '@/components/Layout';
import Icon from '@/components/Icon';
import { services, findService } from '@/data/services';

export async function getStaticPaths() {
  return {
    paths: services.map(s => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const service = findService(params.slug);
  if (!service) return { notFound: true };
  const related = (service.related || [])
    .map(r => findService(r))
    .filter(Boolean);
  return { props: { service, related } };
}

export default function ServiceDetail({ service, related }) {
  return (
    <Layout
      title={service.title}
      description={service.short}
    >
      <section className="page-hero">
        <div className="container">
          <div className="crumb">
            <Link href="/services" style={{ color: 'var(--gold-bright)', textDecoration: 'none' }}>Services</Link>
            &nbsp;/&nbsp;{service.title}
          </div>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
        </div>
      </section>

      <section>
        <div className="container service-detail">
          <div className="body">
            <h2>What we do</h2>
            <p>{service.intro}</p>
            <ul>
              {service.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>

            <h2>How we work</h2>
            <p>
              Each engagement begins with a quick scoping call to understand your business, the matter at hand and the timelines you&apos;re working against. We then propose a clear plan with a defined deliverable and turnaround — no open-ended retainers, no surprises.
            </p>
            <p>
              For litigation matters, we handle the full cycle — replies to notices, hearings, appeals and onward escalation up to the Supreme Court if required.
            </p>

            <h2>Get started</h2>
            <p>
              Reach us at <a href="mailto:info@wisdomconsultancy.org" style={{ color: 'var(--navy)', fontWeight: 600 }}>info@wisdomconsultancy.org</a> or call <a href="tel:+918920954252" style={{ color: 'var(--navy)', fontWeight: 600 }}>+91 8920 954252</a>, or use the form on our <Link href="/contact" style={{ color: 'var(--navy)', fontWeight: 600 }}>Contact</Link> page.
            </p>

            <div style={{ marginTop: 24 }}>
              <Link href="/contact" className="btn-outline">
                Talk to a {service.title} specialist <Icon name="arrow" size={16} stroke={2.5} />
              </Link>
            </div>
          </div>

          <aside className="service-aside">
            <h4>Related practices</h4>
            <ul>
              {related.map(r => (
                <li key={r.slug}><Link href={`/services/${r.slug}`}>→ {r.title}</Link></li>
              ))}
            </ul>
            <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid var(--border)' }} />
            <h4>Quick contact</h4>
            <ul>
              <li><a href="tel:+918920954252">📞 +91 8920 954252</a></li>
              <li><a href="mailto:info@wisdomconsultancy.org">✉ info@wisdomconsultancy.org</a></li>
            </ul>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
