import Link from 'next/link';

export default function YeastIndustry() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for the Yeast Industry</h1>
          <p className="subpage-hero-desc">
            Premium filtered carbon substrate with highly consistent pH and nutrient profiles, optimal for commercial yeast propagation.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Critical Carbon Source for Bioprocessing</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Commercial yeast manufacturers (producing baker's yeast, brewer's yeast, or feed yeast) require high-quality carbohydrate feeds. Our industrial blackstrap molasses serves as the ideal carbon substrate due to its nutrient density.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              Yeast cells depend on readily fermentable sugars (sucrose, glucose, fructose) to sustain cellular growth. We select batches with low ash content and consistent pH levels (4.5 - 5.5) to maintain bio-fermentation stability.
            </p>
            
            <h3 style={{ fontSize: '1.4rem', margin: '30px 0 16px 0', color: 'var(--text-primary-light)' }}>Yeast Propagation Benefits</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Essential Bio-Available Minerals</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Naturally contains key growth factors like biotin, pantothenic acid, and inorganic salts.</p>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Low Colloidal Impurities</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Carefully audited sourcing limits colloidal solids, easing downstream filtration and separation.</p>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Continuous Supply Reliability</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Consistent deliveries with standard specifications prevent fermentation batch failure risks.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px' }}>Bioprocess Sourcing Inquiry</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', lineHeight: '1.5', marginBottom: '20px' }}>
                We establish precise, specification-locked contracts for bioprocess and yeast plants across North India.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk Quote
                </Link>
                <Link href="/quality-and-sourcing" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Quality Controls
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
