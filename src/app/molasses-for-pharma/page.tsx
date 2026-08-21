import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Molasses for Pharma Industry & Fermentation | Saarthi Organics',
  description: 'Sugarcane molasses used in selected pharmaceutical API fermentation applications. Review typical specifications and documentation options.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-for-pharma',
  },
};

export default function PharmaIndustry() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Breadcrumbs items={[{ name: 'Pharma Industry', href: '/molasses-for-pharma' }]} />
      
      <div className="subpage-hero">
        <Image src="/hero_pharma.png" alt="" fill priority className="subpage-hero-bg" style={{ objectFit: 'cover' }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses Sourcing for Pharmaceutical Fermentation</h1>
          <p className="subpage-hero-desc">
            Sugarcane molasses carbon substrates for active pharmaceutical ingredient (API) fermentation, subject to applicable grade and customer specifications.
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
              <strong>Why the Pharmaceutical Industry Uses Molasses:</strong> Biopharmaceutical manufacturers utilize sugarcane industrial molasses as a complex carbon media inside deep-tank aerobic and anaerobic fermentation systems. It serves as the primary organic nutrient source to cultivate bacteria and fungi that synthesize antibiotics, vitamin complexes (such as B12), and bio-organic acids.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Key Sourcing Benefits:</strong> Sourcing for biotechnology and pharmaceutical fermentation requires careful selection of batches. If your application requires a specific pharmaceutical-grade or technical specification, please discuss these requirements with our team to align sourcing batches with your fermentation process.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Pharma Media Sourcing Metrics</h3>
            
            <div className="symmetrical-grid-two-col" style={{ marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Heavy Metal Specifications</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Sourcing parameters are coordinated to align with limits for lead, arsenic, and cadmium based on customer requirements.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Batch Traceability</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Dispatch batches can be traced to sugar refinery production strikes to meet audit standards.</p>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', margin: '24px 0 16px 0', color: 'var(--accent-gold)' }}>Procurement, Packaging & Delivery</h3>
            
            <p className="section-desc" style={{ marginBottom: '16px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Packaging Formats:</strong> Because pharmaceutical plants operate under varied hygiene layouts, we distribute molasses in sterile-sealed 1000L IBC Totes (approx. 1.4 MT net) and sealed 200L drums, alongside dedicated liquid road tankers (20 - 50 MT) for high-volume bioreactor setups.
            </p>

            <p className="section-desc" style={{ marginBottom: '24px', textAlign: 'left', lineHeight: '1.6' }}>
              <strong>Delivery Protocols:</strong> We coordinate prompt dispatches and can discuss pre-shipment samples (500ml) from the active batch to facilitate your internal quality assurance validation, based on customer requirements.
            </p>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Pharma Sourcing Desk</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Our standard offering is industrial-grade molasses. If your application requires a specific grade, certification or specification, please discuss the requirement with our sourcing team before quotation. We work to support bioprocessing applications based on specific customer-defined metrics.
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
