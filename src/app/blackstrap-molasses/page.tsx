import Image from 'next/image';
import Link from 'next/link';
import SpecTable from '@/components/SpecTable';

export default function BlackstrapMolasses() {
  const faqs = [
    {
      q: "What is the Minimum Order Quantity (MOQ)?",
      a: "Our standard MOQ is 20 - 50 Metric Tons (MT), which corresponds to one single liquid tanker load. For smaller quantities packed in IBC containers or drums, please consult our sourcing desk for logistics availability."
    },
    {
      q: "What documentation accompanies a dispatch?",
      a: "Each tanker leaves the sourcing terminal with a Tax Invoice, E-Way Bill, Weighment Slip from an authorized weighbridge, and a Certificate of Analysis (COA) specifying the Brix, pH, and Total Reducing Sugars (TRS) of the batch."
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
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '12px' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>Brix: 82% - 88%</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary-light)' }}>High active dry solids count</span>
              </div>
              <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '12px' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>TRS: 45.0% - 50.0%</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary-light)' }}>Excellent fermentation yield potential</span>
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
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>On-Site Storage & Handling Guidelines</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '16px' }}>🛢️</span>
            <h4 className="feature-card-title">Plant Storage Tanks</h4>
            <p className="feature-card-desc">For receiving delivered molasses, mild steel, stainless steel, or concrete tanks are recommended. Tanks must be properly vented to prevent condensation which can dilute the top layer and trigger yeast fermentation.</p>
          </div>
          
          <div className="feature-card">
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '16px' }}>🌡️</span>
            <h4 className="feature-card-title">Temperature Control</h4>
            <p className="feature-card-desc">Keep client storage temperatures below 40°C to prevent thermal degradation. In cold climates, maintain temperature around 20-25°C using low-pressure steam or hot water coils to facilitate pumping.</p>
          </div>

          <div className="feature-card">
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '16px' }}>💧</span>
            <h4 className="feature-card-title">Viscosity & Pumping</h4>
            <p className="feature-card-desc">Due to its high viscosity, use positive displacement pumps (gear or rotary lobe pumps) with larger diameter intake pipes to prevent pump cavitation and operational delays.</p>
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
      <section style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 className="section-title">Secure Your Contract Pricing</h2>
        <p className="section-desc" style={{ marginBottom: '32px' }}>
          We offer volume-based pricing discounts for annual contracts with guaranteed monthly tanker allocations.
        </p>
        <Link href="/contact" className="btn-primary">
          Submit RFQ Form
        </Link>
      </section>

    </main>
  );
}
