import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses for Food Processing & Baking Industry | Saarthi Organics',
  description: 'Pure sugarcane molasses supplier for food manufacturing. Ideal for bakery products, confectionery, industrial syrups, and food-grade fermentation.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-for-food-processing',
  },
};

export default function FoodProcessingIndustry() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for Commercial Food Processing</h1>
          <p className="subpage-hero-desc">
            Industrial food-grade molasses suited for commercial bakery production, confectionery formulations, and large-scale manufacturing.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Standardized Formulations for Industrial Food Plants
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Why Food Processors Use Molasses:</strong> Commercial bakeries and food manufacturers utilize sugarcane molasses for its distinct caramel flavor profiles, natural dark brown coloring, and humectant (moisture retention) properties that extend shelf life in baked goods.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Key Sourcing Benefits:</strong> We select batches from modern sugar refineries that adhere to strict sanitary processing codes. Every batch is certified for consistent Brix density (82% to 85%) and low insoluble solids, ensuring it pumps seamlessly through automated B2B recipe mixing lines.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Food Grade Sourcing Standards</h3>
            
            <div className="symmetrical-grid-two-col" style={{ marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Natural Shelf Life</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Functions as a clean-label humectant, retaining moisture and freshness without synthetic additives.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Batch Color Consistency</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Maintains constant coloration metrics to ensure uniform product appearance across runs.</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', margin: '24px 0 16px 0', color: 'var(--accent-gold)' }}>Procurement & Unloading Operations</h3>
            
            <p className="section-desc" style={{ marginBottom: '16px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Supply & Delivery Logistics:</strong> We dispatch bulk shipments utilizing clean road tankers (20 - 50 MT) directly to plant receiving bays. For custom formulations or specialized ingredients, we supply clean 1000L IBC Totes or sealed 200L food-grade drums.
            </p>

            <p className="section-desc" style={{ marginBottom: '24px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Clean Tanker Protocols:</strong> Because biological contamination is a critical hazard, we enforce strict tanker cleaning protocols before loading, ensuring that the raw sugarcane molasses arrives fresh, stable, and ready for your intake QA inspection.
            </p>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Food Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate seasonal contracts and volume pricing agreements for large commercial bakeries and food processors.
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
