import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section style={{ 
      textAlign: 'center', 
      maxWidth: '800px', 
      margin: '80px auto 80px auto',
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>
        Looking for a Reliable Molasses Supply Partner?
      </h2>
      <p className="section-desc" style={{ marginBottom: '32px', fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'center', maxWidth: '640px' }}>
        Whether you require regular tanker deliveries, competitive bulk pricing, or dependable supply support, our team is ready to assist with your procurement requirements.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/contact" className="btn-primary">
          Request a Quote
        </Link>
        <Link href="/blackstrap-molasses#specifications" className="btn-secondary">
          Request Technical Details
        </Link>
      </div>
    </section>
  );
}
