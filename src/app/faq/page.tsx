"use client";

import { useState } from 'react';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      q: "What is the typical Brix range of your molasses?",
      a: "We supply heavy industrial blackstrap molasses with a standardized refractometric Brix range of 82.0% to 88.0% (titrated at 20°C). This ensures high density, high concentration of total soluble solids, and stable shelf life under proper storage parameters."
    },
    {
      q: "What industries commonly use your molasses?",
      a: "Our sugarcane-derived molasses serves as a vital raw material feedstock across multiple manufacturing sectors. Common applications include ethanol fermentation in distilleries, carbohydrate binding in animal cattle feed mills, carbon sourcing in yeast plants, sand core binder formulations in foundries, organic nutrients in agriculture, flavor humectants in tobacco, and growth substrates in pharmaceutical manufacturing."
    },
    {
      q: "What packaging formats are available?",
      a: "While bulk liquid tanker delivery is our primary distribution channel, we accommodate varied industrial requirements. Packaging formats include dedicated road tankers (20 to 50 Metric Tons capacity), heavy-duty 1000L IBC Totes (approximately 1.4 MT net weight), Flexibags for export containers (20-24 MT), and standardized 200L steel or HDPE drums."
    },
    {
      q: "Can tanker deliveries be arranged?",
      a: "Yes. Bulk tanker supply is our specialized operation. We coordinate logistics utilizing our in-house fleet of tankers, ensuring reliable transit routing and priority dispatch schedules directly to your plant receiving valves."
    },
    {
      q: "Do you provide GST-compliant invoices?",
      a: "Yes. Saarthi Organics is a fully registered corporate tax-paying entity (GSTIN: 06AFEFS2128A1ZJ). Every delivery is accompanied by a valid GST Tax Invoice (HSN Code 1703), transit e-way bills, and necessary state excise passes to ensure legal compliance and smooth Input Tax Credit (ITC) reconciliation."
    },
    {
      q: "Can recurring monthly supply contracts be supported?",
      a: "Yes. We specialize in coordinating annual and monthly supply contracts with locked-in volume commitments. This guarantees raw material security for plant heads during the seasonal sugar mill crushing off-season (May to October)."
    },
    {
      q: "How is pricing determined for bulk orders?",
      a: "Bulk contract pricing is formulated based on current ex-mill sugarcane crushing rates, volume commitments, and delivery transit distances from our sourcing hubs in Karnal and neighboring sugar mills. We provide formal quotations with transparent freight breakdown structures."
    },
    {
      q: "What information is required to request a quotation?",
      a: "To provide an accurate B2B quote, we request your target volume (in Metric Tons), frequency of dispatch (daily, weekly, or monthly), preferred packaging format, delivery site postal PIN code, and any specific unloading gate constraints (such as coupler sizes or pump requirements)."
    },
    {
      q: "Can deliveries be arranged on short notice?",
      a: "Yes. By maintaining buffer stock reserves at our dedicated sourcing yards and partner mill storage tanks, we coordinate emergency tanker runs within 24 to 48 hours for contracted buyers to prevent distillery or plant shutdown scenarios."
    },
    {
      q: "Do you support buyers across multiple locations?",
      a: "Yes. We coordinate multi-destination corporate accounts, allowing national procurement teams to negotiate unified supply terms while our logistics desk manages local dispatches to individual factory units."
    },
    {
      q: "What documents can be provided with dispatches?",
      a: "Every shipment is accompanied by a complete dispatch dossier: GST Tax Invoice, e-Way Bill, Mill weighment slip, Gate pass, transport permit, and a laboratory Certificate of Analysis (COA) documenting refractometer Brix and Total Reducing Sugars (TRS) metrics."
    },
    {
      q: "How should molasses be handled upon receipt?",
      a: "Molasses should be stored in steel or concrete tanks with specialized bottom discharge lines. Due to its high viscosity, we recommend using positive displacement rotary lobe pumps. For winter dispatches in cold climates, our tankers are fitted with internal steam-heating coils to drop the viscosity for rapid unloading."
    },
    {
      q: "What factors influence molasses quality consistency?",
      a: "Consistency is impacted by sugarcane crushing variables, crop maturity, and sugar mill separation efficiency. We maintain parameters by sourcing directly from high-capacity modern sugar mill refineries and running laboratory QA titrations prior to terminal tanker loading."
    },
    {
      q: "Can custom packaging requirements be accommodated?",
      a: "Yes. For special industrial operations, we can coordinate packaging into client-specified container sizes or food-grade lined drums. Please outline your requirements with our sourcing desk."
    },
    {
      q: "What is the recommended method for requesting technical information?",
      a: "Procurement heads and laboratory managers can request Technical Data Sheets (TDS), material safety data sheets (MSDS), and pre-shipment laboratory sample kits (500ml) via our RFQ desk or by clicking the 'Request Technical Details' button on our forms."
    }
  ];

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Buyer Resources</span>
          <h1 className="subpage-hero-title">Sourcing FAQ Desk</h1>
          <p className="subpage-hero-desc">
            Technical answers regarding molasses specifications, road tanker logistics, legal tax compliance, and commercial procurement contract parameters.
          </p>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section style={{ padding: '40px 24px 80px 24px' }}>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-card" style={{ marginBottom: '16px' }}>
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="faq-question"
                  style={{
                    width: '100%',
                    border: 'none',
                    textAlign: 'left',
                    color: isOpen ? 'var(--accent-gold)' : 'var(--text-primary)',
                    background: 'var(--bg-secondary)',
                    padding: '24px',
                    fontFamily: 'inherit',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', paddingRight: '12px' }}>{faq.q}</span>
                  {/* Premium Chevron Icon */}
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      color: isOpen ? 'var(--accent-gold)' : 'var(--text-secondary)',
                      flexShrink: 0
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                {/* Answer content with smooth height transition container */}
                <div 
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: 'var(--bg-surface)'
                  }}
                >
                  <div className="faq-answer" style={{ padding: '24px', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sourcing Action */}
      <FinalCTA />

    </main>
  );
}
