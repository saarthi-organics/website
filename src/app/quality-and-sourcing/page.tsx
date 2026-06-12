import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Brix 82-88 Molasses Quality Standards & SQA | Saarthi Organics',
  description: 'Discover the rigorous chemical analysis and refractometer testing that guarantees Brix 82.0% - 88.0% and TRS 45.0% - 50.0% for our sugarcane molasses batches.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/quality-and-sourcing',
  },
};

export default function QualityAndSourcing() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Operational Quality</span>
          <h1 className="subpage-hero-title">Quality Assurance & Sourcing Excellence</h1>
          <p className="subpage-hero-desc">
            Direct mill relationships, rigorous laboratory testing protocols, and Certificate of Analysis (COA) documentation available on request for industrial buyers.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Strict SQA Control Protocols</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              For industrial processors, chemical consistency is paramount. Diluted molasses or fluctuating Brix percentages can compromise yeast fermentation and binder properties, causing production delays.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              At Saarthi Organics, we manage quality at the source. We select batches directly from approved sugarcane refineries that maintain strict sanitation and crystallization parameters. Once sourced, the product is analyzed at the refinery loading terminal where it undergoes full hydrometer and refractometer analysis before transport dispatch.
            </p>
            
            <div className="symmetrical-detail-box" style={{ background: 'var(--bg-light)' }}>
              <strong style={{ color: 'var(--text-primary-light)' }}>Certificate of Analysis (COA) Verification</strong>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary-light)', lineHeight: '1.5' }}>
                Liquid tankers leaving our loading bays are sealed, and a Certificate of Analysis (COA) can be provided on request. This laboratory slip documents key metrics like refractometric Brix, total reducing sugars (TRS), and pH values for verification.
              </p>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="hero-image-container">
              <Image 
                src="/molasses_testing.png" 
                alt="Saarthi Organics quality assurance manager validating Brix levels using a digital laboratory refractometer" 
                width={500} 
                height={320} 
                style={{ objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px' }}>Request Specification Sheets</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Download our standard product data sheet or request historical batch analysis reports for audit compliance.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/blackstrap-molasses" className="btn-primary" style={{ textAlign: 'center' }}>
                  Download Technical Details
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Speak With Our Team
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section style={{ background: 'var(--bg-light)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Sourcing Capability</span>
            <h2 className="section-title">Reliable Sourcing Network</h2>
            <p className="section-desc">Securing volume flowability even during sugarcane crushing off-seasons.</p>
          </div>

          <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <div style={{ flex: 0.9, minWidth: '300px' }}>
              <div className="hero-image-container">
                <Image 
                  src="/sugarcane_harvest.png" 
                  alt="Harvesting sugarcane in agricultural mill sourcing fields" 
                  width={500} 
                  height={360} 
                  style={{ objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
            <div style={{ flex: 1.1, minWidth: '300px' }}>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary-light)', marginBottom: '16px' }}>Direct Refining Connections</h3>
              <p style={{ color: 'var(--text-secondary-light)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '16px' }}>
                We maintain direct trade allocations across leading crushing units in Haryana, Punjab, Rajasthan, Uttarakhand, and Delhi NCR. Our sourcing operations bypass third-party agents, ensuring that the raw sugarcane molasses we deliver stays pure and un-diluted.
              </p>
              <p style={{ color: 'var(--text-secondary-light)', fontSize: '1rem', lineHeight: '1.6' }}>
                By aligning our bulk demand with annual crushing schedules, we guarantee consistent product volume for bio-ethanol plants, foundries, and animal feed mills year-round.
              </p>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🏭</span>
              <h3 className="feature-card-title">Sugar Refinery Tie-ups</h3>
              <p className="feature-card-desc">We maintain annual purchase commitments with major crushing mills across Haryana, Punjab, and Uttarakhand, securing priority supply rights during tight crushing months.</p>
            </div>
            
            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🔬</span>
              <h3 className="feature-card-title">Laboratory Validation</h3>
              <p className="feature-card-desc">Our laboratory performs Brix testing, pH titration, ash verification, and sucrose inversion testing to ensure product complies with industrial fermentation standards.</p>
            </div>

            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🛡</span>
              <h3 className="feature-card-title">Intake Security</h3>
              <p className="feature-card-desc">We seal tanker discharge valves with serialized tamper-evident locks, protecting cargo from intermediate dilution or contamination during transit.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />

    </main>
  );
}
