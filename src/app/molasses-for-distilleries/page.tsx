import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses for Distilleries & Ethanol Plants | Saarthi Organics',
  description: 'Excise-aligned bulk sugarcane molasses supply for bio-ethanol and potable alcohol distilleries. High TRS (Total Reducing Sugars) feedstock yields maximized.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-for-distilleries',
  },
};

export default function DistilleriesIndustry() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses Sourcing for Ethanol Distilleries</h1>
          <p className="subpage-hero-desc">
            Excise-aligned bulk supply of sugarcane blackstrap molasses with verified Total Reducing Sugars (TRS) ratios optimized for bio-ethanol and potable alcohol fermentation runs.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Optimizing Alcohol Fermentation Yields
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Why Distilleries Use Molasses:</strong> Ethanol distilleries utilize sugarcane blackstrap molasses as their primary carbon substrate for yeast metabolism. The efficiency of the fermentation run is directly determined by the concentration of fermentable sugars in the feedstock.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Key Sourcing Benefits:</strong> Our molasses is selected for high sugar concentration (TRS ≥ 45.0% min) and low volatile acidity. Sourcing feedstock with high sucrose, glucose, and fructose values maximizes alcohol yields per ton of raw material and reduces unfermentable solids residue (slops) in distillation columns.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Sourcing & Quality Parameters</h3>
            
            <div className="symmetrical-grid-two-col" style={{ marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Total Reducing Sugars (TRS)</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Maintained at 45.0% - 50.0% to support continuous cell density and prevent fermentation stalls.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Brix Density Verification</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Supplied at 82.0% - 88.0% Brix, ensuring minimal water dilution and high raw material density.</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', margin: '24px 0 16px 0', color: 'var(--accent-gold)' }}>Procurement & Unloading Operations</h3>
            
            <p className="section-desc" style={{ marginBottom: '16px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Supply & Delivery Logistics:</strong> We dispatch molasses using specialized liquid road tankers in sizes of 20 to 50 Metric Tons (MT). Unloading requires standard 3-inch or 4-inch couplers connected to positive displacement rotary lobe pumps. For winter runs, we arrange steam-coiled tankers to warm the cargo prior to gate unloading, keeping discharge times under 60 minutes.
            </p>

            <p className="section-desc" style={{ marginBottom: '24px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Excise & Contract Sourcing:</strong> Because molasses transport is heavily regulated by state excise policies, we handle all permit tracking, e-way bill logging, and supply clearances from partner sugar mills, ensuring legally compliant delivery directly to your bulk intake storage tanks.
            </p>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Distillery Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate seasonal excise-aligned supply contracts for bio-ethanol plants and potable distilleries.
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
