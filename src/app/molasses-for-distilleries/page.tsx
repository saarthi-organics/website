import Link from 'next/link';

export default function DistilleriesIndustry() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for Distilleries & Ethanol Plants</h1>
          <p className="subpage-hero-desc">
            High-TRS industrial blackstrap molasses engineered specifically to optimize alcohol fermentation yields and bio-ethanol processing efficiency.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Maximizing Fermentation Efficiency</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Distilleries and ethanol refineries require a steady carbon substrate with predictable sugar profiles. Our distillery-grade blackstrap molasses is sourced from selected sugar crushing mills that maintain optimal sugar extraction parameters.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              We prioritize **Total Reducing Sugars (TRS)** as the key chemical indicator, keeping it consistently above **45.0% min**. This ensures high conversion efficiency to ethanol by yeast (Saccharomyces cerevisiae) and reduces unfermentable organic solids residue (slops) in your distillation column.
            </p>
            
            <h3 style={{ fontSize: '1.4rem', margin: '30px 0 16px 0', color: 'var(--text-primary-light)' }}>Industry-Specific Benefits</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Optimal Yeast Propagation</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Balanced mineral profile including nitrogen, potassium, and magnesium to sustain yeast cell density.</p>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Predictable TRS Yields</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Standardized shipments with strict COA certificates to prevent batch-to-batch fermentation variations.</p>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Direct Dispatch Logistics</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Direct tanker delivery synchronized to match your continuous fermentation storage tank replenishment rate.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px' }}>Distillery Sourcing Inquiry</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate seasonal contracts and spot-buy allocations for distilleries and potable alcohol plants across North India.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk Quote
                </Link>
                <Link href="/logistics" className="btn-secondary" style={{ textAlign: 'center' }}>
                  View Logistics Capability
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
