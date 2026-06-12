import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Saarthi Organics',
  description: 'Review the standard commercial procurement terms, weighment procedures, and transit dispatch responsibilities of Saarthi Organics.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/terms-and-conditions',
  },
};

export default function TermsAndConditions() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Legal Information</span>
          <h1 className="subpage-hero-title">Terms & Conditions</h1>
          <p className="subpage-hero-desc">
            Review the standard commercial procurement terms, weighment procedures, and transit dispatch responsibilities of Saarthi Organics.
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
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>Effective Date: June 12, 2026</span>
          </div>

          <h2 style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--accent-gold)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
            1. Sourcing & Dispatch Commitments
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Quotations are formulated based on seasonal sugar refiner parameters, bulk transit distances, and delivery quantities. Standard dispatches require a formal corporate Purchase Order (PO). Sourcing contracts secure specific monthly Metric Tons (MT) allocations which are guaranteed through our mill relationships during the crushing off-season (May to October).
          </p>

          <h2 style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--accent-gold)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
            2. Weighment & Cargo Verification
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            The net weight of molasses cargo is determined at verified refinery terminal weighbridges and logged on our tax invoices. Standard shipping includes public weighbridge slips. Any weighment audit at the client's receiving bay must occur prior to unloading, and any weight variance exceeding ±0.5% must be reported to our transit desk immediately.
          </p>

          <h2 style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--accent-gold)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
            3. Unloading & Discharge Turnaround
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            Receiving plants are responsible for providing appropriate storage tanks, standard couplers (3-inch or 4-inch), and positive displacement rotary lobe pumps. Liquid tankers allow up to 4 hours of free unloading turnaround at the client's bay. Delays beyond this window due to pump malfunctions or tank capacity deficits may incur standard demurrage charges.
          </p>

          <h2 style={{ fontSize: '1.4rem', marginBottom: '14px', color: 'var(--accent-gold)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
            4. Commercial Billing & GST Compliance
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            All dispatches are subject to standard Goods and Services Tax (GST) rates (HSN Code 1703). Invoices showing Saarthi Organics' GSTIN (06AFEFS2128A1ZJ) are uploaded immediately to ensure seamless Input Tax Credit (ITC) matching. Payments must comply with contractual credit timelines.
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
