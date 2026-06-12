import Link from 'next/link';

export default function FoundriesIndustry() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for Foundries & Metal Casting</h1>
          <p className="subpage-hero-desc">
            Heavy-grade binder additive for foundry sand core preparation, enhancing tensile strength and thermal stability during metal casting operations.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Core Binder Additive for High-Temperature Casting</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Foundry plants use heavy blackstrap molasses as a cost-effective, high-performance binder in sand mold and core formulations. Mixed with silica sand, clay, and water, molasses binds the mixture, giving molds the green strength necessary to hold shapes before pouring and dry strength during casting.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              When molten metal is poured, the high temperature carbonizes the organic sugars in the molasses, forming a strong carbon film. This film prevents metal penetration into the sand, improves casting surface finish, and breaks down easily after cooling for efficient sand shakeout.
            </p>
            
            <h3 style={{ fontSize: '1.4rem', margin: '30px 0 16px 0', color: 'var(--text-primary-light)', textAlign: 'center' }}>Foundry Mold Benefits</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="symmetrical-detail-box">
                <strong>Superior Mold Surface Finish</strong>
                <p>Carbonization creates a protective boundary layer, preventing sand grains from sintering onto hot castings.</p>
              </div>
              <div className="symmetrical-detail-box">
                <strong>Easy Sand Shakeout & Collapsibility</strong>
                <p>Once metal cools, the organic sugar structure collapses easily, making it simple to release the cast parts.</p>
              </div>
              <div className="symmetrical-detail-box">
                <strong>Heavy Carbon Content</strong>
                <p>Guaranteed high Brix levels (82% - 88%) provide maximum organic matter per ton, optimizing binder efficiency.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px' }}>Foundry Supply Inquiry</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', lineHeight: '1.5', marginBottom: '20px' }}>
                We provide consistent bulk deliveries to heavy metal casting and steel foundries across India.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk Quote
                </Link>
                <Link href="/blackstrap-molasses" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Specifications Sheet
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
