import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main style={{ marginTop: '72px' }}>
      
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Connect with Us</span>
          <h1 className="subpage-hero-title">Contact Sourcing & Procurement Desk</h1>
          <p className="subpage-hero-desc">
            Direct access to our commercial sales office, logistics managers, and laboratory testing coordinators based in Karnal, India.
          </p>
        </div>
      </div>

      {/* Procurement Form Block */}
      <section>
        <ContactForm />
      </section>

      {/* Google Maps Embed Placement */}
      <section style={{ padding: '0 24px 80px 24px' }}>
        <div style={{
          width: '100%',
          height: '400px',
          background: 'var(--bg-light)',
          border: '1px solid var(--border-light)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
        }}>
          <span style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🗺️</span>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary-light)', marginBottom: '8px' }}>Google Maps Location Placement</h3>
          <p style={{ color: 'var(--text-secondary-light)', fontSize: '0.95rem' }}>
            Saarthi Organics Sales Office | Farm House, Liberty Chowk, Karnal - 132001, Haryana, India
          </p>
        </div>
      </section>

    </main>
  );
}
