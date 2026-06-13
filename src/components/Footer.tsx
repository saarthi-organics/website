import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Company Column */}
        <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '14px', marginBottom: '24px' }}>
            <div style={{
              position: 'relative',
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--accent-gold)',
              boxShadow: '0 0 12px rgba(212, 175, 55, 0.15)',
              background: '#0A0A0A'
            }}>
              <Image 
                src="/logo_heritage.jpg" 
                alt="Saarthi Organics Heritage Seal" 
                fill
                sizes="96px"
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <h3 className="gradient-text" style={{ margin: 0, fontFamily: "'Cinzel', serif", fontSize: '1.75rem', fontWeight: 900 }}>
              Saarthi Organics
            </h3>
          </div>
          <p style={{ marginBottom: '20px' }}>
            Dependable bulk molasses procurement and distribution partner. We supply industrial-grade blackstrap molasses via our own transport fleet across North India and PAN India.
          </p>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <strong>GSTIN:</strong> 06AFEFS2128A1ZJ
          </div>
        </div>

        {/* Procurement Links */}
        <div className="footer-column">
          <h4>Procurement</h4>
          <ul>
            <li><Link href="/blackstrap-molasses">Blackstrap Molasses</Link></li>
            <li><Link href="/quality-and-sourcing">Quality Assurance</Link></li>
            <li><Link href="/logistics">Logistics & Fleet</Link></li>
            <li><Link href="/blog">Sourcing Blog</Link></li>
          </ul>
        </div>

        {/* Industry Focus */}
        <div className="footer-column">
          <h4>Industries</h4>
          <ul>
            <li><Link href="/molasses-for-distilleries">Distilleries</Link></li>
            <li><Link href="/molasses-for-cattle-feed">Cattle Feed</Link></li>
            <li><Link href="/molasses-for-yeast-industry">Yeast Production</Link></li>
            <li><Link href="/molasses-for-pharma">Pharma Industry</Link></li>
            <li><Link href="/molasses-for-foundries">Foundry Binder</Link></li>
          </ul>
        </div>

        {/* Supply Regions */}
        <div className="footer-column">
          <h4>Supply Regions</h4>
          <ul>
            <li><Link href="/molasses-supplier-haryana">Haryana (Karnal)</Link></li>
            <li><Link href="/molasses-supplier-punjab">Punjab (Ludhiana)</Link></li>
            <li><Link href="/molasses-supplier-rajasthan">Rajasthan (Jaipur)</Link></li>
            <li><Link href="/molasses-supplier-delhi-ncr">Delhi NCR</Link></li>
            <li><Link href="/molasses-supplier-uttarakhand">Uttarakhand</Link></li>
          </ul>
        </div>

        {/* Corporate Contact */}
        <div className="footer-column">
          <h4>Sourcing Desk</h4>
          <div className="footer-info">
            <div className="footer-info-item">
              <div>
                <strong>Office Address:</strong><br />
                Farm House, Liberty Chowk,<br />
                Karnal, Haryana - 132001
              </div>
            </div>
            <div className="footer-info-item">
              <div>
                <strong>Direct Contact:</strong><br />
                +91-7055552535<br />
                +91-9927029029
              </div>
            </div>
            <div className="footer-info-item">
              <div>
                <strong>Email:</strong><br />
                contact@saarthiorganics.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Disclaimer */}
      <div style={{
        borderTop: '1px solid var(--border-color)',
        paddingTop: '20px',
        paddingBottom: '10px',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '0.78rem',
          color: 'var(--text-secondary)',
          opacity: 0.7,
          lineHeight: '1.5',
          margin: '0 auto',
          maxWidth: '1000px'
        }}>
          Saarthi Organics supplies industrial-grade molasses for approved commercial and industrial applications. Product suitability should be evaluated based on individual operational requirements.
        </p>
      </div>

      {/* Footer Bottom copyright and legal */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Saarthi Organics. All rights reserved. | Industrial Sourcing & Logistics Partner.</p>
        <div className="footer-legal-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
