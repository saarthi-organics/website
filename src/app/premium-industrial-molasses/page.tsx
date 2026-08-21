import type { Metadata } from 'next';
import Image from 'next/image';
import SpecTable from '@/components/SpecTable';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Industrial Molasses Supplier & Specifications | Saarthi Organics',
  description: 'Detailed technical specification datasheet for premium industrial molasses. Review brix parameters, total reducing sugars, and packaging formats for bulk industrial buyers.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/premium-industrial-molasses',
  },
};

export default function PremiumIndustrialMolasses() {
  const faqs = [
    {
      q: "What is the Minimum Order Quantity (MOQ)?",
      a: "Our standard MOQ is 20 - 50 Metric Tons (MT), which corresponds to one single liquid tanker load. For smaller quantities packed in IBC containers or drums, please consult our sourcing desk for logistics availability."
    },
    {
      q: "What documentation accompanies a dispatch?",
      a: "Each tanker is dispatched with a Tax Invoice, E-Way Bill, and a verified Weighment Slip. Sourcing documentation or typical specifications can be discussed and provided on request where available."
    },
    {
      q: "How should industrial molasses be stored?",
      a: "Molasses should be stored in ventilated steel or concrete tanks at room temperature. It is highly viscous, so storage tanks should have appropriate bottom discharge valves and, if operating in cold climates, heating coils to maintain flowability."
    },
    {
      q: "Do you supply organic certification?",
      a: "Our standard offering is industrial-grade molasses derived from sugarcane processing. Sourcing specific organic or certified batches is subject to availability. If your application requires a particular grade or certification, please discuss this with our sourcing team before quotation."
    }
  ];

  return (
    <main style={{ marginTop: '72px' }}>
      <Breadcrumbs items={[{ name: 'Premium Industrial Molasses', href: '/premium-industrial-molasses' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": "https://www.saarthiorganics.com/premium-industrial-molasses/#product",
            "name": "Premium Industrial Sugarcane Molasses",
            "description": "Heavy industrial-grade sugarcane molasses with a Brix level of 82%-88% and Total Reducing Sugars (TRS) of 45%-50%. Perfect carbon substrate for fermentation, bio-ethanol, yeast, foundries, and cattle feed.",
            "brand": {
              "@type": "Brand",
              "name": "Saarthi Organics"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Saarthi Organics",
              "url": "https://www.saarthiorganics.com/"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "price": "Negotiable",
              "offerCount": "1"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Brix Density",
                "value": "82% - 88%"
              },
              {
                "@type": "PropertyValue",
                "name": "Total Reducing Sugars (TRS)",
                "value": "45% - 50%"
              },
              {
                "@type": "PropertyValue",
                "name": "Packaging",
                "value": "Bulk Tankers (20-50 MT), IBC Totes (1000L), MS/HDPE Drums (200L)"
              }
            ]
          })
        }}
      />
      
      {/* Hero Banner */}
      <div className="subpage-hero">
        <Image src="/hero_product.png" alt="" fill priority className="subpage-hero-bg" style={{ objectFit: 'cover' }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Product Catalog</span>
          <h1 className="subpage-hero-title">Premium Industrial Molasses</h1>
          <p className="subpage-hero-desc">
            Heavy, concentrated liquid sugarcane co-product. Rich in fermentable sugars, minerals, and organic solids, graded specifically for manufacturing and industrial processes.
          </p>
        </div>
      </div>

      {/* Product Description */}
      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="hero-image-container">
              <Image 
                src="/molasses_quality.png" 
                alt="Premium viscous sugarcane molasses raw material under laboratory quality inspection" 
                width={500} 
                height={400} 
                style={{ objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">High Solids, High Sugar Industrial Feedstock</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Sugarcane molasses is the final viscous liquid obtained from the sugarcane refining process after the third crystallization cycle. Because the majority of the sucrose has been extracted, this molasses contains highly concentrated natural minerals, organic compounds, and uncrystallized reducing sugars.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              Our standard industrial sugarcane molasses typically features a high dry-matter content (Typical Brix Range: 82%–88%) and Total Reducing Sugars (Typical TRS: 45%–50%). This makes it an efficient carbon substrate for fermentation processes, bio-ethanol distillation, and binder formulations.
            </p>
            
            <div className="symmetrical-grid-two-col">
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong>Brix: 82% - 88%</strong>
                <p>High active dry solids count</p>
              </div>
              <div className="symmetrical-detail-box" style={{ margin: 0 }}>
                <strong>TRS: 45.0% - 50.0%</strong>
                <p>Excellent fermentation yield potential</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Specifications Table Section */}
      <section style={{ background: 'var(--bg-light)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Chemical Composition</span>
            <h2 className="section-title">Technical Specification Datasheet</h2>
            <p className="section-desc">We maintain consistent viscosity and sugar levels across all supply runs.</p>
          </div>
          <SpecTable />
        </div>
      </section>

      {/* Storage and Handling section */}
      <section>
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">Customer-Side Molasses Handling & Storage Considerations</h2>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              The following information is intended for customers who receive and store molasses at their own facilities. Saarthi Organics supplies molasses for industrial applications and does not operate customer storage facilities. Due to its high viscosity, industrial sugarcane molasses requires specific equipment and environmental considerations to maintain flowability.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="symmetrical-detail-box">
                <strong>Plant Storage Tanks</strong>
                <p>
                  Mild steel, stainless steel, or concrete tanks are recommended. Proper top ventilation is mandatory to prevent moisture condensation, which can dilute the top layer and trigger wild yeast fermentation.
                </p>
              </div>
              <div className="symmetrical-detail-box">
                <strong>Temperature & Viscosity Control</strong>
                <p>
                  Keep storage temperatures below 40°C. In cold seasons, maintain warmth around 20-25°C using low-pressure steam or hot water jacket coils to facilitate pumping without degradation.
                </p>
              </div>
              <div className="symmetrical-detail-box">
                <strong>Pumping Systems</strong>
                <p>
                  Utilize positive displacement pumps (gear pumps or rotary lobe pumps) paired with wide-diameter feed lines to safely manage high-density viscous flows.
                </p>
              </div>
            </div>
          </div>

          <div style={{ flex: 0.9, minWidth: '300px' }}>
            <div className="hero-image-container">
              <Image 
                src="/molasses_handling.png" 
                alt="Industrial pumping and handling connections for bulk road tankers" 
                width={500} 
                height={500} 
                style={{ objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* B2B FAQ Grid */}
      <section style={{ background: 'var(--bg-light)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Procurement FAQs</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <div className="faq-question">
                  <span>{faq.q}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Call */}
      <FinalCTA />

    </main>
  );
}
