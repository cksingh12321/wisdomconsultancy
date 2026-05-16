import Link from 'next/link';
import Layout from '@/components/Layout';
import Icon from '@/components/Icon';
import { services } from '@/data/services';

export default function ServicesIndex() {
  return (
    <Layout title="Services" description="Customs, GST, DGFT, EXIM, Maritime, Income Tax, Corporate Law, Financial Management and Litigation — the full Wisdom Business & Legal Consultancy practice.">
      <section className="page-hero">
        <div className="container">
          <div className="crumb">Our Services</div>
          <h1>Complete advisory across India&apos;s trade, tax &amp; corporate laws.</h1>
          <p>Nine specialist practice areas built around the realities of running an Indian export-import business — from day-one clearance to final-tier litigation.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="services-grid">
            {services.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="service-card">
                <div className="service-icon"><Icon name={s.icon} size={26} /></div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <div className="arrow">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h3>Not sure which service fits your matter?</h3>
          <p>Tell us a little about it — we&apos;ll point you to the right desk.</p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </Layout>
  );
}
