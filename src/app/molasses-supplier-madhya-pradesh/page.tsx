import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Molasses Supplier Madhya Pradesh | Bulk Sourcing | Saarthi Organics',
  description: 'Industrial sugarcane molasses supplier in Madhya Pradesh. Serving alcohol distilleries in Indore, yeast units, and cattle feed mills across Ujjain, Dewas, and Bhopal.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/molasses-supplier-madhya-pradesh',
  },
};

export default function MadhyaPradeshSupplierPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saarthi Organics (Madhya Pradesh Distribution)",
    "image": "https://www.saarthiorganics.com/logo_heritage.jpg",
    "telephone": ["+91-7055552535", "+91-9927029029", "+91-9837022300"],
    "email": "connect@saarthiorganics.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "url": "https://www.saarthiorganics.com/molasses-supplier-madhya-pradesh"
  };

  const regionalFaqs = [
    {
      q: "How does Saarthi Organics distribute bulk molasses in Madhya Pradesh?",
      a: "We manage bulk dispatches using our own liquid tanker fleet. We source molasses from cooperative and private mills in the Malwa region (like Ujjain and Sehore) and coordinate inter-state transit lines from adjacent crushing zones to ensure a steady supply for MP buyers."
    },
    {
      q: "Why is Ujjain-Dewas a key destination for your molasses supplies?",
      a: "Ujjain and Dewas house major industrial fermentation, chemical processing, and solvent extraction plants. We supply these facilities with high-Brix, un-diluted sugarcane molasses that serves as a dependable carbon feedstock for their chemical reactions."
    },
    {
      q: "Do you provide excise permit documentation for MP distilleries?",
      a: "Yes. Our compliance desk handles the entire state excise permitting workflow. We ensure all transport passes, digital e-way bills, and transit declarations are fully processed before the tankers arrive at your facility."
    },
    {
      q: "What is the standard delivery lead time for MP locations?",
      a: "For contracted volume partners, we schedule dispatches to match your production cycles, ensuring tankers arrive within 48 to 72 hours of order confirmation. We also maintain emergency buffer stocks to prevent plant shutdowns."
    }
  ];

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Breadcrumbs items={[{ name: 'Madhya Pradesh Supplier', href: '/molasses-supplier-madhya-pradesh' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <div className="subpage-hero">
        <Image src="/hero_logistics.png" alt="" fill priority className="subpage-hero-bg" style={{ objectFit: 'cover' }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Madhya Pradesh B2B Sourcing Hub</span>
          <h1 className="subpage-hero-title">Bulk Sugarcane Molasses Supplier in Madhya Pradesh</h1>
          <p className="subpage-hero-desc">
            Premium liquid sugarcane molasses for central India. Delivering high-TRS fermentable sugar feedstock to Indore distilleries, Bhopal feed plants, and Dewas chemical units.
          </p>
        </div>
      </div>

      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Left Column: Extensive Content */}
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Dependable Sugarcane Molasses Sourcing Across Madhya Pradesh
            </h2>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Madhya Pradesh is a critical hub for industrial fermentation, bio-ethanol distillation, and commercial dairy farming in central India. Key manufacturing corridors across <strong>Indore, Bhopal, Ujjain, Dewas, and Jabalpur</strong> require high-volume deliveries of sugarcane molasses. Saarthi Organics provides a robust distribution channel that connects regional sugar crushing zones directly with MP&apos;s leading manufacturers.
            </p>
            
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              We source our molasses from premier mills in the Malwa region, as well as bordering sugar belts. This strategic sourcing network allows us to provide molasses with a high refractometric Brix value (typically 82.0% - 84.0%) and low unfermentable ash levels. By managing our own logistics fleet, we guarantee that every shipment arrives un-diluted and meets the technical specifications required by quality control heads.
            </p>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Madhya Pradesh B2B Industries We Serve</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Our sugarcane molasses is optimized to support several major sectors in the state:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li><strong>Bio-Ethanol & Potable Alcohol (Indore & Ujjain):</strong> Distilleries utilize our high-TRS molasses to maximize fermentation yields and achieve efficient alcohol conversion per metric ton of raw material.</li>
              <li><strong>Cattle Feed Plants (Bhopal & Jabalpur):</strong> Animal feed manufacturers use our viscous molasses as a carbohydrate binder, reducing pellet dust and enhancing the nutritional intake of dairy cattle.</li>
              <li><strong>Yeast & Industrial Fermentation:</strong> Biological processing facilities rely on our clean, filtered molasses as a growth medium for cultivating active yeast and enzymes.</li>
              <li><strong>Organic Composting:</strong> Fertilizer formulators use sugarcane molasses as a rich carbon additive to feed microbial populations in soil conditioning products.</li>
            </ul>

            <h3 style={{ fontSize: '1.4rem', margin: '36px 0 16px 0', color: 'var(--accent-gold)' }}>Excise Pass Alignment & Central India Logistics Lanes</h3>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              Transporting liquid molasses through Central India requires navigating strict state excise compliance guidelines. Saarthi Organics manages the entire administrative workflow. Our compliance team coordinates with state excise portals to secure all necessary transport permits and matching GST e-way bills.
            </p>
            <p className="section-desc" style={{ marginBottom: '20px', textAlign: 'left', lineHeight: '1.6' }}>
              We operate a private fleet of specialized liquid road tankers. Each vehicle is equipped with digital sealing and GPS tracking to prevent cargo tampering. Our automated weighbridge validation ensures that the weight loaded at the mill gates matches the weight discharged at your plant.
            </p>

            <div className="symmetrical-grid-two-col" style={{ marginTop: '30px', marginBottom: '36px' }}>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Malwa Sourcing Desk</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Direct procurement links with sugar mills in Ujjain, Sehore, and adjacent belts ensure steady inventory year-round.</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong style={{ color: 'var(--accent-amber)' }}>Excise Compliant</strong>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>Full management of central India transit documentation, avoiding delays at state border checkpoints.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sourcing Desk & Specifications */}
          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '30px', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '12px', fontFamily: "'Cinzel', serif" }}>MP Sourcing Desk</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
                Secure stable volume contracts for Madhya Pradesh industrial plants. Speak to our logistics coordinators.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/contact?region=madhyapradesh&subject=Madhya Pradesh Bulk Sourcing Inquiry" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }}>
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
            <span className="section-label">MP Support FAQ</span>
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
