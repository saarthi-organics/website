import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Molasses for Pharma Industry & Fermentation | Saarthi Organics',
  description: 'Specification-locked, high-purity sugarcane blackstrap molasses for pharmaceutical API fermentation. Documented trace minerals and strict QA standards.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-for-pharma',
  },
};

export default function PharmaIndustry() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_pharma.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses Sourcing for Pharmaceutical Fermentation</h1>
          <p className="subpage-hero-desc">
            Specification-locked, high-purity carbon substrates with documented mineral profiles, optimized for active pharmaceutical ingredient (API) bioprocessing.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Traceable Carbon Media for API Synthesis
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Why the Pharmaceutical Industry Uses Molasses:</strong> Biopharmaceutical manufacturers utilize sugarcane blackstrap molasses as a complex carbon media inside deep-tank aerobic and anaerobic fermentation systems. It serves as the primary organic nutrient source to cultivate bacteria and fungi that synthesize antibiotics, vitamin complexes (such as B12), and bio-organic acids.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Key Sourcing Benefits:</strong> Our pharmaceutical-grade batches are characterized by strict control of heavy metals and minimal agricultural residues. Providing documented trace element profiles (magnesium, iron, zinc) supports stable culture reproduction rates and consistent yield indexes during batch runs.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Pharma Media Sourcing Metrics</h3>
            
            <div className="symmetrical-grid-two-col" style={{ marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Heavy Metal Testing</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Batches undergo strict testing to limit lead, arsenic, and cadmium below compliance limits.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Batch Traceability</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Every dispatch is mapped directly to sugar refinery production strikes to meet audit standards.</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', margin: '24px 0 16px 0', color: 'var(--accent-gold)' }}>Procurement, Packaging & Delivery</h3>
            
            <p className="section-desc" style={{ marginBottom: '16px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Packaging Formats:</strong> Because pharmaceutical plants operate under varied hygiene layouts, we distribute molasses in sterile-sealed 1000L IBC Totes (approx. 1.4 MT net) and sealed 200L drums, alongside dedicated liquid road tankers (20 - 50 MT) for high-volume bioreactor setups.
            </p>

            <p className="section-desc" style={{ marginBottom: '24px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Delivery Protocols:</strong> We secure all cargo valves with uniquely serialized locks and provide pre-shipment laboratory samples (500ml) from the active batch to facilitate your internal quality assurance validation before the tanker enters your discharge zone.
            </p>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Pharma Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate premium specification-locked logistics for active pharma ingredient (API) manufacturers and bioprocessing plants.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Technical Details
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Discuss Your Requirement
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
