import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      q: "What is your standard Minimum Order Quantity (MOQ)?",
      a: "Our standard industrial MOQ is 20 - 50 Metric Tons (MT), which fills one standard single-compartment liquid tanker truck. For bulk contract procurement, we coordinate multi-tanker daily or weekly dispatches to feed distilleries or feed mills."
    },
    {
      q: "What is the typical delivery turnaround time?",
      a: "For regions in North India (Haryana, Punjab, Uttar Pradesh, and Rajasthan), deliveries are typically made within 48 to 72 hours from purchase order confirmation. For PAN India delivery regions, turnaround times are calculated based on travel transit times."
    },
    {
      q: "How do you handle sugar crushing off-season shortages?",
      a: "Sugar mills only crush cane from November through April. During the off-season (May to October), raw molasses is held at the sugar mills' associated storage tanks. We secure priority supply allocations directly through these milling networks, guaranteeing year-round availability for our contract buyers without interruption."
    },
    {
      q: "Do you supply Certificates of Analysis (COA)?",
      a: "Yes. Every bulk shipment leaves the loading terminal with a dedicated laboratory COA slip detailing the Brix level (dry matter), Total Reducing Sugars (TRS), ash content, specific gravity, and pH value of the specific batch."
    },
    {
      q: "Is your billing GST compliant?",
      a: "Yes, Saarthi Organics is a fully registered tax-paying corporate entity. We issue standard Tax Invoices showing our GSTIN (06AFEFS2128A1ZJ) and provide standard e-way bills to ensure legal transit compliance and seamless Input Tax Credit (ITC) reconciliation."
    },
    {
      q: "Can we request a pre-shipment laboratory sample?",
      a: "Yes. For corporate contract buyers, our laboratory can coordinate a sealed 500ml sample from the current dispatch batch alongside its corresponding analysis sheet. Contact our sales desk to arrange courier routing."
    }
  ];

  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Buyer Resources</span>
          <h1 className="subpage-hero-title">Frequently Asked Questions</h1>
          <p className="subpage-hero-desc">
            Find answers to commonly asked questions regarding industrial molasses specifications, transport tanker logistics, billing compliance, and sourcing.
          </p>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section>
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
      </section>

      {/* Sourcing Action */}
      <section style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <h2 className="section-title">Have a specific procurement requirement?</h2>
        <p className="section-desc" style={{ marginBottom: '32px' }}>
          Contact our commercial desk directly to discuss custom chemical specifications, delivery coordinates, or contract structures.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">
            Submit RFQ
          </Link>
          <a href="tel:+917055552535" className="btn-secondary">
            Call Sourcing Desk
          </a>
        </div>
      </section>

    </main>
  );
}
