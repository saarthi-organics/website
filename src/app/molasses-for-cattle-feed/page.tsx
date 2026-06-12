import Link from 'next/link';

export default function CattleFeedIndustry() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for Cattle Feed Manufacturers</h1>
          <p className="subpage-hero-desc">
            Natural high-carbohydrate binding agent and palatability enhancer packed with essential organic trace minerals for block and pellet feed mills.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Essential Energy Substrate & Pellet Binder</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Cattle feed manufacturers use blackstrap molasses as a multi-functional ingredient. It serves as an excellent dust suppressant, palatability booster (improving feed intake due to its sweet taste), and high-energy carbohydrate source.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              In the pelleting process, molasses functions as a premium binder, enhancing pellet durability index (PDI) and reducing fines. It also provides essential natural trace minerals like calcium, magnesium, and potassium.
            </p>
            
            <h3 style={{ fontSize: '1.4rem', margin: '30px 0 16px 0', color: 'var(--text-primary-light)', textAlign: 'center' }}>Feed Mill Benefits</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="symmetrical-detail-box">
                <strong>Improved Palatability & Taste</strong>
                <p>Improves animal feed intake and digestability, leading to better yield and weight gain in livestock.</p>
              </div>
              <div className="symmetrical-detail-box">
                <strong>Excellent Pellet Binding</strong>
                <p>Acts as a physical binder to hold grains together, maintaining structural integrity during shipping.</p>
              </div>
              <div className="symmetrical-detail-box">
                <strong>Dust Control & Fine Reduction</strong>
                <p>Reduces airborne dust particles in feed manufacturing areas, ensuring safer operational conditions.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px' }}>Feed Mill Sourcing Desk</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate scheduled supply contracts for feed mills and agricultural cooperatives across India, supporting consistent pricing metrics.
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
