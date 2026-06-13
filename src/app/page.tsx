import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SpecTable from '@/components/SpecTable';
import ContactForm from '@/components/ContactForm';
import MolassesAnimation from '@/components/MolassesAnimation';

export const metadata: Metadata = {
  title: 'Saarthi Organics | Bulk Sugarcane Molasses Supplier India',
  description: 'GST-compliant bulk industrial blackstrap molasses supplier and procurement partner. Coordinated liquid tanker supply for distilleries, feed mills, and casting foundries across North India.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com',
  },
};

export default function Home() {
  const features = [
    {
      icon: "🚛",
      title: "Own Transport Fleet",
      desc: "Our in-house logistics company manages a dedicated fleet of specialized stainless steel liquid tankers, ensuring secure, contamination-free, and highly reliable transportation."
    },
    {
      icon: "🛢️",
      title: "Bulk Tanker Supply",
      desc: "Specialized in bulk industrial distribution. We support routine, high-volume deliveries from 20 - 50 Metric Tons (single tanker) to multi-tanker daily dispatch coordination."
    },
    {
      icon: "📍",
      title: "PAN India Delivery",
      desc: "Robust logistics grid operating across North India (Haryana, Punjab, Delhi NCR, Rajasthan, Uttarakhand) and extending long-haul dispatch capability to industrial zones nationwide."
    },
    {
      icon: "📄",
      title: "GST-Compliant Documentation",
      desc: "Standardized corporate billing. Complete transparency with GST invoices, e-way bills, certificates of analysis (COA) available upon request, and proper transit permit documentation."
    },
    {
      icon: "📦",
      title: "Custom Packaging Options",
      desc: "While tanker supply is our core, we accommodate custom industrial requirements including 1000L IBC Totes, Flexibags, and standard 200L steel/HDPE drums."
    },
    {
      icon: "🤝",
      title: "Reliable Sourcing Network",
      desc: "Strategic relationships with major sugar refining mills. We secure consistent product volumes and consistent quality metrics even during sugar crushing off-seasons."
    }
  ];

  const industries = [
    {
      icon: "🥃",
      title: "Distilleries & Ethanol",
      desc: "High TRS (Total Reducing Sugars) molasses optimized for fermentation yields and bio-ethanol production requirements.",
      link: "/molasses-for-distilleries",
      image: "/industry_distilleries.png"
    },
    {
      icon: "🐄",
      title: "Cattle Feed Mills",
      desc: "Palatability enhancer and carbohydrate binder containing natural trace minerals, ideal for block and pellet feed manufacturers.",
      link: "/molasses-for-cattle-feed",
      image: "/industry_cattle_feed.png"
    },
    {
      icon: "🦠",
      title: "Yeast Industry",
      desc: "Highly filtered molasses with consistent pH and mineral profiles, serving as a primary carbon feed source for yeast propagation.",
      link: "/molasses-for-yeast-industry",
      image: "/industry_yeast.png"
    },
    {
      icon: "🚬",
      title: "Tobacco Industry",
      desc: "High-viscosity molasses used as a natural binding, humectant, and flavoring agent in traditional tobacco processing.",
      link: "/molasses-for-tobacco-industry",
      image: "/industry_tobacco.png"
    },
    {
      icon: "🍞",
      title: "Food Processing",
      desc: "Food-grade molasses suited for baking, confectionery syrups, and specialized industrial fermentation processes.",
      link: "/molasses-for-food-processing",
      image: "/industry_food.png"
    },
    {
      icon: "🔬",
      title: "Pharma Industry",
      desc: "Controlled-viscosity carbon feeds used in industrial fermentation systems for vitamins, antibiotics, and organic acids.",
      link: "/molasses-for-pharma",
      image: "/industry_pharma.png"
    },
    {
      icon: "🏭",
      title: "Foundries & Casting",
      desc: "Binder additive for sand mold preparation, enhancing high-temperature stability and tensile strength during metal casting.",
      link: "/molasses-for-foundries",
      image: "/industry_foundries.png"
    },
    {
      icon: "🌱",
      title: "Agriculture & Farming",
      desc: "Blackstrap molasses is widely used in organic farming, composting, and soil conditioning applications, helping support microbial activity and soil health.",
      link: "/molasses-for-agriculture-and-farming",
      image: "/industry_agriculture.png"
    }
  ];

  return (
    <main style={{ marginTop: '72px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.saarthiorganics.com/#organization",
            "name": "Saarthi Organics",
            "url": "https://www.saarthiorganics.com",
            "logo": "https://www.saarthiorganics.com/logo_heritage.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7055552535",
              "contactType": "sales",
              "areaServed": "IN",
              "availableLanguage": ["en", "hi"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Farm House, Liberty Chowk",
              "addressLocality": "Karnal",
              "addressRegion": "Haryana",
              "postalCode": "132001",
              "addressCountry": "IN"
            }
          })
        }}
      />
      
      {/* SECTION 1 — HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="section-label">Industrial Sourcing & Logistics</span>
          <h1 className="hero-title">
            Sugarcane <span className="highlight-gold">Molasses Supply</span> for Industrial Sourcing
          </h1>
          <p className="hero-subtitle">
            Excise-aligned bulk tanker distribution across North India and PAN India corridors. We coordinate direct-mill allocations of 82% min Brix molasses for distilleries, feed mills, yeast plants, and metal castings.
          </p>
          <div className="hero-ctas">
            <a href="#contact-desk" className="btn-primary">
              Request Bulk Pricing
            </a>
            <Link href="/blackstrap-molasses" className="btn-secondary">
              Request Technical Details
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container" style={{ aspectRatio: '1', overflow: 'hidden' }}>
            <MolassesAnimation />
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="trust-strip-wrapper">
        <div className="trust-strip">
          <div className="trust-item">
            <span className="trust-icon">✓</span> PAN India Supply
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span> Own Tanker Fleet
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span> Bulk Tanker Delivery
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span> GST Invoicing
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span> Consistent Quality
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span> Fast Dispatch
          </div>
        </div>
      </div>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      {/* SECTION: Heritage and Legacy Seal */}
      <section style={{ padding: '80px 24px', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '0.8', minWidth: '280px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--accent-gold)',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)',
            background: '#080706'
          }}>
            <Image 
              src="/logo_heritage.jpg" 
              alt="Saarthi Organics Heritage Seal Logo" 
              fill
              sizes="280px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div style={{ flex: '1.2', minWidth: '320px', textAlign: 'center' }}>
          <span className="section-label">Legacy & Governance</span>
          <h2 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '20px' }}>
            The Mark of Sourcing Excellence
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '20px' }}>
            Saarthi Organics operates under a heritage of trust, strength, and complete transparency. The Saarthi (Charioteer) represents guidance, dedication, and precision in navigating complex supply chains.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
            Every shipment dispatched under our seal is guaranteed to meet the rigorous Brix density and Total Reducing Sugar (TRS) standards required by commercial industrial plants. We combine classical values of direct accountability with modern chemical testing and logistics.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <div style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '16px', textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-gold)', fontFamily: "'Cinzel', serif" }}>Authority</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Direct mill integrations</span>
            </div>
            <div style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '16px', textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-gold)', fontFamily: "'Cinzel', serif" }}>Precision</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Rigorous QA lab analysis</span>
            </div>
          </div>
        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      {/* Feature Blocks */}
      <section id="features" style={{ background: 'var(--bg-secondary)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Operational Differentiators</span>
            <h2 className="section-title">Logistics & Supply Strength</h2>
            <p className="section-desc">
              We manage a robust industrial supply network and tanker dispatch system designed to meet the rigorous logistics demands of plant managers and procurement professionals.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-card-icon">{feature.icon}</span>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      {/* Industries Grid */}
      <section id="industries" style={{ background: 'var(--bg-light)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Industrial Solutions</span>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-desc">
              Providing application-specific molasses formulations matching the distinct chemical and physical specifications of diverse industrial sectors.
            </p>
          </div>
          <div className="industry-grid">
            {industries.map((ind, index) => (
              <div key={index} className="industry-card">
                <div className="industry-image-container" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '160px' }}>
                  <Image 
                    src={ind.image} 
                    alt={ind.title} 
                    fill 
                    sizes="(max-width: 520px) 100vw, (max-width: 968px) 50vw, 300px"
                    style={{ objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(10, 10, 10, 0.85)', padding: '6px 10px', borderRadius: '4px', fontSize: '1.2rem', color: 'var(--accent-gold)' }}>
                    {ind.icon}
                  </div>
                </div>
                <div className="industry-card-content">
                  <h3 className="industry-card-title">{ind.title}</h3>
                  <p className="industry-card-desc">{ind.desc}</p>
                  <Link href={ind.link} className="industry-card-link">
                    View Industry Applications &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      {/* Specifications datasheet */}
      <section id="specifications">
        <div className="section-header">
          <span className="section-label">Technical Datasheet</span>
          <h2 className="section-title">Specifications Preview</h2>
          <p className="section-desc">
            We guarantee industrial-grade consistency. Review key chemical and physical metrics for our standard heavy blackstrap molasses.
          </p>
        </div>
        <SpecTable />
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      {/* Inside Blackstrap Molasses section (New Gallery) */}
      <section id="gallery-inside" style={{ background: 'var(--bg-secondary)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Visual Gallery</span>
            <h2 className="section-title">Inside Blackstrap Molasses</h2>
            <p className="section-desc">
              Allowing you to visually witness the appearance, richness, and heavy industrial quality of our sugarcane-derived molasses.
            </p>
          </div>
          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '30px' }}>
            <div className="gallery-item" style={{ overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border-color)', position: 'relative', background: 'var(--bg-primary)' }}>
              <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                <Image src="/gallery_pouring.png" alt="Viscous blackstrap molasses pouring" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-gold)', marginBottom: '8px', fontSize: '1.1rem' }}>Molasses Pouring</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Rich, slow-flowing viscosity indicating high total soluble solids (Brix) and density.</p>
              </div>
            </div>
            <div className="gallery-item" style={{ overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border-color)', position: 'relative', background: 'var(--bg-primary)' }}>
              <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                <Image src="/gallery_texture.png" alt="Molasses texture close-up" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-gold)', marginBottom: '8px', fontSize: '1.1rem' }}>Texture Detail</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Deep brown-black coloration containing natural minerals, sucrose, and organic matter.</p>
              </div>
            </div>
            <div className="gallery-item" style={{ overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border-color)', position: 'relative', background: 'var(--bg-primary)' }}>
              <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                <Image src="/gallery_sugarcane.png" alt="Sugarcane raw material sourcing" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-gold)', marginBottom: '8px', fontSize: '1.1rem' }}>Sugarcane Source</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Sourced directly from large sugar mills situated in premium agricultural zones.</p>
              </div>
            </div>
            <div className="gallery-item" style={{ overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--border-color)', position: 'relative', background: 'var(--bg-primary)' }}>
              <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                <Image src="/gallery_industrial.png" alt="Industrial molasses mixing application" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--accent-gold)', marginBottom: '8px', fontSize: '1.1rem' }}>Industrial Processing</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>High-volume feedstock processing matching strict industrial quality specifications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      {/* Logistics & Delivery Highlights */}
      <section className="logistics-section" id="logistics">
        <div className="logistics-container">
          <div className="logistics-content">
            <span className="section-label" style={{ color: 'var(--accent-gold)', textAlign: 'center' }}>Fleet Logistics</span>
            <h2 className="section-title logistics-title" style={{ textAlign: 'center' }}>Reliable Logistics & Fleet Network</h2>
            <p className="section-desc logistics-desc" style={{ textAlign: 'center' }}>
              Our in-house transport network guarantees on-time dispatch and stable product supply. We navigate complex transport restrictions and regulatory clearances to deliver directly to your plant&apos;s storage tanks.
            </p>
            <div className="logistics-grid">
              <div className="logistics-item">
                <h3>In-House Logistics</h3>
                <p>No reliance on third-party brokers. We maintain complete control over dispatch timelines and tanker routing.</p>
              </div>
              <div className="logistics-item">
                <h3>Emergency Sourcing</h3>
                <p>We leverage our strong sugar mill network to coordinate urgent dispatches and prevent client plant shutdowns.</p>
              </div>
              <div className="logistics-item">
                <h3>Flexible Turnaround</h3>
                <p>Swift loading and unloading turnaround with standard couplers matching industrial plant intake setups.</p>
              </div>
              <div className="logistics-item">
                <h3>Real-Time Dispatch</h3>
                <p>Constant communication with tanker operators for transparent ETA updates at your receiving bay.</p>
              </div>
            </div>
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
              <Link href="/logistics" className="btn-primary">
                Explore Transport Capabilities
              </Link>
            </div>
          </div>
          <div className="logistics-visual">
            <Image
              src="/molasses_tanker.png"
              alt="Premium stainless steel liquid transport tanker in logistics dispatch bay"
              width={500}
              height={500}
              style={{ objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      {/* Trust Signals & Stats */}
      <section id="trust-signals" style={{ background: 'var(--bg-light)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-header">
            <span className="section-label">Corporate Credibility</span>
            <h2 className="section-title">Operational Statistics</h2>
            <p className="section-desc">
              Trusted by national distilleries, ethanol refineries, and industrial conglomerates across the Indian subcontinent.
            </p>
          </div>
          
          <div className="stats-strip">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">States Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150K+</div>
              <div className="stat-label">Tons Supplied Annually</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40+</div>
              <div className="stat-label">Active Tanker Fleet</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">GST Compliance</div>
            </div>
          </div>

          <div className="trust-signals-grid">
              <div className="trust-signal-card">
                <h3>Technical Documentation</h3>
                <p>A Certificate of Analysis (COA) can be provided on request detailing Brix, TRS, and ash percentages for verification.</p>
              </div>
              <div className="trust-signal-card">
                <h3>GSTIN Registered Sourcing</h3>
                <p>100% legal compliance. We facilitate input tax credits with accurate and immediate GST billing records.</p>
              </div>
              <div className="trust-signal-card">
                <h3>Security of Sourcing</h3>
                <p>We source directly from large-scale sugar refineries, insulating our buyers from seasonal scarcity.</p>
              </div>
            </div>
        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      {/* Quote Form */}
      <section id="contact-desk" style={{ background: 'var(--bg-primary)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ContactForm />
        </div>
      </section>

    </main>
  );
}
