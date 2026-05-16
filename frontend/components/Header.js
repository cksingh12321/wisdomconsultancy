import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Icon from './Icon';

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/sectors', label: 'Sectors' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isActive = (href) => router.pathname === href || router.pathname.startsWith(href + '/');

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <div className="logo-mark">W</div>
          <div className="logo-text">
            <strong>Wisdom</strong>
            <span>Business &amp; Legal Consultancy</span>
          </div>
        </Link>
        <nav>
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={isActive(l.href) ? 'active' : ''} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn-cta" onClick={() => setOpen(false)}>
                Get a Consultation
              </Link>
            </li>
          </ul>
        </nav>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          <Icon name="menu" size={26} />
        </button>
      </div>
    </header>
  );
}
