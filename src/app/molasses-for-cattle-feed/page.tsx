import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses for Cattle Feed & Livestock Feed Mills | Saarthi Organics',
  description: 'High-Brix animal feed grade molasses supplier. Enhances feed palatability, provides trace minerals, and acts as a binder in pellet and block feed mills.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-for-cattle-feed',
  },
};

export default function CattleFeedIndustry() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_cattle_feed.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for Cattle Feed Manufacturers</h1>
          <p className="subpage-hero-desc">
            Standardized high-viscosity binding agents and carbohydrate energy substrates tailored for animal nutrition block and pellet feed mills.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Pellet Cohesion & Nutritional Fortification
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Why Feed Mills Use Molasses:</strong> Cattle feed compounders utilize blackstrap molasses as a multi-functional raw material. It serves as a natural binder that adheres grains together, a highly palatable flavoring agent to encourage livestock intake, and a dust suppressant for grain elevators.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Key Sourcing Benefits:</strong> Our molasses is selected for high Brix solids (≥ 82.0%) to guarantee maximum binding cohesion. Fortifying feed with this natural syrup provides organic trace minerals (potassium, calcium, magnesium) and raises the overall digestable energy density of the finished pellet.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Technical Sourcing Specifications</h3>
            
            <div className="symmetrical-grid-two-col" style={{ marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Pellet Durability Index (PDI)</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Maintains feed block structural integrity during long-distance shipping, minimizing dusty fines.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Mineral Fortification</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Rich in natural minerals, supporting cattle bone health and livestock growth metrics.</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', margin: '24px 0 16px 0', color: 'var(--accent-gold)' }}>Mill Operations & Storage Logistics</h3>
            
            <p className="section-desc" style={{ marginBottom: '16px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Supply & Delivery Logistics:</strong> We dispatch bulk shipments via dedicated liquid road tankers (20 - 50 MT) directly to feed mill receiving wells. For operations requiring smaller quantities, we support 1000L IBC Totes or 200L HDPE drums.
            </p>

            <p className="section-desc" style={{ marginBottom: '24px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Viscosity Management:</strong> Because high-Brix molasses becomes extremely viscous at low temperatures, we recommend utilizing high-torque positive displacement pumps at your discharge manifold. We synchronize dispatches to ensure seamless unloading schedules.
            </p>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Feed Mill Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate monthly supply contracts and pricing programs for cattle feed mill cooperatives and raw material buyers.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk Pricing
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Discuss Sourcing Details
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
