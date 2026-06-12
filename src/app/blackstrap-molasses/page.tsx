import type { Metadata } from 'next';
import Image from 'next/image';
import SpecTable from '@/components/SpecTable';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Industrial Blackstrap Molasses Specifications & TDS | Saarthi Organics',
  description: 'Detailed technical specification datasheet for blackstrap molasses. Review brix parameters, total reducing sugars, and packaging formats for bulk industrial buyers.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/blackstrap-molasses',
  },
};

export default function BlackstrapMolasses() {
  const faqs = [
    {
      q: "What is the Minimum Order Quantity (MOQ)?",
      a: "Our standard MOQ is 20 - 50 Metric Tons (MT), which corresponds to one single liquid tanker load. For smaller quantities packed in IBC containers or drums, please consult our sourcing desk for logistics availability."
    },
    {
      q: "What documentation accompanies a dispatch?",
      a: "Each tanker is dispatched with a Tax Invoice, E-Way Bill, and a verified Weighment Slip. A Certificate of Analysis (COA) specifying Brix, pH, and Total Reducing Sugars (TRS) can be provided on request."
    },
    {
      q: "How should industrial molasses be stored?",
      a: "Molasses should be stored in ventilated steel or concrete tanks at room temperature. It is highly viscous, so storage tanks should have appropriate bottom discharge valves and, if operating in cold climates, heating coils to maintain flowability."
    },
    {
      q: "Do you supply organic certification?",
      a: "We trade heavy blackstrap molasses, which is a natural co-product of raw sugarcane sugar refining. While it is chemical-free and 100% natural, it is primarily graded as industrial-grade. If you require food-grade or specific certified organic batches, please notify our team in advance."
    }
  ];

  return (
    <main style={{ marginTop: '72px' }}>
      
      {/* Hero Banner */}
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Product Catalog</span>
          <h1 className="subpage-hero-title">Industrial Blackstrap Molasses</h1>
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
                alt="Premium viscous blackstrap molasses raw material under laboratory quality inspection" 
                width={500} 
                height={400} 
                style={{ objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          <div style={{ flex: 1.1, minWidth: '300px' }}>
            <h2 className="section-title">High Solids, High Sugar Industrial Feedstock</h2>
            <p className="section-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Blackstrap molasses is the final viscous liquid obtained from the sugarcane refining process after the third crystallization cycle. Because the majority of the sucrose has been extracted, blackstrap contains highly concentrated natural minerals, organic compounds, and uncrystallized reducing sugars.
            </p>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              Our standard industrial blackstrap features a high dry-matter content (Brix level of 82% - 88%) and excellent Total Reducing Sugars (TRS ≥ 45%). This makes it a highly efficient carbon substrate for fermentation processes, bio-ethanol distillation, and structural binders.
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
            <h2 className="section-title">On-Site Storage & Handling Guidelines</h2>
            <p className="section-desc" style={{ marginBottom: '24px', lineHeight: '1.6' }}>
              Due to its high viscosity, industrial blackstrap molasses requires specific equipment and environment controls to maintain flowability and prevent pump cavitation.
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
