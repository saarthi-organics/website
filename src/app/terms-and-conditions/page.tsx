export default function TermsAndConditions() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Legal Information</span>
          <h1 className="subpage-hero-title">Terms & Conditions</h1>
          <p className="subpage-hero-desc">
            Review the standard commercial procurement terms, weighment procedures, and transit dispatch responsibilities of Saarthi Organics.
          </p>
        </div>
      </div>

      <section style={{ maxWidth: '800px', margin: '0 auto 80px auto', lineHeight: 1.7 }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary-light)' }}>1. Sourcing & Dispatch Commitments</h2>
        <p style={{ color: 'var(--text-secondary-light)', marginBottom: '24px' }}>
          Quotes are formulated based on seasonal sugar refiner parameters, bulk transit distances, and delivery quantities. Standard dispatches require a formal purchase order. Contracts secure specific monthly Metric Tons (MT) allocations which are guaranteed through our mill relationships during the crushing off-season.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary-light)' }}>2. Weighment & Cargo Verification</h2>
        <p style={{ color: 'var(--text-secondary-light)', marginBottom: '24px' }}>
          Net weight of molasses cargo is determined at verified refinery terminal weighbridges and logged on our invoices. Standard shipping includes public weighbridge slips. Any weighment audit at the client's receiving bay must occur prior to unloading, and any weight variance exceeding ±0.5% must be reported to our transit desk immediately.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary-light)' }}>3. Unloading & Discharge Turnaround</h2>
        <p style={{ color: 'var(--text-secondary-light)', marginBottom: '24px' }}>
          Receiving plants are responsible for providing appropriate storage tanks, connections, and positive displacement gear pumps. Liquid tankers allow up to 4 hours of free unloading turnaround at the client's bay. Delays beyond this window due to pump malfunctions or tank deficits may incur demurrage charges.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary-light)' }}>4. Commercial Billing & GST</h2>
        <p style={{ color: 'var(--text-secondary-light)' }}>
          All dispatches are subject to standard GST rates. Invoices showing GSTIN (06AFEFS2128A1ZJ) are uploaded immediately to ensure seamless Input Tax Credit (ITC) matching. Payments must comply with contractual credit timelines.
        </p>
      </section>

    </main>
  );
}
