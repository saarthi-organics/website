"use client";

import Image from 'next/image';
import Link from 'next/link';
import SpecTable from '@/components/SpecTable';
import ContactForm from '@/components/ContactForm';

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
      desc: "Robust logistics grid operating across North India (Haryana, Punjab, UP, Rajasthan) and extending long-haul dispatch capability to industrial zones nationwide."
    },
    {
      icon: "📄",
      title: "GST-Compliant Documentation",
      desc: "Standardized corporate billing. Complete transparency with GST invoices, e-way bills, certificates of analysis (COA), and proper transit permit documentation."
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
      link: "/molasses-for-distilleries"
    },
    {
      icon: "🐄",
      title: "Cattle Feed Mills",
      desc: "Palatability enhancer and carbohydrate binder containing natural trace minerals, ideal for block and pellet feed manufacturers.",
      link: "/molasses-for-cattle-feed"
    },
    {
      icon: "🦠",
      title: "Yeast Industry",
      desc: "Highly filtered molasses with consistent pH and mineral profiles, serving as a primary carbon feed source for yeast propagation.",
      link: "/molasses-for-yeast-industry"
    },
    {
      icon: "🚬",
      title: "Tobacco Industry",
      desc: "High-viscosity molasses used as a natural binding, humectant, and flavoring agent in traditional tobacco processing.",
      link: "/molasses-for-tobacco-industry"
    },
    {
      icon: "🍞",
      title: "Food Processing",
      desc: "Food-grade molasses suited for baking, confectionery syrups, and specialized industrial fermentation processes.",
      link: "/molasses-for-food-processing"
    },
    {
      icon: "🔬",
      title: "Pharma Industry",
      desc: "Controlled-viscosity carbon feeds used in industrial fermentation systems for vitamins, antibiotics, and organic acids.",
      link: "/molasses-for-pharma"
    },
    {
      icon: "🏭",
      title: "Foundries & Casting",
      desc: "Binder additive for sand mold preparation, enhancing high-temperature stability and tensile strength during metal casting.",
      link: "/molasses-for-foundries"
    },
    {
      icon: "🌱",
      title: "Agriculture & Farming",
      desc: "Blackstrap molasses is widely used in organic farming, composting, and soil conditioning applications, helping support microbial activity and soil health.",
      link: "/molasses-for-agriculture-and-farming"
    }
  ];

  return (
    <main style={{ marginTop: '72px' }}>
      
      {/* SECTION 1 — HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="section-label">Industrial Procurement Partner</span>
          <h1 className="hero-title">
            Bulk <span className="highlight-gold">Blackstrap Molasses</span> Industrial Supply Partner
          </h1>
          <p className="hero-subtitle">
            Reliable tanker-based supply across North India and PAN India. Sourcing high-quality molasses for distilleries, cattle feed mills, yeast plants, tobacco processors, and foundry foundations.
          </p>
          <div className="hero-ctas">
            <a href="#quote-form-section" className="btn-primary">
              Request Bulk Quote
            </a>
            <Link href="/blackstrap-molasses" className="btn-secondary">
              Download Specifications
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <Image
              src="/molasses_pouring.png"
              alt="Rich viscous blackstrap molasses pouring in industrial facility"
              width={500}
              height={500}
              style={{ objectFit: 'cover', display: 'block' }}
              priority
            />
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

      {/* Feature Blocks */}
      <section id="features">
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
      </section>

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
                <div className="industry-image-container">
                  {ind.icon}
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

      {/* Logistics & Delivery Highlights */}
      <section className="logistics-section" id="logistics">
        <div className="logistics-container">
          <div className="logistics-content">
            <span className="section-label" style={{ color: 'var(--accent-gold)' }}>Fleet Logistics</span>
            <h2 className="section-title logistics-title">Reliable Logistics & Fleet Network</h2>
            <p className="section-desc logistics-desc">
              Our in-house transport network guarantees on-time dispatch and stable product supply. We navigate complex transport restrictions and regulatory clearances to deliver directly to your plant's storage tanks.
            </p>
            <div className="logistics-grid">
              <div className="logistics-item">
                <h4>In-House Logistics</h4>
                <p>No reliance on third-party brokers. We maintain complete control over dispatch timelines and tanker routing.</p>
              </div>
              <div className="logistics-item">
                <h4>Emergency Sourcing</h4>
                <p>We leverage our strong sugar mill network to coordinate urgent dispatches and prevent client plant shutdowns.</p>
              </div>
              <div className="logistics-item">
                <h4>Flexible Turnaround</h4>
                <p>Swift loading and unloading turnaround with standard couplers matching industrial plant intake setups.</p>
              </div>
              <div className="logistics-item">
                <h4>Real-Time Dispatch</h4>
                <p>Constant communication with tanker operators for transparent ETA updates at your receiving bay.</p>
              </div>
            </div>
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
              <Link href="/logistics" className="btn-primary" style={{ background: 'var(--accent-gold)', color: 'var(--bg-primary)' }}>
                Explore Transport Capabilities
              </Link>
            </div>
          </div>
          <div className="logistics-visual">
            <Image
              src="/molasses_plant.png"
              alt="Industrial sugar refinery processing facility"
              width={500}
              height={500}
              style={{ objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Trust Signals & Stats */}
      <section id="trust-signals">
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
            <h4>Lab Testing & COA</h4>
            <p>Every dispatch tanker is accompanied by a fresh Certificate of Analysis detailing Brix, TRS, and ash percentages.</p>
          </div>
          <div className="trust-signal-card">
            <h4>GSTIN Registered Sourcing</h4>
            <p>100% legal compliance. We facilitate input tax credits with accurate and immediate GST billing records.</p>
          </div>
          <div className="trust-signal-card">
            <h4>Security of Sourcing</h4>
            <p>We source directly from large-scale sugar refineries, insulating our buyers from seasonal scarcity.</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="contact-desk" style={{ background: 'var(--bg-light)', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 24px', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ContactForm />
        </div>
      </section>

    </main>
  );
}
