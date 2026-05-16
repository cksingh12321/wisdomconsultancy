import Link from 'next/link';
import Layout from '@/components/Layout';

const locations = [
  {
    num: '01',
    name: 'KASEZ — Kandla SEZ',
    place: 'Kandla, Gandhidham (Gujarat)',
    body: 'India\'s oldest operating SEZ and a high-volume hub for chemicals, textiles, gems & jewellery and engineering exports. We provide on-ground customs, SEZ and DGFT support to unit holders.'
  },
  {
    num: '02',
    name: 'Mundra SEZ (Adani Port)',
    place: 'Mundra, Kutch (Gujarat)',
    body: 'India\'s largest commercial port and a multi-product SEZ. We help shipping lines, CHAs and importers / exporters with customs, GST, refunds and operational compliance.'
  },
  {
    num: '03',
    name: 'Tuna Port',
    place: 'Kandla Creek (Gujarat)',
    body: 'A satellite port handling bulk cargo and increasingly containerised traffic. Our team advises on port-level compliance and inter-modal trade structuring.'
  },
  {
    num: '04',
    name: 'Pan-India Tribunals',
    place: 'Tribunal · High Court · Supreme Court',
    body: 'For litigation and appeals, we appear and brief counsel across CESTAT, GSTAT, ITAT, High Courts and the Supreme Court of India.'
  }
];

export default function Sectors() {
  return (
    <Layout title="Sectors & Locations" description="Wisdom Business & Legal Consultancy operates at KASEZ Kandla, Mundra SEZ (Adani Port), Tuna Port and across pan-India tribunals.">
      <section className="page-hero">
        <div className="container">
          <div className="crumb">Sectors &amp; Locations</div>
          <h1>On-ground at India&apos;s busiest trade gateways.</h1>
          <p>Direct presence and active practice at the SEZs, ports and tribunals that drive India&apos;s western-coast EXIM volumes — and the disputes that come with them.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="services-grid">
            {locations.map(loc => (
              <div key={loc.num} className="service-card" style={{ cursor: 'default' }}>
                <div className="service-icon" style={{ background: 'linear-gradient(135deg, rgba(11,37,69,0.08), rgba(201,169,97,0.18))' }}>
                  <strong style={{ fontFamily: 'Playfair Display, serif', color: 'var(--navy)' }}>{loc.num}</strong>
                </div>
                <h3>{loc.name}</h3>
                <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 13, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>{loc.place}</p>
                <p>{loc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h3>Operating at one of these locations?</h3>
          <p>We can be on the ground for your matter — quickly.</p>
          <Link href="/contact" className="btn-primary">Talk to Us</Link>
        </div>
      </section>
    </Layout>
  );
}
