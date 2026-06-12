import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

export default function FoodProcessingIndustry() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Applications</span>
          <h1 className="subpage-hero-title">Molasses for Food Processing</h1>
          <p className="subpage-hero-desc">
            Industrial food-grade molasses suited for commercial bakery production, confectionery syrups, animal nutrition, and large-scale fermentation.
          </p>
        </div>
      </div>

      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Consistent Formulations for Commercial Food Plants</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              In the commercial food and beverage sector, molasses is valued for its rich flavor profile, natural dark coloring properties, and moisture-retaining characteristics. From large-scale industrial bakeries producing dark breads and cookies to confectionery manufacturers formulating syrups, our molasses offers consistent performance.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              We source raw molasses under strict hygiene parameters directly from selected sugar refineries. Every batch is certified for ash parameters and Brix consistency, ensuring your automated batch mixing systems function without operational adjustments.
            </p>
            
            <h3 style={{ fontSize: '1.4rem', margin: '30px 0 16px 0', color: 'var(--text-primary-light)', textAlign: 'center' }}>Food Industry Benefits</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="symmetrical-detail-box">
                <strong>Moisture Retention & Shelf Life</strong>
                <p>Acts as a natural humectant in baked goods, extending freshness and preventing staling.</p>
              </div>
              <div className="symmetrical-detail-box">
                <strong>Natural Coloring & Flavor Depth</strong>
                <p>Provides a distinctive caramel profile and dark aesthetic without the need for artificial additives.</p>
              </div>
              <div className="symmetrical-detail-box">
                <strong>Standardized Viscosity</strong>
                <p>Maintains specific viscosity limits to allow seamless pumping through automated industrial production lines.</p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-light)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px' }}>Food Sourcing Inquiry</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary-light)', lineHeight: '1.5', marginBottom: '20px' }}>
                We supply food-grade and industrial batches in bulk liquid tankers (20 - 50 MT) or clean IBC totes (1000L) with full quality certifications.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/contact" className="btn-primary" style={{ textAlign: 'center' }}>
                  Request Bulk Quote
                </Link>
                <Link href="/quality-and-sourcing" className="btn-secondary" style={{ textAlign: 'center' }}>
                  Quality Controls
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <FinalCTA />

    </main>
  );
}
