import type { Metadata } from 'next';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Molasses Supplier Punjab | Khanna & Ludhiana Sourcing | Saarthi Organics',
  description: 'Industrial sugarcane molasses supplier in Punjab. Sourced for bio-ethanol distilleries, yeast plants, and cattle feed mills in Khanna, Jalandhar, Patiala, and Ludhiana.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-punjab',
  },
};

export default function PunjabSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Punjab Distribution)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": ["+91-7055552535", "+91-9927029029", "+91-9837022300"],
    "email": "contact@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ludhiana",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-punjab"
  };

  const regionalFaqs = [
    {
      q: "How does Saarthi Organics manage molasses shipments into Punjab?",
      a: "All shipments destined for Punjab are dispatched in sealed liquid tankers from our nearest mill sourcing points. Our logistics team handles all state border clearance paperwork, excise transit passes (from points of origin through Punjab entry borders), and real-time GPS tracking to ensure uninterrupted delivery."
    },
    {
      q: "Why is Khanna a primary destination for your molasses supply in Punjab?",
      a: "Khanna houses one of the largest concentrations of cattle and animal feed manufacturers in Asia. We supply feed millers in Khanna and Ludhiana with high-viscosity, mineral-rich sugarcane molasses that binds feed pellets and improves animal energy intake."
    },
    {
      q: "Can you supply high-sugar molasses suitable for Punjab distilleries?",
      a: "Yes. We source specific high-purity batches with a Total Reducing Sugars (TRS) value of 45% to 48%. This high sugar density is ideal for bio-ethanol and potable alcohol distilleries in Patiala, Sangrur, and Firozpur, ensuring high fermentation yields."
    },
    {
      q: "What is your dispatch capacity and seasonal availability for Punjab buyers?",
      a: "We operate a private fleet of over 40 liquid road tankers, allowing us to deliver up to 500 Metric Tons of sugarcane molasses daily. Thanks to our storage contracts, we guarantee stable year-round supply even during the summer sugar mill crushing off-season."
    }
  ];

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Breadcrumbs items={[{ name: 'Punjab Supplier', href: '/molasses-supplier-punjab' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_logistics.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Punjab B2B Sourcing Channel</span>
          <h1 className="subpage-hero-title">Bulk Sugarcane Molasses Supplier in Punjab</h1>
          <p className="subpage-hero-desc">
            Direct mill allocations of industrial-grade liquid sugarcane molasses. Serving feed mills in Khanna, distilleries, and bio-fuel plants across Punjab with full excise clearance.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Left Column: Extensive Content */}
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Dependable Sugarcane Molasses Supply for Punjab&apos;s B2B Industries
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Punjab is a core industrial and agricultural powerhouse of India. B2B sectors in this region—ranging from dairy feed manufacturing in <strong>Khanna and Ludhiana</strong> to bio-ethanol distilleries in <strong>Patiala, Sangrur, and Firozpur</strong>—depend on massive volumes of sugarcane molasses. Saarthi Organics offers a streamlined, highly secure supply chain that directly bridges the sugar-rich crop belts with Punjab&apos;s industrial hubs.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Unlike unorganized brokers who offer inconsistent quality and uncertain delivery timelines, Saarthi Organics operates on a contract-backed sourcing structure. We source our molasses from technologically advanced sugar mills, ensuring that the physical and chemical properties of each shipment are standardized. Our clients receive molasses with verified Brix percentages (typically 82% to 84%) and high fermentable sugars.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Punjab Industries We Support</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              We have custom-tailored our sourcing criteria to meet the exact demands of Punjab&apos;s leading sectors:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li><strong>Cattle Feed Mills (Khanna & Ludhiana):</strong> As the dairy capital of Northern India, Punjab requires highly nutritive feeds. Our molasses improves feed palatability, acts as a dust control agent, and binds feed pellets securely.</li>
              <li><strong>Bio-Ethanol Distillation (Sangrur, Patiala, Firozpur):</strong> With the government’s ethanol blending program, distilleries need high fermentable sugars. Our molasses features a low unfermentable sugar ratio, ensuring optimal ethanol conversion rates.</li>
              <li><strong>Agricultural Composting (Bathinda & Jalandhar):</strong> Organic fertilizer manufacturers use our molasses as a rich carbon source to cultivate microbial activity in soil conditioners.</li>
            </ul>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Logistics Integrity & Border Excise Clearances</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Transporting industrial molasses across state borders into Punjab requires rigorous compliance. Saarthi Organics maintains an in-house excise documentation team that coordinates directly with state authorities. We manage all transit passes and ensure that e-way bills and excise permits are properly matched to prevent delays at entry points like Lalru and Shambhu borders.
            </p>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our tankers are constructed with heavy-duty mild steel (MS) and stainless steel (SS) designed for liquid molasses transportation. With digital sealing, GPS tracking, and automated weighment validation, we guarantee that the weight loaded at the mill matches the weight discharged at your plant.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Khanna Feed Corridor</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Specialized low-viscosity molasses dispatches customized for smooth integration with feed mill pelleting equipment.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Excise Pass Alignment</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Complete processing of inter-state import permits and tax clearance documents before vehicles leave the sourcing mills.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sourcing Desk & Specifications */}
          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px', fontFamily: "'Cinzel', serif" }}>Punjab Sourcing Desk</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Secure stable volume contracts for Punjab feed mills and distilleries. Speak to our logistics coordinators.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=punjab&subject=Punjab Bulk Sourcing Inquiry" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }}>
                  Request Tanker Quote
                </Link>
                <a href="tel:+917055552535" className="btn-secondary" style={{ textAlign: 'center', textDecoration: 'none' }}>
                  Call +91-7055552535
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
            <span className="section-label">Punjab Support FAQ</span>
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
