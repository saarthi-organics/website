import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses for Foundries & Core Sand Binding | Saarthi Organics',
  description: 'Organic sand core binder molasses for casting foundries. Enhances green sand strength, mold stability, and collapsibility during high-temperature metal casting.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-for-foundries',
  },
};

export default function FoundriesIndustry() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses Sourcing for Foundries & Steel Casting</h1>
          <p className="subpage-hero-desc">
            Heavy-viscosity organic binders engineered to enhance green strength, dry compression strength, and mold collapsibility in metal casting sands.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              High-Temperature Core Binding Performance
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Why Foundries Use Molasses:</strong> Metal casting foundries utilize heavy sugarcane blackstrap molasses as an organic core and mold sand binder. When mixed with silica sand and bentonite clay, its high-sucrose viscosity binds the sand grains together, providing the mold with dry strength to resist hot metal erosion during pouring.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Key Sourcing Benefits:</strong> Sourcing high-solids molasses (Brix ≥ 82.0% min) is vital to guarantee thermal carbonization under extreme heats. The carbonized sugars form a protective carbon barrier, improving casting surface finishes and collapsing easily for clean sand shakeout after cooling.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Foundry Mold Sourcing Metrics</h3>
            
            <div className="symmetrical-grid-two-col" style={{ marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Dry Mold Collapsibility</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Caramelized sugars decompose after cooling, allowing quick shakeout without casting fractures.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Green Compression Strength</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>High viscosity provides excellent shape retention prior to baking and casting.</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', margin: '24px 0 16px 0', color: 'var(--accent-gold)' }}>Procurement, Packaging & Delivery</h3>
            
            <p className="section-desc" style={{ marginBottom: '16px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Packaging Options:</strong> Heavy casting foundries often require precise batch sizes. We distribute molasses in heavy-duty 200L steel drums and 1000L IBC Totes (approx. 1.4 MT net), alongside standard road tankers (20 - 50 MT) for high-capacity sand preparation systems.
            </p>

            <p className="section-desc" style={{ marginBottom: '24px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Freight & Scheduling:</strong> Sourced directly from major modern sugar mills, our logistics desk coordinates deliveries across industrial hubs, ensuring continuous raw material supply aligned to your casting schedule.
            </p>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Foundry Supply Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate continuous contract pricing and spot bulk allocations for steel and cast iron foundries.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Technical Details
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Discuss Sourcing Needs
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      <FinalCTA />

    </main>
  );
}
