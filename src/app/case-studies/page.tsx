import Link from 'next/link';

export default function CaseStudies() {
  const cases = [
    {
      title: "Ethanol Refinery Continuous Supply Contract",
      industry: "Potable Alcohol & Bio-Ethanol Distillery",
      challenge: "A major distillery in Uttar Pradesh was experiencing periodic fermentation stalls due to unpredictable delivery lead times and moisture variations in broker-supplied molasses.",
      solution: "Saarthi Organics established an annual procurement contract dedicating 5 tankers from our in-house fleet exclusively to this client. We implemented pre-dispatch laboratory testing protocols, locking TRS levels above 46.5%.",
      result: "Achieved 100% on-time delivery across 180 consecutive runs. The distillery reported a 4% increase in alcohol fermentation yield due to consistent TRS parameters."
    },
    {
      title: "Cattle Feed Pellet Durability Optimization",
      industry: "Animal Nutrition & Feed Mill",
      challenge: "A feed mill in Punjab faced high pellet disintegration rates during shipping. The low-grade molasses they were using lacked binding cohesion.",
      solution: "We evaluated their mill parameters and sourced a high-viscosity, low-moisture blackstrap batch (Brix ≥ 85.0%) directly from specific refinery runs. This heavy molasses was delivered warm to facilitate uniform mixing.",
      result: "The Pellet Durability Index (PDI) increased from 88% to 94%, significantly reducing product returns and dusty fines in finished sacks."
    },
    {
      title: "Yeast Propagation Emergency Supply Run",
      industry: "Bio-Fermentation & Yeast Industry",
      challenge: "A yeast processing plant faced a critical feedstock deficit during the sugar crushing off-season. Local mills were closed, and brokers quoted prohibitive rates.",
      solution: "We coordinated prioritized allocations through our sugar mill network, releasing 120 Metric Tons from partner refinery stocks. Dispatched via 4 insulated tankers within 36 hours of contract approval.",
      result: "The yeast plant maintained culture cell viability and prevented a full bioreactor plant shutdown, saving an estimated 1.8M INR in operational costs."
    }
  ];

  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Operational Scenarios</span>
          <h1 className="subpage-hero-title">B2B Case Studies</h1>
          <p className="subpage-hero-desc">
            How we solve procurement, logistics, and quality challenges for industrial molasses buyers across the subcontinent.
          </p>
        </div>
      </div>

      <section style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {cases.map((cs, idx) => (
            <div 
              key={idx} 
              style={{
                background: 'var(--bg-light)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '40px',
                borderLeft: '5px solid var(--accent-gold)'
              }}
            >
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                {cs.industry}
              </span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary-light)', marginBottom: '20px' }}>{cs.title}</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', flexWrap: 'wrap' }}>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary-light)', marginBottom: '8px' }}>The Challenge</h4>
                  <p style={{ color: 'var(--text-secondary-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>{cs.challenge}</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary-light)', marginBottom: '8px' }}>The Solution & Result</h4>
                  <p style={{ color: 'var(--text-secondary-light)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '12px' }}>{cs.solution}</p>
                  <strong style={{ color: 'var(--accent-amber)', fontSize: '0.95rem', display: 'block' }}>Result: {cs.result}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Action */}
      <section style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <h2 className="section-title">Schedule a Sourcing Assessment</h2>
        <p className="section-desc" style={{ marginBottom: '32px' }}>
          Our technical sales engineers can evaluate your chemical and volume requirements to establish a stable, structured sourcing contract.
        </p>
        <Link href="/contact" className="btn-primary">
          Consult our Sourcing Team
        </Link>
      </section>

    </main>
  );
}
