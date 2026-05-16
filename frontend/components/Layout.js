import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  const fullTitle = title
    ? `${title} — Wisdom Business & Legal Consultancy`
    : 'Wisdom Business & Legal Consultancy — Customs, DGFT, GST & Export-Import Advisory';
  const desc = description
    || 'Wisdom Business & Legal Consultancy provides expert advisory on Customs, GST, DGFT, Income Tax, Maritime, Shipping, Corporate Law and Export-Import — active at KASEZ Kandla, Mundra SEZ and Tuna Port.';
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
