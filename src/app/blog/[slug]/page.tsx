import { articles } from '@/data/blogArticles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    return {
      title: 'Article Not Found | Saarthi Organics',
      description: 'The requested technical blog post could not be found.',
    };
  }

  return {
    title: `${article.title} | Saarthi Organics Sourcing Hub`,
    description: article.summary,
    alternates: {
      canonical: `https://www.saarthiorganics.com/blog/${article.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.summary,
    "datePublished": new Date(article.date).toISOString().split('T')[0],
    "image": `https://www.saarthiorganics.com${article.image}`,
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "jobTitle": article.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Saarthi Organics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.saarthiorganics.com/logo_heritage.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.saarthiorganics.com/blog/${article.slug}`
    }
  };

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Inject Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs Section */}
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', padding: '16px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', fontSize: '0.85rem', display: 'flex', gap: '8px', flexWrap: 'wrap', color: 'var(--text-secondary)' }}>
          <Link href="/" className="breadcrumb-link" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
          <span>&rarr;</span>
          <Link href="/blog" className="breadcrumb-link" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>Blog</Link>
          <span>&rarr;</span>
          <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>{article.title}</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_blog.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label" style={{ display: 'inline-block', marginBottom: '16px' }}>{article.category}</span>
          <h1 className="subpage-hero-title" style={{ fontSize: '2.5rem', lineHeight: 1.2, maxWidth: '900px', margin: '0 auto 20px auto' }}>{article.title}</h1>
          <p className="subpage-hero-desc" style={{ maxWidth: '750px', margin: '0 auto' }}>
            {article.summary}
          </p>
        </div>
      </div>

      {/* Article Content Area */}
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          
          {/* Main Body */}
          <div style={{ flex: 1.3, minWidth: '300px' }}>
            
            {/* Author Profile card */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--bg-secondary)', padding: '20px', borderRadius: '8px', marginBottom: '36px', border: '1px solid var(--border-color)' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--accent-gold)',
                color: '#111111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '1rem',
                boxShadow: '0 0 10px rgba(212, 175, 55, 0.2)'
              }}>
                {article.author.initials}
              </div>
              <div style={{ flex: 1 }}>
                <h5 style={{ color: 'var(--text-primary)', margin: '0 0 2px 0', fontSize: '1rem', fontWeight: 600 }}>{article.author.name}</h5>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.8rem' }}>{article.author.role}</p>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <div>Published: {article.date}</div>
                <div>{article.readTime}</div>
              </div>
            </div>

            {/* Paragraph Content */}
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              {article.content.map((p, idx) => (
                <p key={idx} style={{ marginBottom: '24px', textAlign: 'justify' }}>{p}</p>
              ))}
            </div>

            {/* In-article internal linking & anchor assistance */}
            <div style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-gold)', borderRadius: '0 8px 8px 0' }}>
              <h4 style={{ color: 'var(--text-primary)', margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 700 }}>Looking for a Reliable Molasses Sourcing Partner?</h4>
              <p style={{ color: 'var(--text-secondary)', margin: '0 0 16px 0', fontSize: '0.95rem', lineHeight: 1.5 }}>
                Saarthi Organics is a leading industrial molasses manufacturer and supplier in North India. We coordinate high-Brix tanker dispatches for distilleries, feed mills, agriculture, foundries, and pharmaceutical bioprocesses.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>Request Bulk Quote &rarr;</Link>
                <Link href="/blackstrap-molasses" style={{ color: 'var(--accent-orange)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>View Specifications &rarr;</Link>
              </div>
            </div>

          </div>

          {/* Sidebar Sourcing desk card */}
          <div style={{ flex: 0.8, minWidth: '300px', position: 'sticky', top: '100px' }}>
            <div className="quote-contact-card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '30px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '12px', fontFamily: "'Cinzel', serif", fontWeight: 700 }}>Sourcing Support Desk</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                Our corporate sourcing office coordinates seasonal excise permits, GSTR credit alignment, and custom tanker shipments to keep your plant running smoothly.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href={`/contact?subject=RFQ-${article.category}&desc=Inquiry motivated by article: ${article.title}`} className="btn-primary" style={{ textAlign: 'center', fontSize: '0.9rem', padding: '12px' }}>
                  Request Bulk Pricing
                </Link>
                <Link href="/contact" className="btn-secondary" style={{ textAlign: 'center', fontSize: '0.9rem', padding: '12px' }}>
                  Contact Sourcing Team
                </Link>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '24px', paddingTop: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                <div style={{ marginBottom: '6px' }}><strong>Sourcing Office:</strong> Karnal, Haryana</div>
                <div><strong>Excise Clearance:</strong> Provided by Saarthi Logistics Desk</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="heritage-divider">
        <span className="heritage-divider-motif">✦</span>
      </div>

      <FinalCTA />
    </main>
  );
}
