import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Molasses Supplier Rajasthan | Bulk Sand Foundry Binder | Saarthi Organics',
  description: 'Supplying bulk sugarcane molasses to cattle feed plants, distilleries, and casting foundries across Rajasthan including Jaipur, Kota, Alwar, and Udaipur.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-rajasthan',
  },
};

export default function RajasthanSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Rajasthan Sourcing Hub)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": ["+91-7055552535", "+91-9927029029", "+91-9837022300"],
    "email": "contact@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-rajasthan"
  };

  const regionalFaqs = [
    {
      q: "How does Saarthi Organics manage molasses transport to Rajasthan?",
      a: "We deploy specialized, insulated road tankers from our fleet to handle the long-haul transit into Rajasthan. Since high ambient temperatures in desert regions can decrease viscosity, our tankers are designed to prevent heat-related degradation, ensuring the product arrives in perfect condition."
    },
    {
      q: "What types of molasses are supplied to Rajasthan foundries?",
      a: "We supply a heavy industrial-grade sugarcane molasses with a high Brix density (82% to 85%). This grade provides superior binding strength, making it ideal for silica sand core binding in steel and iron casting foundries across Bhiwadi, Jaipur, and Jodhpur."
    },
    {
      q: "Do you process state border clearances for Rajasthan deliveries?",
      a: "Yes. Our logistics desk processes all inter-state transit permits, including Rajasthan State Excise declarations and matching GST e-way bills. This ensures our tankers clear borders like Shahjahanpur or Kotputli without compliance delays."
    },
    {
      q: "What is the minimum order volume for Rajasthan industries?",
      a: "Our standard minimum order quantity (MOQ) is one full road tanker of approximately 20 to 25 Metric Tons. For long-term contract partners, we can schedule multi-tanker deliveries weekly or monthly to match production demands."
    }
  ];

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Breadcrumbs items={[{ name: 'Rajasthan Supplier', href: '/molasses-supplier-rajasthan' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_logistics.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Rajasthan Sourcing & Logistics Channel</span>
          <h1 className="subpage-hero-title">Bulk Sugarcane Molasses Supplier in Rajasthan</h1>
          <p className="subpage-hero-desc">
            High-viscosity, premium-grade sugarcane molasses for foundries, distilleries, and feed plants. Delivered via our temperature-controlled tankers with full compliance.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Left Column: Extensive Content */}
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Strategic Sourcing Support for Rajasthan&apos;s Diverse Industries
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Rajasthan presents a unique set of industrial challenges, demanding raw materials that can withstand high temperatures while maintaining their physical properties. Major B2B sectors across <strong>Jaipur, Alwar, Kota, Udaipur, and Bhilwara</strong> require consistent volumes of industrial-grade molasses. Saarthi Organics fills this need by managing cross-border logistics lanes that transport high-purity sugarcane molasses directly to Rajasthan&apos;s key industrial zones.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              We source our molasses from top-tier sugar processing plants in neighboring agricultural states. By selecting mills that employ modern clarification and concentration processes, we secure molasses with a stable refractometric Brix value (82.0% - 84.0%). This high quality translates to better carbon content, improved binding efficiency, and consistent fermentation yields for our clients.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Rajasthan B2B Industries We Serve</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our bulk molasses supplies are optimized for several critical manufacturing processes in Rajasthan:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li><strong>Metal Casting Foundries (Jaipur, Bhiwadi, Jodhpur):</strong> Foundries utilize our high-Brix molasses as a natural sand core binder. The high sugar concentration forms a tough, heat-resistant carbon bond with silica sand, preventing mold collapse during casting.</li>
              <li><strong>Animal Feed Plants (Alwar, Kota, Jaipur):</strong> Feed manufacturers rely on our molasses to bind grain mixtures into durable feed pellets. The rich carbohydrate profile also boosts the nutritional value and palatability of dairy feeds.</li>
              <li><strong>Distilleries & Country Liquor Manufacturers:</strong> We supply distilleries with high-TRS feedstock, ensuring optimal alcohol recovery rates and compliance with state-allocated production quotas.</li>
            </ul>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Specialized Logistics & State Border Compliance</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Transporting liquid molasses through the arid landscape of Rajasthan requires specialized logistics management. Extreme heat can affect the viscosity of molasses, potentially leading to carbonization or handling issues. Saarthi Organics utilizes insulated liquid tankers that stabilize temperatures during long-haul transit.
            </p>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Furthermore, our compliance team manages all inter-state excise permits, e-way bills, and transit declarations. We verify all permits before dispatch, allowing our tankers to clear border checkpoints quickly and maintain strict delivery timelines.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Foundry Grade Adhesives</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>High-density liquid molasses with low moisture content, optimized for sand mold core binding applications.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Seamless Border Clearance</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Direct coordination of Rajasthan Excise transit permits and digital tax documentation for hassle-free delivery.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sourcing Desk & Specifications */}
          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px', fontFamily: "'Cinzel', serif" }}>Rajasthan Sourcing Desk</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Secure stable volume contracts for Rajasthan manufacturing plants. Talk to our logistics coordinators.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=rajasthan&subject=Rajasthan Bulk Sourcing Inquiry" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }}>
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
            <span className="section-label">Rajasthan Support FAQ</span>
            <h2 className="section-title">Regional Sourcing & Transit FAQ</h2>
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
