import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Molasses Supplier Delhi NCR | Bulk Sugarcane Sourcing | Saarthi Organics',
  description: 'Corporate sugarcane molasses supplier in Delhi NCR. Timely liquid road tanker dispatch to industrial zones in Noida, Faridabad, Gurgaon, and Ghaziabad.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-delhi-ncr',
  },
};

export default function DelhiNCRSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Delhi NCR Sourcing Hub)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": ["+91-7055552535", "+91-9927029029", "+91-9837022300"],
    "email": "connect@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi NCR",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-delhi-ncr"
  };

  const regionalFaqs = [
    {
      q: "How do you handle heavy tanker entry restrictions inside Delhi NCR?",
      a: "Delhi NCR enforces strict night-entry policies for heavy commercial vehicles. Our logistics center schedules tanker dispatches to arrive at the border checkpoints by late evening, ensuring they enter and discharge their cargo at NCR factories during the designated window (typically 11:00 PM to 6:00 AM)."
    },
    {
      q: "Is your molasses used for wastewater treatment in Delhi NCR?",
      a: "Yes. Many industrial wastewater treatment plants (ETPs/STPs) in Noida and Faridabad use our high-carbon sugarcane molasses as a cost-effective, organic carbon source to support bacterial activity in biological denitrification processes."
    },
    {
      q: "Do you supply customized packaging options for NCR buyers?",
      a: "While our primary volume goes via 20-25 MT road tankers, we also cater to NCR research labs and chemical units by providing molasses in 1,000-liter IBC Totes (approx. 1.4 MT) or 200-liter steel drums upon pre-arranged scheduling."
    },
    {
      q: "Are the shipments subject to municipal or environmental taxes in NCR?",
      a: "Yes. Where applicable, our billing incorporates all green taxes, MCD tolls, and state levies. We provide clear, digitized documentation detailing these costs to prevent municipal checking delays during transit."
    }
  ];

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Breadcrumbs items={[{ name: 'Delhi NCR Supplier', href: '/molasses-supplier-delhi-ncr' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_logistics.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">National Capital Region Distribution</span>
          <h1 className="subpage-hero-title">Bulk Sugarcane Molasses Supplier in Delhi NCR</h1>
          <p className="subpage-hero-desc">
            Seamless B2B distribution of high-Brix industrial sugarcane molasses. Servicing chemical units, concrete plants, and treatment facilities in Noida, Gurgaon, Faridabad, and Ghaziabad.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Left Column: Extensive Content */}
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Premium Industrial Molasses Distribution for Delhi NCR
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              The National Capital Region (NCR) encompasses a vast network of highly regulated industrial zones. Manufacturing units in <strong>Noida, Greater Noida, Ghaziabad, Gurugram, and Faridabad</strong> require a steady supply of high-grade raw materials. Saarthi Organics offers specialized B2B logistics channels that deliver high-Brix sugarcane molasses to these demanding urban industrial centers, ensuring full compliance with local environmental and transport regulations.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our sourcing strategy relies on securing primary allocations from neighboring agricultural crushing zones in Haryana. This proximity allows us to load, inspect, and transport liquid molasses within hours of generation. By maintaining an in-house transport network, we guarantee that the molasses arriving at your facility is fresh, un-diluted, and matches the specified Brix value of 82.0% - 84.0%.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>NCR B2B Industries We Serve</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our liquid sugarcane molasses is utilized across a wide variety of technical and industrial processes in the NCR:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li><strong>Chemical & Adhesive Formulations:</strong> Chemical plants in Ghaziabad and Faridabad use our carbohydrate-rich molasses as a raw binder and organic base for manufacturing non-toxic industrial glues, construction adhesives, and agricultural sprays.</li>
              <li><strong>Wastewater Denitrification:</strong> Municipal and corporate effluent treatment plants (ETPs) in Gurgaon and Noida utilize molasses as a carbon source. It feeds active denitrifying bacteria, expediting the breakdown of waste compounds.</li>
              <li><strong>Construction Concrete Admixtures:</strong> Cement formulators use sugarcane molasses as a natural set retarder, allowing concrete to remain workable for extended durations during hot weather pours.</li>
            </ul>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Urban Logistics Navigation & Night-Entry Permitting</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Delivering heavy liquid tankers into urban zones like Noida and Gurugram requires navigating strict commercial vehicle restrictions. Delhi NCR enforces strict heavy-vehicle day-entry bans to manage congestion and emissions.
            </p>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Saarthi Organics maps dispatches around these constraints. Our drivers are trained to coordinate with plant managers to ensure offloading happens during the night or early morning windows. Additionally, our compliance desk takes care of MCD green taxes, toll clearances, and local state transit permissions, ensuring a smooth delivery cycle.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Night Delivery Operations</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Seamless logistics coordination to match NCR road restrictions, delivering straight to your storage during allowed hours.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Environmental Grade Carbon</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Filtered sugarcane molasses tailored specifically for carbon feeding in effluent and sewage treatment operations.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sourcing Desk & Specifications */}
          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px', fontFamily: "'Cinzel', serif" }}>NCR Sourcing Desk</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Secure stable volume contracts for Delhi NCR chemical units and treatment plants. Speak to our logistics coordinators.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=delhincr&subject=Delhi NCR Bulk Sourcing Inquiry" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }}>
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
            <span className="section-label">Delhi NCR Support FAQ</span>
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
