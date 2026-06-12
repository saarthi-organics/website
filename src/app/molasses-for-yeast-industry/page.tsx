import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses for Yeast Industry & Propagation | Saarthi Organics',
  description: 'Pure sugarcane molasses for commercial yeast manufacturing. Standardized carbon source with low ash content and optimal nutrient profile for high dry yeast yields.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-for-yeast-industry',
  },
};

export default function YeastIndustry() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for Yeast Manufacturing & Bioprocessing</h1>
          <p className="subpage-hero-desc">
            Highly filtered, low-ash blackstrap molasses with consistent mineral and carbohydrate profiles optimized for commercial yeast propagation.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Standardizing Carbon Substrates for Yeast Growth
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Why the Yeast Industry Uses Molasses:</strong> Yeast manufacturers (producing Saccharomyces cerevisiae) utilize sugarcane molasses as the primary organic carbon feed source. Consistent nutrient availability (sucrose, glucose, fructose) directly determines yeast reproduction velocity and dry biomass yields.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Key Sourcing Benefits:</strong> We source molasses batches with low sulfated ash content (≤ 12.0%) and stable pH ranges (4.5 to 5.5). Sourcing clean molasses minimizes osmotic shock risks during bioreactor propagation and supports high nitrogen-to-biomass conversion ratios.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Yeast Propagation Sourcing Metrics</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Ash Limit Control</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Kept below 12.0% to prevent excess inorganic mineral salt accumulation in growth media.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>TRS Yield Consistency</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Supplied at 45.0% - 50.0% TRS to support predictable culture growth schedules.</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', margin: '24px 0 16px 0', color: 'var(--accent-gold)' }}>Procurement & Bioprocess Logistics</h3>
            
            <p className="section-desc" style={{ marginBottom: '16px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Supply & Delivery Logistics:</strong> We organize regular road tanker shipments (20 - 50 MT) directly from selected sugar mill storage basins. For custom pilot plant runs, we offer 1000L IBC Totes.
            </p>

            <p className="section-desc" style={{ marginBottom: '24px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Filtration Sourcing:</strong> Since yeast growth is sensitive to suspended organic impurities, we verify that our raw material batches are free of excessive crystallization residues, ensuring trouble-free pre-dilution and sterilization cycles at your facility.
            </p>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Yeast Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate dedicated technical analysis sheets and custom contract pricing agreements for yeast manufacturers.
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
