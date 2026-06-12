import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses for Tobacco Industry & Processing | Saarthi Organics',
  description: 'High-viscosity blackstrap molasses supplier for the tobacco industry. Natural humectant, physical binder, and flavoring agent casing supplier.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-for-tobacco-industry',
  },
};

export default function TobaccoIndustry() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses Sourcing for Tobacco Processing</h1>
          <p className="subpage-hero-desc">
            High-viscosity, heavy blackstrap molasses selected specifically to serve as a natural humectant, physical binder, and flavor casing agent.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Moisture Retention & Binding Cohesion
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Why the Tobacco Industry Uses Molasses:</strong> Tobacco processors utilize blackstrap molasses as a binding and casing syrup. Its chemical properties allow it to act as a humectant (preventing tobacco leaves from drying out and crumbling), while its natural sucrose content binds flavoring casing agents to the leaf structure.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Key Sourcing Benefits:</strong> We select heavy, high-viscosity batches (Brix density 84% to 86%) directly from sugar mill strikes. Sourcing molasses with standardized sugar-to-water ratios prevents mold formation while maintaining leaf elasticity during shredding and packaging runs.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Tobacco Casing Sourcing Metrics</h3>
            
            <div className="symmetrical-grid-two-col" style={{ marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>High Viscosity Index</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Maintains thick fluid properties, allowing excellent flavor suspension and leaf adhesion.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Natural Humectant</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Retains cellular moisture inside processed leaves, extending product shelf life metrics.</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', margin: '24px 0 16px 0', color: 'var(--accent-gold)' }}>Procurement & Packaging Operations</h3>
            
            <p className="section-desc" style={{ marginBottom: '16px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Supply & Delivery Logistics:</strong> Because tobacco manufacturing facilities often require precise, controlled raw material dosing, we offer flexible packaging options alongside standard road tankers (20 - 50 MT). These include 1000L IBC Totes (approx. 1.4 MT net) and sealed 200L steel or HDPE drums.
            </p>

            <p className="section-desc" style={{ marginBottom: '24px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Quality Consistency:</strong> We run batch refractometer and moisture titrations to verify that every container matches specification locks. This ensures uniform casing performance in your processing tumblers.
            </p>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Tobacco Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate scheduled container allocations and custom packaging options for commercial tobacco processors.
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
