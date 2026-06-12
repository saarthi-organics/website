import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        {/* Company Column */}
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <Image 
              src="/logo_heritage.jpg" 
              alt="Saarthi Organics Heritage Seal" 
              width={42} 
              height={42} 
              style={{ 
                objectFit: 'cover', 
                borderRadius: '50%', 
                border: '1px solid var(--accent-gold)',
                boxShadow: '0 0 6px rgba(212, 175, 55, 0.3)'
              }} 
            />
            <h3 className="gradient-text" style={{ margin: 0, fontFamily: "'Cinzel', serif" }}>Saarthi Organics</h3>
          </div>
          <p>
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
            <li><Link href="/case-studies">Supply Scenarios</Link></li>
          </ul>
        </div>

        {/* Industry Focus */}
        <div className="footer-column">
          <h4>Industries Served</h4>
          <ul>
            <li><Link href="/molasses-for-distilleries">Distilleries</Link></li>
            <li><Link href="/molasses-for-cattle-feed">Cattle Feed</Link></li>
            <li><Link href="/molasses-for-yeast-industry">Yeast Production</Link></li>
            <li><Link href="/molasses-for-tobacco-industry">Tobacco & Foundries</Link></li>
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
