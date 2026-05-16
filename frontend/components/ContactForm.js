import { useState } from 'react';
import { services } from '@/data/services';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    service: services[0].title, message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const setField = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', msg: '' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed.');
      setStatus({ state: 'success', msg: 'Thank you. Your enquiry has been received — we will respond within one business day.' });
      setForm({ name: '', company: '', email: '', phone: '', service: services[0].title, message: '' });
    } catch (err) {
      setStatus({ state: 'error', msg: err.message || 'Something went wrong. Please try again or email info@wisdomconsultancy.org.' });
    }
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" required value={form.name} onChange={setField('name')} placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" type="text" value={form.company} onChange={setField('company')} placeholder="Company / firm" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" required value={form.email} onChange={setField('email')} placeholder="you@company.com" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" value={form.phone} onChange={setField('phone')} placeholder="+91" />
        </div>
      </div>
      <div className="form-row">
        <div className="field field-full">
          <label htmlFor="service">Service of Interest</label>
          <select id="service" value={form.service} onChange={setField('service')}>
            {services.map(s => <option key={s.slug}>{s.title}</option>)}
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="field field-full">
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" required value={form.message} onChange={setField('message')} placeholder="Briefly describe your query..." />
        </div>
      </div>
      <button type="submit" className="form-submit" disabled={status.state === 'loading'}>
        {status.state === 'loading' ? 'Sending…' : 'Send Enquiry'}
      </button>
      {status.msg && (
        <p className={`form-msg ${status.state}`}>{status.msg}</p>
      )}
    </form>
  );
}
