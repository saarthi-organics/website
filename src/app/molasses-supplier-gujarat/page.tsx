import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Molasses Supplier Gujarat | Bulk Industrial Sourcing | Saarthi Organics',
  description: 'Industrial sugarcane molasses supplier in Gujarat. High-Brix binding agent for foundries in Rajkot and carbon media for pharma units in Ahmedabad and Vadodara.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-gujarat',
  },
};

export default function GujaratSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Gujarat Distribution Hub)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": ["+91-7055552535", "+91-9927029029", "+91-9837022300"],
    "email": "connect@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-gujarat"
  };

  const regionalFaqs = [
    {
      q: "How does Saarthi Organics service industrial clients in Gujarat?",
      a: "We maintain a robust distribution network that delivers sugarcane molasses to Gujarat-based buyers. We coordinate dispatches from cooperative sugar mills in South Gujarat (such as Bardoli, Gandevi, and Madhi) as well as inter-state refinery networks, providing reliable delivery via our tanker fleet."
    },
    {
      q: "What makes your molasses ideal for Rajkot foundries?",
      a: "Rajkot is a major foundry hub requiring high-performance sand binders. Our molasses registers a high Brix density (82% to 85%), providing the strong cohesive bond needed to stabilize silica sand molds during high-temperature metal casting."
    },
    {
      q: "Are you compliant with Gujarat State GST and Input Tax Credit (ITC) regulations?",
      a: "Yes. All our dispatches are fully GST compliant. We generate computerized weighbridge slips, tax invoices, and digital e-way bills instantly, allowing your accounting team to claim Input Tax Credit seamlessly."
    },
    {
      q: "What packaging configurations are available for Gujarat industries?",
      a: "We primary dispatch in bulk road tankers carrying 20 to 25 Metric Tons. For specific chemical formulating or pharmaceutical labs in Ahmedabad and Ankleshwar, we can arrange shipments in 1,000-liter IBC Totes or 200-liter steel drums upon request."
    }
  ];

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Breadcrumbs items={[{ name: 'Gujarat Supplier', href: '/molasses-supplier-gujarat' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_logistics.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Gujarat Sourcing & Distribution Hub</span>
          <h1 className="subpage-hero-title">Bulk Sugarcane Molasses Supplier in Gujarat</h1>
          <p className="subpage-hero-desc">
            High-viscosity, premium sugarcane molasses. Serving Rajkot metal foundries, Ahmedabad pharma units, and Anand cattle feed manufacturers with guaranteed Brix specifications.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Left Column: Extensive Content */}
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Dependable Sugarcane Molasses Sourcing Across Gujarat
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Gujarat is one of India&apos;s most industrially advanced states, hosting massive manufacturing sectors. B2B enterprises across <strong>Ahmedabad, Rajkot, Vadodara, Ankleshwar, Vapi, and Surat</strong> require a stable supply of high-purity raw materials. Saarthi Organics meets this demand by delivering premium sugarcane molasses, sourced directly from leading South Gujarat sugar cooperative mills and adjacent agricultural belts.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our procurement desk maintains direct trade relationships with large-capacity mills in Bardoli, Gandevi, Maroli, and Madhi. By coordinating directly at the source, we bypass intermediate brokers, ensuring that our B2B partners in Gujarat receive pure, unadulterated, and high-density liquid molasses. Every tanker load is verified for Brix density and total reducing sugars to ensure consistent performance in your production lines.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Gujarat B2B Industries We Serve</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our sugarcane molasses is optimized to support several key industrial sectors in Gujarat:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li><strong>Metal Casting Foundries (Rajkot):</strong> Rajkot&apos;s casting foundries use our high-Brix molasses as a core binder. It forms a solid carbon structure with silica sand, resisting intense heat and ensuring mold integrity during metal pours.</li>
              <li><strong>Pharmaceuticals & Biotech (Ahmedabad & Vadodara):</strong> Pharmaceutical plants utilize our traceable, high-sugar molasses as a biological growth medium for fermenting active pharmaceutical ingredients, antibiotics, and vitamins.</li>
              <li><strong>Chemical Manufacturing (Ankleshwar & Vapi):</strong> Chemical formulating units use molasses as a carbon source, natural binder, and raw material for synthesizing bio-based chemicals and agricultural inputs.</li>
              <li><strong>Cattle Feed Plants (Anand & Mehsana):</strong> Gujarat&apos;s dairy cooperatives use our molasses to pelletize animal feed, improve palatability, and add energy density to cattle rations.</li>
            </ul>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>GST Compliance & Long-Distance Tanker Logistics</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Operating in Gujarat requires strict adherence to commercial compliance standards. Saarthi Organics is fully GST-aligned. We provide digital e-way bills, instant weighbridge slips, and detailed invoices, allowing procurement heads to easily claim Input Tax Credit without tax processing complications.
            </p>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              We manage transport via our fleet of specialized liquid road tankers. Each vehicle undergoes cleaning before loading to prevent contamination, ensuring that the molasses discharged at your facility matches the purity levels measured at the mill gates.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Cooperative Mill Sourcing</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Direct procurement partnerships with South Gujarat cooperative sugar mills guarantee stable inventory year-round.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Rigorous Quality Audits</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Strict pre-loading checks verify Brix and sugar percentages, matching the precise requirements of chemical and pharma buyers.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sourcing Desk & Specifications */}
          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px', fontFamily: "'Cinzel', serif" }}>Gujarat Sourcing Desk</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Secure reliable bulk supply and negotiate seasonal volume contracts for Gujarat industrial plants.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=gujarat&subject=Gujarat Bulk Sourcing Inquiry" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }}>
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
            <span className="section-label">Gujarat Support FAQ</span>
            <h2 className="section-title">Regional Sourcing & Logistics FAQ</h2>
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
