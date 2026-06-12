import Link from 'next/link';
import Image from 'next/image';

export default function LogisticsPage() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Logistics Command</span>
          <h1 className="subpage-hero-title">Bulk Logistics & Tanker Fleet</h1>
          <p className="subpage-hero-desc">
            In-house liquid transport network, specialized steel tankers, and PAN India delivery coverage optimized for industrial procurement demands.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">The Advantage of an In-House Tanker Fleet</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Unlike traditional brokers or generic traders who rely on third-party transport intermediaries, Saarthi Organics owns and controls its logistics operations. For plant heads and distillery operators, this translates to guaranteed delivery windows and operational predictability.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              We maintain specialized, high-capacity liquid tankers designed for viscous fluids. Our logistics division monitors all tanker movements from loading terminals in sugar mills directly to your plant's intake valves, keeping your dispatch schedules completely transparent.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
              <div style={{ background: 'var(--bg-light)', padding: '20px', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ color: 'var(--accent-amber)', marginBottom: '8px' }}>Standard Tanker Capacity</h4>
                <p style={{ color: 'var(--text-secondary-light)', fontSize: '0.9rem' }}>Standardized liquid transport tankers carrying 20 - 50 Metric Tons (MT) per run.</p>
              </div>
              <div style={{ background: 'var(--bg-light)', padding: '20px', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ color: 'var(--accent-amber)', marginBottom: '8px' }}>Sanitary Couplers</h4>
                <p style={{ color: 'var(--text-secondary-light)', fontSize: '0.9rem' }}>Equipped with standardized connections for secure, contamination-free discharge.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="hero-image-container">
              <Image 
                src="/logistics_fleet.png" 
                alt="Saarthi Organics liquid transport tanker fleet parked at dispatch depot" 
                width={500} 
                height={320} 
                style={{ objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="quote-contact-card" style={{ background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px' }}>Request Delivery Estimate</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', lineHeight: '1.5', marginBottom: '20px' }}>
                Contact our logistics desk to calculate transport schedules and delivery rates to your plant.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Quote
                </Link>
                <Link href="/quality-and-sourcing" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Transit Quality Controls
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Dispatch Workflow */}
      <section style={{ background: 'var(--bg-light)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Operational Workflow</span>
            <h2 className="section-title">Weighment & Dispatch Security</h2>
            <p className="section-desc">We follow strict standard operating procedures to guarantee correct quantities and grades.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>⚖</span>
              <h3 className="feature-card-title">Dual-Weighment Audit</h3>
              <p className="feature-card-desc">Every tanker undergoes dual weighment checks—first at the sugar mill loading terminal weighbridge, and then at a verified external public weighbridge to confirm net cargo weight.</p>
            </div>
            
            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🔒</span>
              <h3 className="feature-card-title">Tamper-Proof Sealing</h3>
              <p className="feature-card-desc">Upon loading, all top manholes and bottom discharge valves are locked with uniquely numbered security seals. Seal numbers are documented on the transit invoice for verification before unload.</p>
            </div>

            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🚚</span>
              <h3 className="feature-card-title">North India & PAN India Coverage</h3>
              <p className="feature-card-desc">Routine daily supply channels operating across Haryana, Punjab, Rajasthan, and Uttar Pradesh, with capability to dispatch long-haul tankers nationwide.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
