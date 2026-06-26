import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Molasses Supplier Uttarakhand | Bulk Sugarcane Sourcing | Saarthi Organics',
  description: 'Industrial sugarcane molasses supplier in Uttarakhand. High-purity carbon media for pharmaceutical fermentation and distilleries in Haridwar, Kashipur, Bazpur, and Pantnagar.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-uttarakhand',
  },
};

export default function UttarakhandSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Uttarakhand Sourcing Hub)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": ["+91-7055552535", "+91-9927029029", "+91-9837022300"],
    "email": "contact@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Haridwar",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-uttarakhand"
  };

  const regionalFaqs = [
    {
      q: "Do you supply pharmaceutical-grade molasses in Uttarakhand?",
      a: "Yes. For biotechnology and pharmaceutical fermentation units in SIDCUL (Haridwar) and Pantnagar, we supply high-purity sugarcane molasses. Sourcing parameters typically center around 82% Brix density and optimized Total Reducing Sugars (TRS). Product specifications and supporting quality documentation may be discussed based on customer requirements."
    },
    {
      q: "How are deliveries managed in the hilly terrains of Uttarakhand?",
      a: "Navigating mountain roads requires experienced drivers and specialized vehicles. We utilize heavy-duty tankers with enhanced braking and traction systems. Dispatches are scheduled during daylight hours to comply with hill road safety guidelines and prevent transit bottlenecks."
    },
    {
      q: "Can you source directly from local Uttarakhand sugar mills?",
      a: "Yes. We maintain procurement channels with cooperative and private mills in Bazpur, Kashipur, Lalkuan, Kichha, and Iqbalpur. This local integration ensures we can fulfill regional demand with minimal transit times."
    },
    {
      q: "What documentation is provided for pharmaceutical audits?",
      a: "We provide comprehensive traceability documents, including mill exit logs, weighbridge certificates, digital invoices, and typical batch analysis reports. Our compliance desk ensures that all records are complete and audit-ready."
    }
  ];

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Breadcrumbs items={[{ name: 'Uttarakhand Supplier', href: '/molasses-supplier-uttarakhand' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_logistics.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Uttarakhand B2B Sourcing Hub</span>
          <h1 className="subpage-hero-title">Bulk Sugarcane Molasses Supplier in Uttarakhand</h1>
          <p className="subpage-hero-desc">
            Traceable, premium sugarcane molasses optimized for pharmaceutical fermentation, food processing, and industrial distilleries. Sourced from local mills with specialized mountain transport.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Left Column: Extensive Content */}
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Traceable Sugarcane Molasses Supply for Uttarakhand B2B Plants
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Uttarakhand is a key manufacturing base for India&apos;s biopharmaceutical, food processing, and spirit sectors. Industrial clusters in <strong>Haridwar (SIDCUL), Dehradun, Kashipur, Bazpur, and Pantnagar</strong> demand highly consistent raw materials with strict quality controls. Saarthi Organics meets this standard by supplying traceable, high-Brix sugarcane molasses that serves as a premium carbon feed for complex fermentation processes.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              We source our liquid sugarcane molasses directly from state-of-the-art mills located in the Terai sugar belt of Uttarakhand, including <strong>Lalkuan, Kichha, Kashipur, Bazpur, and Iqbalpur</strong>, as well as adjacent agricultural corridors. This direct integration guarantees that our molasses exhibits an optimal chemical structure (with a typical refractometric Brix density of 82.0% - 84.0%) and low unfermentable solids, which is essential for maximizing yields in biological reactors.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Uttarakhand Industries We Serve</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our sugarcane molasses is optimized to support several specialized production lines across the state:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li><strong>Pharmaceutical Fermentation (SIDCUL Haridwar & Pantnagar):</strong> Biotechnology firms use our molasses as an organic carbon source to cultivate bacteria and fungi for manufacturing active pharmaceutical ingredients (APIs), vitamins, and enzymes.</li>
              <li><strong>Industrial & Beverage Distilleries (Kashipur & Bazpur):</strong> We supply local distilleries with high-TRS molasses, optimizing fermentation times and alcohol yields.</li>
              <li><strong>Food & Yeast Processing:</strong> Yeast manufacturing units require nutrient-rich, clean media with low metal impurities. Our molasses provides an excellent carbohydrate substrate for cultivating active dry yeast.</li>
            </ul>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Mountain Logistics & Heavy Transport Safety</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Transporting heavy, viscous fluids like liquid molasses through the mountainous terrain of Uttarakhand requires specialized logistics protocols. Steep gradients, sharp turns, and seasonal weather events (such as monsoons) demand rigorous vehicle maintenance and experienced drivers.
            </p>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Saarthi Organics operates a fleet of road tankers specifically configured for hilly transit. Our transport desk maps routes dynamically to avoid high-congestion tourist zones and coordinates delivery windows with plant security to ensure seamless unloading. Every tanker is tracked via GPS, giving procurement managers complete visibility over their shipments.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Terai Mill Sourcing</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Direct logistics loading at Bazpur, Kashipur, and Kichha sugar mills, minimizing freight costs and transit times.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Traceability Records</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Detailed documentation logs for every batch, satisfying stringent quality audit requirements of pharmaceutical clients.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sourcing Desk & Specifications */}
          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px', fontFamily: "'Cinzel', serif" }}>Uttarakhand Sourcing Desk</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Secure stable volume contracts for Uttarakhand pharmaceutical plants and distilleries. Speak to our logistics coordinators.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=uttarakhand&subject=Uttarakhand Bulk Sourcing Inquiry" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }}>
                  Request Tanker Quote
                </Link>
                <a href="tel:+917055552535" className="btn-secondary" style={{ textAlign: 'center', textDecoration: 'none' }}>
                  Call +91-7055552535
                </a>
                <a href="tel:+919927029029" className="btn-secondary" style={{ textAlign: 'center', textDecoration: 'none', background: 'transparent', border: '1px solid var(--border-light)' }}>
                  Call +91-9927029029
                </a>
                <a href="tel:+919837022300" className="btn-secondary" style={{ textAlign: 'center', textDecoration: 'none', background: 'transparent', border: '1px solid var(--border-light)' }}>
                  Call +91-9837022300
                </a>
              </div>
            </div>

            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '30px' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Standard Sourcing Spec</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>Brix Density</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 'bold' }}>82.0% - 84.0%</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>Total Reducing Sugar</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 'bold' }}>44.0% - 48.0%</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>Moisture Content</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 'bold' }}>16.0% - 18.0%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>Standard MOQ</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 'bold' }}>20 - 25 MT (Tanker)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Local FAQs Section */}
      <section style={{ padding: '60px 24px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">Uttarakhand Support FAQ</span>
            <h2 className="section-title">Regional Sourcing & Transport FAQ</h2>
          </div>
          <div className="faq-list">
            {regionalFaqs.map((faq, index) => (
              <details key={index} className="faq-card" style={{ marginBottom: '16px', border: '1px solid var(--border-color)', borderRadius: '6px', background: 'var(--bg-surface)' }}>
                <summary className="faq-question" style={{
                  padding: '20px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  listStyle: 'none'
                }}>
                  <span>{faq.q}</span>
                  <span style={{ color: 'var(--accent-gold)' }}>▼</span>
                </summary>
                <div style={{ padding: '20px', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', background: 'var(--bg-surface)' }}>
                  <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: '1.6' }}>{faq.a}</p>
                </div>
              </details>
            ))}
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
