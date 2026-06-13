"use client";

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { articles } from '@/data/blogArticles';

export default function BlogHubClient() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const categories = ['All', 'Procurement', 'Quality', 'Logistics', 'Applications'];

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const filteredArticles = articles.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Blog Hub Hero */}
      <div className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: "url('/hero_blog.png')" }} />
        <div className="subpage-hero-overlay" />
        <div className="subpage-hero-container">
          <span className="section-label">Knowledge Hub</span>
          <h1 className="subpage-hero-title">Molasses Procurement & Sourcing Intelligence</h1>
          <p className="subpage-hero-desc">
            Technical papers, compliance guides, and logistics engineering insights written specifically for industrial buyers, plant managers, and procurement heads.
          </p>
        </div>
      </div>

      {/* Main Filter & Search Control Panel */}
      <section style={{ padding: '40px 24px 20px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          background: 'var(--bg-secondary)',
          padding: '20px 24px',
          borderRadius: '6px',
          border: '1px solid var(--border-color)'
        }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: activeCategory === cat ? '1px solid var(--accent-gold)' : '1px solid var(--border-color)',
                  background: activeCategory === cat ? 'rgba(212, 175, 55, 0.1)' : 'var(--bg-primary)',
                  color: activeCategory === cat ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: activeCategory === cat ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '280px', flex: '0 1 320px' }}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px',
                paddingRight: '40px',
                borderRadius: '4px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem'
              }}
            />
            <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', pointerEvents: 'none' }}>
              🔍
            </span>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: '20px 24px 80px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        {filteredArticles.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {filteredArticles.map((post) => (
              <div 
                key={post.id}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                className="feature-card"
              >
                {/* Visual Category Label instead of large image placeholders */}
                <div style={{ padding: '24px 24px 0 24px' }}>
                  <span style={{
                    background: 'var(--accent-orange)',
                    color: 'var(--text-primary)',
                    padding: '3px 8px',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    borderRadius: '2px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'inline-block',
                    marginBottom: '16px'
                  }}>
                    {post.category}
                  </span>
                  
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <h3 style={{ 
                      color: 'var(--text-primary)', 
                      fontSize: '1.25rem', 
                      margin: '0 0 12px 0', 
                      lineHeight: 1.4, 
                      fontWeight: '700',
                      transition: 'color 0.2s'
                    }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                      {post.title}
                    </h3>
                  </Link>

                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.summary}
                  </p>
                </div>

                {/* Footer Section of Card */}
                <div style={{
                  marginTop: 'auto',
                  borderTop: '1px solid var(--border-color)',
                  padding: '16px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--accent-gold)',
                      color: '#111111',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '0.75rem'
                    }}>
                      {post.author.initials}
                    </div>
                    <div>
                      <h6 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '0.8rem', fontWeight: 600 }}>{post.author.name}</h6>
                      <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.7rem' }}>{post.author.role}</p>
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`} style={{
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: 'var(--accent-gold)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none'
                  }} className="read-more-link">
                    Read Article <span style={{ transition: 'transform 0.2s ease' }} className="arrow">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            color: 'var(--text-secondary)'
          }}>
            <svg style={{ width: '48px', height: '48px', color: 'var(--accent-orange)', marginBottom: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h4>No articles found</h4>
            <p style={{ fontSize: '0.9rem' }}>We couldn&apos;t find any papers matching your filter or search query. Try another keyword.</p>
          </div>
        )}
      </section>

      {/* Sourcing Newsletter CTA */}
      <section style={{ 
        background: 'var(--bg-secondary)', 
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        padding: '80px 24px',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
        <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label" style={{ display: 'inline-block', marginBottom: '12px' }}>Stay Informed</span>
          <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Subscribe to Sourcing Intelligence Reports</h2>
          <p className="section-desc" style={{ marginBottom: '32px', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Get quarterly market updates, crop crushing statistics, and bulk transport rate updates sent directly to your purchasing team.
          </p>
          
          {subscribed ? (
            <div style={{
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid var(--accent-gold)',
              padding: '16px',
              borderRadius: '4px',
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '0.95rem',
              animation: 'fadeIn 0.3s ease'
            }}>
              ✓ Thank you! You have been subscribed to our mailing list.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                required
                type="email"
                placeholder="Enter business email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '260px',
                  padding: '14px 18px',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem'
                }}
              />
              <button 
                type="submit" 
                className="btn-primary"
                style={{ padding: '14px 28px', fontSize: '0.9rem', cursor: 'pointer' }}
              >
                Register
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Sourcing Contact desk CTA / Request Bulk Pricing Form */}
      <section id="quote-form-section" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">RFQ Desk</span>
            <h2 className="section-title">Request Bulk Sourcing Price</h2>
            <p className="section-desc" style={{ maxWidth: '650px', margin: '0 auto' }}>
              Connect with our commercial sourcing desk directly to arrange standard sample shipments and secure bulk contracts.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
