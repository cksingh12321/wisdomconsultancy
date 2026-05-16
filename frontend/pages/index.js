import Link from 'next/link';
import Layout from '@/components/Layout';
import Icon from '@/components/Icon';
import PortIllustration from '@/components/PortIllustration';
import { services } from '@/data/services';

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <span className="hero-tag">Trusted EXIM &amp; Tax Advisory · India</span>
          <h1>Navigating <em>Customs, DGFT &amp; GST</em> for India&apos;s Export-Import Trade.</h1>
          <p>Specialised consultancy on Customs, GST, Income Tax, DGFT, Maritime, Shipping, Corporate Law and Export-Import — with active presence at KASEZ Kandla, Mundra SEZ (Adani Port) and Tuna Port.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Book a Consultation <Icon name="arrow" size={16} stroke={2.5} />
            </Link>
            <Link href="/services" className="btn-ghost">Explore Services</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>20+</strong><span>Years of Practice</span></div>
            <div className="stat"><strong>3</strong><span>Major Ports &amp; SEZs</span></div>
            <div className="stat"><strong>500+</strong><span>EXIM Clients Served</span></div>
            <div className="stat"><strong>9</strong><span>Practice Areas</span></div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-ivory">
        <div className="container about-grid">
          <div className="about-visual">
            <PortIllustration />
            <div className="about-badge">
              <strong>Active at 3 Major Locations</strong>
              <span>KASEZ Kandla · Mundra SEZ (Adani Port) · Tuna Port</span>
            </div>
          </div>
          <div className="about-text">
            <span className="eyebrow">About the Firm</span>
            <h2>Strategic legal &amp; business advisory rooted in India&apos;s trade corridors.</h2>
            <p>Wisdom Business &amp; Legal Consultancy is one of India&apos;s most dedicated advisory firms, helping exporters, importers, shipping lines and corporates navigate Customs, GST, DGFT and Income Tax with confidence.</p>
            <p>Led by an MBA from the Indian Institute of Information Technology and Management, our practice combines deep regulatory insight with on-the-ground experience at India&apos;s busiest ports.</p>
            <ul className="about-features">
              <li><span className="check">✓</span><div>Active consultants at KASEZ Kandla, Mundra SEZ and Tuna Port</div></li>
              <li><span className="check">✓</span><div>Representation in Search, Survey, Raid, Inspection &amp; Litigation</div></li>
              <li><span className="check">✓</span><div>Appeals up to Tribunal, High Court and Supreme Court</div></li>
              <li><span className="check">✓</span><div>End-to-end EXIM advisory under one trusted roof</div></li>
            </ul>
            <div style={{ marginTop: 30 }}>
              <Link href="/about" className="btn-outline">More about us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Services</span>
            <h2>Complete advisory across India&apos;s trade, tax &amp; corporate laws.</h2>
            <p>From clearing a consignment at Mundra to defending a matter at the Supreme Court — we cover the full lifecycle of your business.</p>
          </div>
          <div className="services-grid">
            {services.slice(0, 6).map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="service-card">
                <div className="service-icon"><Icon name={s.icon} size={26} /></div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <div className="arrow">Learn more →</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/services" className="btn-outline">View all 9 services</Link>
          </div>
        </div>
      </section>

      {/* Sectors strip */}
      <section className="sectors" id="sectors">
        <div className="container sectors-grid">
          <div className="sectors-text">
            <span className="eyebrow" style={{ color: 'var(--gold-bright)' }}>Where We Operate</span>
            <h2>On-ground at India&apos;s busiest trade gateways.</h2>
            <p>Direct presence and active practice at the SEZs and ports that drive the country&apos;s western-coast EXIM volumes.</p>
          </div>
          <div className="sectors-list">
            <div className="sector-item"><span className="sector-num">01</span><div><strong>KASEZ — Kandla SEZ</strong><span>Kandla, Gandhidham (Gujarat)</span></div></div>
            <div className="sector-item"><span className="sector-num">02</span><div><strong>Mundra SEZ</strong><span>Adani Port, Mundra (Gujarat)</span></div></div>
            <div className="sector-item"><span className="sector-num">03</span><div><strong>Tuna Port</strong><span>Kandla Creek (Gujarat)</span></div></div>
            <div className="sector-item"><span className="sector-num">04</span><div><strong>Pan-India Tribunals</strong><span>Tribunal · High Court · Supreme Court</span></div></div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-ivory">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Wisdom</span>
            <h2>The advisor of choice for serious traders.</h2>
            <p>Quality consultancy delivered in the shortest time — by professionals who have lived the work, not just studied it.</p>
          </div>
          <div className="why-grid">
            <div className="why-card"><span className="num">01</span><h4>Specialist Practice</h4><p>Hyper-focused on Customs, GST, DGFT and EXIM — not a generalist firm spreading thin.</p></div>
            <div className="why-card"><span className="num">02</span><h4>Speed of Delivery</h4><p>Time-sensitive trade matters resolved in the shortest possible window — without cutting corners.</p></div>
            <div className="why-card"><span className="num">03</span><h4>Litigation Strength</h4><p>Hands-on experience defending matters from departmental notices to the Supreme Court.</p></div>
            <div className="why-card"><span className="num">04</span><h4>Port-Level Reach</h4><p>Real presence at SEZs and ports — faster clearances, fewer surprises, smoother audits.</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="container">
          <h3>Have a customs notice, GST refund or DGFT licence to figure out?</h3>
          <p>Tell us about it — we usually reply within one business day.</p>
          <Link href="/contact" className="btn-primary">Book a Consultation <Icon name="arrow" size={16} stroke={2.5} /></Link>
        </div>
      </section>
    </Layout>
  );
}
