import Link from 'next/link';
import Layout from '@/components/Layout';
import PortIllustration from '@/components/PortIllustration';

export default function About() {
  return (
    <Layout title="About" description="About Wisdom Business & Legal Consultancy — India's specialist firm for Customs, GST, DGFT and EXIM advisory.">
      <section className="page-hero">
        <div className="container">
          <div className="crumb">About the Firm</div>
          <h1>Strategic legal &amp; business advisory rooted in India&apos;s trade corridors.</h1>
          <p>We are one of India&apos;s most dedicated business and legal consultancy firms — built around exporters, importers, shipping lines and corporates who need trade-savvy advice that actually moves the needle.</p>
        </div>
      </section>

      <section>
        <div className="container about-grid">
          <div className="about-visual">
            <PortIllustration />
            <div className="about-badge">
              <strong>Built at the Ports</strong>
              <span>KASEZ Kandla · Mundra SEZ · Tuna Port</span>
            </div>
          </div>
          <div className="about-text">
            <span className="eyebrow">Our Story</span>
            <h2>Decades at the intersection of trade, tax and law.</h2>
            <p>Wisdom Business &amp; Legal Consultancy was founded to give Indian exporters and importers a single trusted partner across Customs, GST, DGFT, Income Tax and Corporate Law — the disciplines that determine whether a trade is profitable or painful.</p>
            <p>Our Principal Consultant is an MBA from the Indian Institute of Information Technology and Management, with deep experience advising at India&apos;s busiest SEZs and ports.</p>
            <p>We combine specialist domain knowledge with a relentless focus on turnaround time. Our clients tell us we deliver world-class consultancy in the shortest possible period — which is exactly the standard we hold ourselves to.</p>
            <ul className="about-features">
              <li><span className="check">✓</span><div>Active consultants at KASEZ, Mundra SEZ and Tuna Port</div></li>
              <li><span className="check">✓</span><div>Representation across Tribunal, High Court and Supreme Court</div></li>
              <li><span className="check">✓</span><div>End-to-end EXIM advisory under one trusted roof</div></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Values</span>
            <h2>What we hold ourselves to.</h2>
          </div>
          <div className="why-grid">
            <div className="why-card"><span className="num">01</span><h4>Quality First</h4><p>World-class consultancy delivered by a team of seasoned professionals — never outsourced, never compromised.</p></div>
            <div className="why-card"><span className="num">02</span><h4>Speed</h4><p>Trade-time is money. We are organised to deliver in the shortest period your matter allows.</p></div>
            <div className="why-card"><span className="num">03</span><h4>Integrity</h4><p>Advice you can stand behind — even when the cleaner answer is harder to deliver.</p></div>
            <div className="why-card"><span className="num">04</span><h4>Partnership</h4><p>We treat every engagement as a long-term partnership, not a transaction.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h3>Let&apos;s talk about your business.</h3>
          <p>Customs, GST, DGFT or a notice from the department — we&apos;ll listen first.</p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </Layout>
  );
}
