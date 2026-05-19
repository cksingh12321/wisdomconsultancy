import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="Wisdom Business & Legal Consultancy — Home">
              <img src="/logo.png" alt="Wisdom Business & Legal Consultancy" className="logo-img logo-img--footer" />
            </Link>
            <p>Trusted advisory on Customs, GST, DGFT, Income Tax, Maritime, Shipping, Corporate Law and Export-Import — with on-ground presence at India&apos;s leading SEZs and ports.</p>
          </div>

          <div className="footer-col">
            <h5>Practice</h5>
            <ul>
              <li><Link href="/services/customs-advisory">Customs</Link></li>
              <li><Link href="/services/gst-indirect-tax">GST &amp; Tax</Link></li>
              <li><Link href="/services/dgft-foreign-trade">DGFT</Link></li>
              <li><Link href="/services/export-import">EXIM Advisory</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Firm</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/sectors">Locations</Link></li>
              <li><Link href="/services">All Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Reach Us</h5>
            <ul>
              <li><a href="tel:+918920954252">+91 8920 954252</a></li>
              <li><a href="mailto:info@wisdomconsultancy.org">info@wisdomconsultancy.org</a></li>
              <li style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>
                Delhi: 157/9, Kishangarh, Vasant Kunj, New Delhi - 110070
              </li>
              <li style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.5 }}>
                Gujarat: Plot No. 48/8, Sector-1, Oslo Society, Gandhidham (Kachchh) - 370201
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Wisdom Business &amp; Legal Consultancy. All rights reserved.</span>
          <span>Built for excellence in EXIM &amp; tax advisory.</span>
        </div>
      </div>
    </footer>
  );
}
