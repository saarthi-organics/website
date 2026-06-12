"use client";

import { useEffect } from 'react';

export default function AttributionTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      // 1. Capture UTM parameters from URL search query
      const urlParams = new URLSearchParams(window.location.search);
      const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      
      utms.forEach(param => {
        const val = urlParams.get(param);
        if (val) {
          localStorage.setItem(`saarthi_${param}`, val.trim());
        }
      });

      // 2. Capture Landing Page (first-touch, only if not set yet)
      if (!localStorage.getItem('saarthi_landing_page')) {
        localStorage.setItem('saarthi_landing_page', window.location.href);
      }

      // 3. Capture Referrer (first-touch, only if not set yet)
      if (!localStorage.getItem('saarthi_referrer')) {
        const ref = document.referrer || '';
        localStorage.setItem('saarthi_referrer', ref || 'Direct Visit');
      }

      // 4. Classify and Determine Traffic Source
      let trafficSource = 'Direct Visit';
      const utmSource = urlParams.get('utm_source') || localStorage.getItem('saarthi_utm_source');
      const utmMedium = urlParams.get('utm_medium') || localStorage.getItem('saarthi_utm_medium');
      const referrer = document.referrer || localStorage.getItem('saarthi_referrer') || '';

      if (utmSource) {
        const srcLower = utmSource.toLowerCase();
        const medLower = (utmMedium || '').toLowerCase();
        if (srcLower === 'google' && (medLower === 'cpc' || medLower === 'ppc' || medLower === 'adwords')) {
          trafficSource = 'Google Ads';
        } else if (srcLower === 'facebook' && (medLower === 'cpc' || medLower === 'ads')) {
          trafficSource = 'Meta Ads';
        } else {
          trafficSource = utmSource.charAt(0).toUpperCase() + utmSource.slice(1);
        }
      } else if (referrer && referrer !== 'Direct Visit') {
        try {
          const refUrl = new URL(referrer);
          const host = refUrl.hostname.toLowerCase();
          
          if (host.includes('google.com')) {
            trafficSource = 'Google Organic';
          } else if (host.includes('wa.me') || host.includes('whatsapp.com')) {
            trafficSource = 'WhatsApp';
          } else if (
            host.includes('facebook.com') || 
            host.includes('instagram.com') || 
            host.includes('t.co') || 
            host.includes('twitter.com') || 
            host.includes('linkedin.com')
          ) {
            trafficSource = 'Social Media';
          } else {
            trafficSource = `Referral: ${refUrl.hostname}`;
          }
        } catch {
          trafficSource = 'Referral';
        }
      }
      
      localStorage.setItem('saarthi_traffic_source', trafficSource);
    } catch (err) {
      console.error('[ATTRIBUTION TRACKER ERROR] Failed to record tracking logs:', err);
    }
  }, []);

  return null;
}
