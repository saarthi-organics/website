import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses for Agriculture, Farming & Soil Health | Saarthi Organics',
  description: 'Pure blackstrap molasses for organic farming, composting, and soil conditioning. Stimulates soil microbes and enhances crop nutrient uptake.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-for-agriculture-and-farming',
  },
};

export default function AgricultureFarmingIndustry() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      {/* Subpage Hero / Overview */}
      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_agriculture.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses Sourcing for Agriculture & Bio-Fertilizers</h1>
          <p className="subpage-hero-desc">
            Raw, high-solids blackstrap molasses rich in organic carbon and trace elements, optimized for agricultural soil conditioning and composting setups.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Microbial Soil Activation & Bio-Nutrient Sourcing
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Why the Agricultural Industry Uses Molasses:</strong> Commercial farming and organic fertilizer manufacturers utilize blackstrap molasses as an organic carbon source. Liquid molasses activates beneficial soil microorganisms, mycorrhizal fungi, and nitrogen-fixing bacteria, building soil structure and improving plant nutrient absorption.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Key Sourcing Benefits:</strong> Our raw molasses is sourced directly from primary sugar crushing mills, retaining its natural trace minerals (potassium, calcium, magnesium, iron). Sourcing raw, un-diluted syrup (Brix ≥ 82.0% min) guarantees maximum carbohydrate energy values per liter.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Soil & Compost Biological Metrics</h3>
            
            <div className="symmetrical-grid-two-col" style={{ marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Microbial Stimulation</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Provides immediately bio-available sugars to activate nitrogen-fixing soil bacteria.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Chelating Carbon</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Complex organic acids naturally bind to trace minerals, preventing crop nutrient lockouts.</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', margin: '24px 0 16px 0', color: 'var(--accent-gold)' }}>Procurement, Packaging & Delivery</h3>
            
            <p className="section-desc" style={{ marginBottom: '16px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Flexible Packaging Formats:</strong> Because agricultural distributors and fertilizer blenders operate under varied intake yards, we offer flexible packaging options. These include 1000L IBC Totes (approx. 1.4 MT net), Flexibags for bulk export containers (20-24 MT), and 200L HDPE drums, alongside standard road tankers (20 - 50 MT).
            </p>

            <p className="section-desc" style={{ marginBottom: '24px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Sourcing Desk Support:</strong> Sourced directly from sugar refiners, our logistics division coordinates multi-state transport to your blending warehouses, guaranteeing consistent deliveries to feed your production lines.
            </p>
          </div>

          {/* Sourcing Desk Card */}
          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Agricultural Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate scheduled supply programs and contract pricing options for fertilizer manufacturers and farming cooperatives.
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
