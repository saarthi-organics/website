import Link from 'next/link';

export default function TobaccoIndustry() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for the Tobacco Industry</h1>
          <p className="subpage-hero-desc">
            High-viscosity, heavy blackstrap molasses used as a premium natural humectant, binder, and flavor-retention agent in tobacco processing.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Natural Flavor Binder & Moisture Regulator</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              The tobacco processing sector relies heavily on molasses for specialized applications. Due to its hygroscopic properties, blackstrap molasses functions as an exceptional natural humectant. It prevents processed tobacco leaves from drying out and crumbling, preserving texture and quality during shelf storage.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              In traditional hookahs, shisha, and chewing tobacco products, molasses serves as a structural casing. It binds raw leaves together and acts as an excellent base carrier that absorbs and releases flavorings steadily over time.
            </p>
            
            <h3 style={{ fontSize: '1.4rem', margin: '30px 0 16px 0', color: 'var(--text-primary-light)' }}>Tobacco Processing Benefits</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Moisture Preservation (Humectant)</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Keeps tobacco leaves at optimal moisture percentages, reducing crumble waste during packaging.</p>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Excellent Flavor Adsorption</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>Forms a uniform casing syrup film on the leaves, retaining added botanical and fruit aromas.</p>
              </div>
              <div style={{ padding: '16px', background: 'var(--bg-light)', borderLeft: '4px solid var(--accent-gold)' }}>
                <strong>Natural Carbohydrate Preservative</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', marginTop: '4px' }}>High soluble solids protect the finished tobacco blend from bacterial decay and shelf decomposition.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px' }}>Tobacco Sourcing Desk</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', lineHeight: '1.5', marginBottom: '20px' }}>
                We supply high-viscosity, low-moisture blackstrap batches in bulk tankers and IBC totes specifically for tobacco manufacturing plants.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk Quote
                </Link>
                <Link href="/blackstrap-molasses" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Review Specifications
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
