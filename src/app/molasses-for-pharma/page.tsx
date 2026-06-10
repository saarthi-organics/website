import Link from 'next/link';

export default function PharmaIndustry() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for the Pharmaceutical Industry</h1>
          <p className="subpage-hero-desc">
            High-purity carbon substrate with audited mineral values, utilized as a nutrient medium for antibiotic and vitamin fermentation.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Controlled Fermentation Substrates</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              The biopharmaceutical sector utilizes molasses as a nutrient feedstock for deep-tank aerobic and anaerobic fermentation systems. It serves as the primary organic carbon source for propagating microorganisms that produce antibiotics, vitamins (like B12), amino acids, and organic acids.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              Pharmaceutical manufacturers require precise chemical controls. Sourcing from accredited refineries, we ensure low level contamination limits, consistent pH, and complete trace mineral documentation. Every tanker shipment is paired with a specific Certificate of Analysis (COA) for immediate laboratory validation at your intake depot.
            </p>
            
            <h3 style={{ fontSize: '1.4rem', margin: '30px 0 16px 0', color: 'var(--text-primary-light)' }}>Pharma Sourcing Benefits</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Strict Sourcing Standards</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Audited sugar processing coordinates to limit pesticide and chemical residues in the raw molasses.</p>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Complete Batch Traceability</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Detailed transit and Mill sourcing records to meet pharmaceutical regulatory documentation standards.</p>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Weighment & Logistics Integrity</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Dedicated, clean tankers equipped with seals to prevent intermediate cargo dilution or tampering.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px' }}>Pharma Sourcing Desk</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate premium specification-locked logistics for active pharma ingredient (API) manufacturers and bioprocessing plants.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk Quote
                </Link>
                <Link href="/quality-and-sourcing" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Sourcing & SQA
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
