import Link from 'next/link';

export default function QualityAndSourcing() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Operational Quality</span>
          <h1 className="subpage-hero-title">Quality Assurance & Sourcing Excellence</h1>
          <p className="subpage-hero-desc">
            Direct mill relationships, rigorous laboratory testing protocols, and complete Certificate of Analysis (COA) compliance for industrial buyers.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Strict SQA Control Protocols</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              For industrial processors, chemical consistency is paramount. Diluted molasses or fluctuating Brix percentages can compromise yeast fermentation and binder properties, causing production delays.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              At Saarthi Organics, we manage quality at the source. We select batches directly from approved sugarcane refineries that maintain strict sanitation and crystallization parameters. Once sourced, the product is analyzed at the refinery loading terminal where it undergoes full hydrometer and refractometer analysis before transport dispatch.
            </p>
            
            <div style={{ background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)', padding: '24px', borderRadius: '0 4px 4px 0' }}>
              <h4 style={{ marginBottom: '10px', color: 'var(--text-primary-light)' }}>Certificate of Analysis (COA) Standard</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary-light)', lineHeight: '1.5' }}>
                Every liquid tanker leaving our loading bays is sealed and accompanied by a physical COA. This laboratory slip documents exact refractometric Brix, total reducing sugars (TRS), sulfated ash percentages, density, and pH values.
              </p>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px' }}>Request Specification Sheets</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', lineHeight: '1.5', marginBottom: '20px' }}>
                Download our standard product data sheet or request historical batch analysis reports for audit compliance.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/blackstrap-molasses" className="btn-primary" style={{ textAlign: 'center' }}>
                  Product Datasheet
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Request SQA Audit
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sourcing Framework Grid */}
      <section style={{ background: 'var(--bg-light)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Sourcing Capability</span>
            <h2 className="section-title">Reliable Sourcing Network</h2>
            <p className="section-desc">Securing volume flowability even during sugarcane crushing off-seasons.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🏭</span>
              <h3 className="feature-card-title">Sugar Refinery Tie-ups</h3>
              <p className="feature-card-desc">We maintain annual purchase commitments with major crushing mills across Uttar Pradesh and Haryana, securing priority supply rights during tight crushing months.</p>
            </div>
            
            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🔬</span>
              <h3 className="feature-card-title">Laboratory Validation</h3>
              <p className="feature-card-desc">Our laboratory performs Brix testing, pH titration, ash verification, and sucrose inversion testing to ensure product complies with industrial fermentation standards.</p>
            </div>

            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🛡</span>
              <h3 className="feature-card-title">Intake Security</h3>
              <p className="feature-card-desc">We seal tanker discharge valves with serialized tamper-evident locks, protecting cargo from intermediate dilution or contamination during transit.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
