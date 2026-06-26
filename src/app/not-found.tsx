import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: 'calc(100vh - 150px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      <div style={{ maxWidth: '640px', width: '100%', textAlign: 'center', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '50px 30px', borderRadius: '8px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
        
        <span style={{ fontSize: '4.5rem', display: 'block', marginBottom: '16px' }}>🔍</span>
        
        <h1 style={{ fontSize: '2.2rem', fontFamily: "'Cinzel', serif", color: 'var(--accent-gold)', marginBottom: '12px', fontWeight: 800 }}>
          404 - Page Not Found
        </h1>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '32px' }}>
          The molasses sourcing page or resource you are looking for has been moved, renamed, or is temporarily unavailable. 
        </p>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Direct Sourcing Shortcuts
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }} className="notfound-grid">
            <Link href="/" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '4px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', display: 'block', transition: 'background 0.2s' }} className="contact-link-hover">
              Home Page
            </Link>
            <Link href="/premium-industrial-molasses" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '4px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', display: 'block', transition: 'background 0.2s' }} className="contact-link-hover">
              Product Specifications
            </Link>
            <Link href="/logistics" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-light)', borderRadius: '4px', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', display: 'block', transition: 'background 0.2s' }} className="contact-link-hover">
              Logistics & Fleet
            </Link>
            <Link href="/contact" style={{ padding: '12px', background: 'var(--accent-gold)', borderRadius: '4px', textDecoration: 'none', color: '#111111', fontWeight: 700, fontSize: '0.9rem', display: 'block', transition: 'opacity 0.2s' }}>
              Request RFQ / Contact
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
