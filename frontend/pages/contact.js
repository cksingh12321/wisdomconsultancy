import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/Icon';

export default function Contact() {
  return (
    <Layout title="Contact" description="Get in touch with Wisdom Business & Legal Consultancy — Customs, GST, DGFT and EXIM advisory for Indian exporters and importers.">
      <section className="page-hero">
        <div className="container">
          <div className="crumb">Contact Us</div>
          <h1>Let&apos;s solve your next trade challenge.</h1>
          <p>Whether it&apos;s a customs query, a GST refund, a DGFT licence or a notice from the department — write to us and we&apos;ll get back within one business day.</p>
        </div>
      </section>

      <section>
        <div className="container contact-wrap">
          <div className="contact-info">
            <span className="eyebrow">Reach Us Directly</span>
            <h2>Pick the channel that suits you.</h2>
            <p>We work with EXIM businesses across India, but our team is most concentrated in Gujarat — at KASEZ Kandla, Mundra SEZ and Tuna Port.</p>

            <ul className="contact-list">
              <li>
                <span className="contact-icon"><Icon name="phone" size={20} /></span>
                <div><strong>Phone</strong><a href="tel:+918920954252">+91 8920 954252</a></div>
              </li>
              <li>
                <span className="contact-icon"><Icon name="mail" size={20} /></span>
                <div><strong>Email</strong><a href="mailto:info@wisdomconsultancy.org">info@wisdomconsultancy.org</a></div>
              </li>
              <li>
                <span className="contact-icon"><Icon name="pin" size={20} /></span>
                <div>
                  <strong>Delhi Office</strong>
                  <span>157/9, Kishangarh, Vasant Kunj, New Delhi - 110070</span>
                </div>
              </li>
              <li>
                <span className="contact-icon"><Icon name="pin" size={20} /></span>
                <div>
                  <strong>Gujarat Office</strong>
                  <span>Plot No. 48/8, Sector-1, Behind Modern School, Oslo Society, Gandhidham (Kachchh), Gujarat-370201</span>
                </div>
              </li>
              <li>
                <span className="contact-icon"><Icon name="clock" size={20} /></span>
                <div><strong>Hours</strong><span>Mon – Sat · 10:00 AM – 7:00 PM IST</span></div>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}
