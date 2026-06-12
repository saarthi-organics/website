"use client";

import { useState } from 'react';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQClientProps {
  faqs: FAQItem[];
}

export default function FAQClient({ faqs }: FAQClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
  );
}
