"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
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
      <section style={{ padding: '40px 24px 80px 24px' }}>
        <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
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
                    maxHeight: isOpen ? '250px' : '0px',
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
      <section style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <h2 className="section-title">Have a specific procurement requirement?</h2>
        <p className="section-desc" style={{ marginBottom: '32px' }}>
          Contact our commercial desk directly to discuss custom chemical specifications, delivery coordinates, or contract structures.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-primary">
            Submit RFQ
          </Link>
          <a href="tel:+91-7055552535" className="btn-secondary">
            Call Sourcing Desk
          </a>
        </div>
      </section>

    </main>
  );
}
