"use client";

import Link from 'next/link';

export default function StickyActionBar() {
  const trackClick = (action: string) => {
    if (typeof window !== 'undefined') {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dl = (window as any).dataLayer || [];
        dl.push({
          event: 'sticky_bar_click',
          buttonAction: action,
          pageUrl: window.location.href,
          pageTitle: document.title,
          trafficSource: localStorage.getItem('saarthi_traffic_source') || 'Direct Visit',
          utmSource: localStorage.getItem('saarthi_utm_source') || '',
          utmMedium: localStorage.getItem('saarthi_utm_medium') || '',
          utmCampaign: localStorage.getItem('saarthi_utm_campaign') || ''
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).dataLayer = dl;
      } catch (err) {
        console.error('[TRACKING ERROR]', err);
      }
    }
  };

  return (
    <div className="sticky-action-bar" aria-label="Mobile Contact Bar">
      <div className="sticky-action-bar-buttons">
        {/* Button 1: Call Now */}
        <a
          href="tel:+917055552535"
          className="sticky-btn sticky-btn-call"
          onClick={() => trackClick('call')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Call Now</span>
        </a>

        {/* Button 2: WhatsApp */}
        <a
          href="https://wa.me/917055552535?text=Hi,%20I'm%20interested%20in%20Saarthi%20Organics%20industrial%20molasses%20bulk%20supply."
          className="sticky-btn sticky-btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('whatsapp')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.09-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Button 3: Request Quote */}
        <Link
          href="/#contact-desk"
          className="sticky-btn sticky-btn-quote"
          onClick={() => trackClick('request_quote')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span>Request Quote</span>
        </Link>
      </div>
    </div>
  );
}
