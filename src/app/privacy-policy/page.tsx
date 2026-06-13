import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Saarthi Organics',
  description: 'Understand how Saarthi Organics handles, stores, and protects corporate procurement details, contact information, and transit documentation records.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_privacy.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Legal Information</span>
          <h1 className="subpage-hero-title">Privacy Policy</h1>
          <p className="subpage-hero-desc">
            Learn how Saarthi Organics handles, stores, and protects corporate procurement details, contact information, and transit documentation records.
          </p>
        </div>
      </div>

      <section style={{ maxWidth: '850px', margin: '0 auto', padding: '60px 24px 100px 24px' }}>
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '8px',
          padding: '40px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          lineHeight: 1.8
        }}>
          
          <div style={{ marginBottom: '36px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Last Updated: June 12, 2026</span>
          </div>

          <h2 style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--accent-gold)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
            1. Information We Collect
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            We collect company information, contact details, volume specifications, and delivery coordinates submitted through our RFQ forms, emails, and direct phone communications. This data is processed solely to verify sourcing feasibility, organize sample dispatches, and calculate logistics parameters for your transport tankers.
          </p>

          <h2 style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--accent-gold)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
            2. Use of Sourcing & Corporate Information
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Your corporate procurement details, volume requirements, and chemical specifications are kept strictly confidential. We do not sell, distribute, or share this data with third-party advertising companies. Sourcing coordinates are only shared with our logistics division and sugarcane refinery terminals to organize tanker dispatches and generate transit permits.
          </p>

          <h2 style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--accent-gold)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
            3. Document Safety & GST Auditing
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            All tax invoices, weighment slips, e-way bills, and any requested Certificate of Analysis (COA) records are stored securely in our databases to comply with standard corporate taxation, audit procedures, and regulatory requirements under the GST system of India.
          </p>

          <h2 style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--accent-gold)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
            4. Contact Sourcing Desk
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            For queries relating to corporate data compliance, audit record requests, or updates to your procurement contact details, please contact us at: <a href="mailto:contact@saarthiorganics.com" style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}><strong>contact@saarthiorganics.com</strong></a>.
          </p>

          <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '40px', paddingTop: '24px', textAlign: 'center' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} className="breadcrumb-link">
              &larr; Return to Sourcing Desk Homepage
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
