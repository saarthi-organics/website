import Link from 'next/link';

export default function BlogHub() {
  const articles = [
    {
      title: "Evaluating Total Reducing Sugars (TRS) in Industrial Molasses",
      category: "Fermentation & Quality",
      summary: "A deep dive into why TRS values determine sugar-to-alcohol conversion yields in fermentation chambers, and how to spot-test incoming tanker batches.",
      date: "May 14, 2026",
      readTime: "5 min read"
    },
    {
      title: "Winter Viscosity Control: Cold-Climate Transport Logistics",
      category: "Logistics & Supply",
      summary: "Pumping heavy blackstrap molasses becomes problematic below 15°C. Review logistics engineering best practices, steam-coiled tankers, and intake piping layouts.",
      date: "April 28, 2026",
      readTime: "7 min read"
    },
    {
      title: "GST Compliance & Input Tax Credit (ITC) in Sugarcane Molasses Sourcing",
      category: "Procurement",
      summary: "Understand the regulatory framework governing molasses sourcing under the Indian GST system. How to structure purchases to secure instant input tax reconciliation.",
      date: "March 11, 2026",
      readTime: "4 min read"
    }
  ];

  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Insights</span>
          <h1 className="subpage-hero-title">Molasses Sourcing Knowledge Hub</h1>
          <p className="subpage-hero-desc">
            Technical papers, procurement guidelines, and logistics reviews written by industrial specialists at Saarthi Organics.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {articles.map((post, index) => (
            <div 
              key={index}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>{post.category}</span>
                <span style={{ color: 'var(--text-secondary-light)' }}>{post.date}</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary-light)', marginBottom: '12px', lineHeight: 1.4 }}>
                {post.title}
              </h3>
              <p style={{ color: 'var(--text-secondary-light)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '24px', flex: 1 }}>
                {post.summary}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary-light)' }}>{post.readTime}</span>
                <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--accent-gold)' }}>Read Article &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing CTA */}
      <section style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <h2 className="section-title">Subscribe to Sourcing Reports</h2>
        <p className="section-desc" style={{ marginBottom: '32px' }}>
          Get quarterly market intelligence reports, crop crushing statistics, and bulk transport rate updates sent to your email.
        </p>
        <Link href="/contact" className="btn-primary">
          Register for Market Updates
        </Link>
      </section>

    </main>
  );
}
