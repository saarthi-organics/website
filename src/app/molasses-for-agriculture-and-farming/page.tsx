import Link from 'next/link';

export default function AgricultureFarmingIndustry() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      {/* Subpage Hero / Overview */}
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for Agriculture & Farming</h1>
          <p className="subpage-hero-desc">
            Premium, high-solids blackstrap molasses rich in trace minerals and natural carbohydrates to stimulate soil biology, accelerate composting, and enhance organic crop nutrition.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Agricultural Uses of Molasses</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              In modern sustainable agriculture and organic farming systems, heavy blackstrap molasses is valued as an exceptional soil stimulant. Because it contains concentrated sucrose, glucose, and fructose along with complex organic matter, it serves as a highly bio-available energy source for beneficial soil microbes, mycorrhizal fungi, and nitrogen-fixing bacteria.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              We procure molasses directly from primary sugarcane processing mills, ensuring it retains its natural mineral density—specifically calcium, magnesium, iron, and potassium. This high trace-mineral count provides instant micro-nutrients to crops while supporting systemic soil health.
            </p>
            
            <h3 style={{ fontSize: '1.4rem', margin: '30px 0 16px 0', color: 'var(--text-primary-light)', textAlign: 'center' }}>Targeted Agricultural Applications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="symmetrical-detail-box">
                <strong>Soil Conditioning & Microbial Activation</strong>
                <p>
                  Increases the biological activity of soil bacteria and earthworms. Applied via drip irrigation or sprayers to build soil structure, improve water retention, and reduce nutrient leaching.
                </p>
              </div>
              <div className="symmetrical-detail-box">
                <strong>Composting & Compost Tea Acceleration</strong>
                <p>
                  Functions as a quick-release carbon food source in compost heaps and aerobic compost teas. Accelerates the decomposition of raw organic matter, increasing thermophilic temperatures to break down cellulose and eradicate weed seeds.
                </p>
              </div>
              <div className="symmetrical-detail-box">
                <strong>Organic Crop Nutrition & Chelating Agent</strong>
                <p>
                  Acts as a natural chelating agent, binding to trace minerals (like iron and zinc) to make them more bio-available for root absorption. Can also be utilized as a natural surfactant in foliar spray mixes.
                </p>
              </div>
            </div>
          </div>

          {/* Sourcing Desk Card */}
          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px' }}>Agricultural Sourcing Inquiry</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', lineHeight: '1.5', marginBottom: '20px' }}>
                We coordinate seasonal contract pricing and spot allocations for agricultural cooperatives, fertilizer manufacturers, and large-scale farming estates.
              </p>
              
              <h4 style={{ fontSize: '1rem', color: 'var(--accent-amber)', marginBottom: '8px' }}>Bulk Supply Options</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary-light)', lineHeight: '1.4', marginBottom: '20px' }}>
                • Dedicated liquid road tankers (20 - 50 MT capacity)<br />
                • Flexibags for bulk sea containers (20-24 MT)<br />
                • Heavy-duty IBC Totes (1000L / 1.4 MT)<br />
                • Standard 200L steel or HDPE drums
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk RFQ
                </Link>
                <Link href="/blackstrap-molasses" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Download Specifications
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
