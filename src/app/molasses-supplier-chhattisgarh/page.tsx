import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Molasses Supplier Chhattisgarh | Bulk Industrial Sourcing | Saarthi Organics',
  description: 'Industrial sugarcane molasses supplier in Chhattisgarh. High-Brix binding agent for steel foundries in Raipur and Bhilai and feed mills across Durg.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-chhattisgarh',
  },
};

export default function ChhattisgarhSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Chhattisgarh Sourcing)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": ["+91-7055552535", "+91-9927029029", "+91-9837022300"],
    "email": "connect@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Raipur",
      "addressRegion": "Chhattisgarh",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-chhattisgarh"
  };

  const regionalFaqs = [
    {
      q: "How does Saarthi Organics manage molasses dispatches in Chhattisgarh?",
      a: "We procure liquid sugarcane molasses directly from state cooperative sugar mills (in Kawardha, Bemetara, and Balod) as well as adjacent state crushing corridors. Dispatches are loaded directly into our road tankers and routed through to industrial zones across Raipur, Durg, and Bilaspur."
    },
    {
      q: "Why is your molasses preferred by Raipur and Bhilai steel foundries?",
      a: "Steel casting units require binders that can withstand extremely high casting temperatures. Our high-Brix (82% to 85%) molasses binds silica sand cores efficiently, forming a high-strength carbon structure that prevents molding defects."
    },
    {
      q: "Are your liquid road tanker shipments fully compliant with CG State Excise?",
      a: "Yes. All sugarcane molasses movement in Chhattisgarh is fully aligned with the State Excise department regulations. We issue digitized e-way bills, official weighbridge certifications, and GST invoices to ensure hassle-free transit."
    },
    {
      q: "Can you supply molasses for cement or concrete manufacturing in CG?",
      a: "Yes. Concrete batching plants in Chhattisgarh use our molasses as an organic set retarder, which delays the initial setting time of concrete during large-scale industrial construction projects."
    }
  ];

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Breadcrumbs items={[{ name: 'Chhattisgarh Supplier', href: '/molasses-supplier-chhattisgarh' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_logistics.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Chhattisgarh B2B Sourcing Hub</span>
          <h1 className="subpage-hero-title">Bulk Sugarcane Molasses Supplier in Chhattisgarh</h1>
          <p className="subpage-hero-desc">
            Premium liquid sugarcane molasses. Serving steel foundries in Raipur and Bhilai, cement concrete setups, and cattle feed mills across Chhattisgarh with full compliance.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Left Column: Extensive Content */}
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Strategic Sugarcane Molasses Supply Across Chhattisgarh
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Chhattisgarh is a central industrial corridor, hosting major steel casting plants, metal foundries, and cement manufacturing zones. B2B enterprises across <strong>Raipur, Bhilai, Durg, Bilaspur, and Raigarh</strong> require reliable deliveries of heavy carbon binders and processing agents. Saarthi Organics meets this need by supplying high-Brix sugarcane molasses sourced directly from premier regional cooperative sugar mills and adjacent state crushing networks.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our procurement desk maintains direct allocations with cooperative sugar processing units in Kawardha, Balod, and Bemetara. Sourcing directly at the mill gates ensures we provide our industrial clients with pure, un-diluted molasses. Every dispatch is verified for refractometric Brix density (typically 82.0% - 84.0%) and sugar content to ensure it performs consistently in intense industrial environments.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Chhattisgarh B2B Industries We Serve</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our sugarcane molasses is optimized to support several heavy industrial processes in the state:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li><strong>Steel Foundries & Castings (Raipur & Bhilai):</strong> Casting units utilize our high-Brix molasses as a silica sand core binder. The high sugar density carbonizes under high heat, providing excellent tensile strength and preventing mold defects.</li>
              <li><strong>Cement & Concrete Retardation:</strong> Construction concrete plants use molasses to slow the initial curing time of concrete mixtures, which is essential for transporting concrete over long distances in high heat.</li>
              <li><strong>Cattle Feed Plants (Durg & Raipur):</strong> Animal feed mills use our molasses as an organic pellet binder, improving feed palatability and adding essential carbohydrates to cattle feed mixes.</li>
              <li><strong>Industrial Fermentation & Bio-Fuels:</strong> Local distilleries utilize our high-TRS molasses as fermentation feedstock to optimize bio-ethanol conversion yields.</li>
            </ul>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Excise Compliant Transport & Weighbridge Verification</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Transporting liquid molasses inside Chhattisgarh requires navigating state excise regulations. Saarthi Organics handles all required compliance documents. We coordinate directly with state portals to generate e-way bills and transit permits, ensuring tankers clear checkpoints without delays.
            </p>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              We operate an in-house fleet of specialized liquid road tankers. Each vehicle is equipped with GPS tracking and digital seals. Our weighbridge check procedures ensure the exact quantity loaded at the sugar mill gates matches the quantity discharged at your facility.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Foundry Binder Experts</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Sourcing specialized high-viscosity, low-moisture molasses tailored specifically for silica sand core binding in steel castings.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Excise & Permit Aligned</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Complete management of Chhattisgarh Excise permits and GSTR compliance docs before vehicles leave dispatch yards.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sourcing Desk & Specifications */}
          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px', fontFamily: "'Cinzel', serif" }}>Chhattisgarh Sourcing Desk</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Secure stable volume contracts for Chhattisgarh industrial plants. Speak to our logistics coordinators.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=chhattisgarh&subject=Chhattisgarh Bulk Sourcing Inquiry" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }}>
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
            <span className="section-label">CG Support FAQ</span>
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
