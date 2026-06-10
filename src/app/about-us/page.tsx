import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      {/* Hero Banner */}
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Company Profile</span>
          <h1 className="subpage-hero-title">About Saarthi Organics</h1>
          <p className="subpage-hero-desc">
            Industrial raw material partner based in Karnal, India. We are structured exclusively to handle the bulk procurement, dispatch coordination, and supply network needs of heavy manufacturing plants.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>
              Operational Excellence in B2B Bulk Sourcing
            </h2>
            <p className="section-desc" style={{ marginBottom: '20px', fontSize: '1rem', lineHeight: '1.6' }}>
              Saarthi Organics operates at the intersection of sugar processing networks and heavy industrial consumers. Based in the agricultural manufacturing hub of Karnal, Haryana, we coordinate bulk sourcing directly from large-scale sugarcane processing mills.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', fontSize: '1rem', lineHeight: '1.6' }}>
              We recognize that industrial buyers, plant heads, and distilleries cannot afford operational downtime. That is why we do not function as simple brokers. Instead, we control the entire supply chain—procuring directly, testing in our laboratory, and managing transport in our own dedicated tanker fleet.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
              <div style={{ background: 'var(--bg-light)', padding: '20px', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ color: 'var(--accent-amber)', marginBottom: '8px' }}>Sourcing Authority</h4>
                <p style={{ color: 'var(--text-secondary-light)', fontSize: '0.9rem' }}>Direct tie-ups with leading sugar manufacturing plants across North India.</p>
              </div>
              <div style={{ background: 'var(--bg-light)', padding: '20px', borderRadius: '4px', border: '1px solid var(--border-light)' }}>
                <h4 style={{ color: 'var(--accent-amber)', marginBottom: '8px' }}>Logistics Command</h4>
                <p style={{ color: 'var(--text-secondary-light)', fontSize: '0.9rem' }}>In-house tanker management ensuring dispatch prioritization and direct accountability.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="hero-image-container">
              <Image 
                src="/molasses_plant.png" 
                alt="Saarthi Organics plant" 
                width={500} 
                height={400} 
                style={{ objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Core Values / Operational Standards */}
      <section style={{ background: 'var(--bg-light)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Corporate Governance</span>
            <h2 className="section-title">Operational Foundations</h2>
            <p className="section-desc">We build long-term supply relationships backed by contractual obligations and operational trust.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>⚖</span>
              <h3 className="feature-card-title">100% Legal & GST Compliance</h3>
              <p className="feature-card-desc">We operate with proper registration and issue valid tax invoices instantly, allowing your corporate accounting team to claim Input Tax Credit (ITC) without delays.</p>
            </div>
            
            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🔬</span>
              <h3 className="feature-card-title">Volume & Quality Guarantees</h3>
              <p className="feature-card-desc">Contracts are backed by committed supply agreements and direct mill allocations. Every shipment undergoes rigorous refractometer and chemistry testing to ensure consistent Brix levels.</p>
            </div>

            <div className="feature-card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>🛠</span>
              <h3 className="feature-card-title">Procurement-Friendly</h3>
              <p className="feature-card-desc">Standardized quote procedures (RFQs), flexible billing structures, custom delivery schedules, and dedicated key account managers for large contract buyers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action Area */}
      <section style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 className="section-title">Looking to secure a stable molasses supply?</h2>
        <p className="section-desc" style={{ marginBottom: '32px' }}>
          Get in touch with our commercial sourcing desk today to outline your monthly volume commitments and delivery coordinates.
        </p>
        <Link href="/contact" className="btn-primary">
          Connect with a Sourcing Specialist
        </Link>
      </section>

    </main>
  );
}
