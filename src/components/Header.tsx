"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import SearchOverlay from './SearchOverlay';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Product', href: '/blackstrap-molasses' },
    { name: 'Logistics', href: '/logistics' },
    { name: 'Quality', href: '/quality-and-sourcing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  // Listen to Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="nav-header">
        <div className="nav-logo">
          <Link href="/" className="nav-logo-link">
            <div className="nav-logo-img-wrapper">
              <Image 
                src="/logo_heritage.jpg" 
                alt="Saarthi Organics Logo" 
                width={54} 
                height={54} 
                className="nav-logo-img"
                priority 
              />
            </div>
            <span className="nav-logo-text gradient-text">
              Saarthi Organics
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} className={isActive ? 'active' : ''}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
            
            {/* Desktop Search Trigger */}
            <li>
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open Search"
                className="search-nav-btn"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </li>

            <li>
              <Link href="/contact" className="nav-cta">
                Request Quote
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Search & Hamburger Actions Container */}
        <div className="mobile-header-actions" style={{ display: 'none', alignItems: 'center', gap: '16px' }}>
          {/* Mobile Direct Search Icon */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open Search"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '6px'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'block'
            }}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div 
          className="mobile-overlay"
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 72px)',
            background: 'var(--bg-primary)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 24px',
            gap: '24px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            overflowY: 'auto'
          }}
        >
          {/* Mobile Menu Search Searchbar trigger */}
          <button 
            onClick={() => { setMobileOpen(false); setIsSearchOpen(true); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: 'var(--text-primary)',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-light)',
              borderRadius: '4px',
              padding: '12px 16px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Search Website</span>
          </button>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileOpen(false)}
                style={{
                  color: isActive ? 'var(--accent-gold)' : 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 600
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <Link 
            href="/contact" 
            onClick={() => setMobileOpen(false)}
            className="nav-cta"
            style={{
              textAlign: 'center',
              textDecoration: 'none',
              marginTop: '16px',
              padding: '12px'
            }}
          >
            Request Quote
          </Link>
        </div>
      )}

      {/* Global Search Overlay Modal */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      {/* Inline styles to handle hamburger show/hide on mobile */}
      <style jsx global>{`
        @media (max-width: 1120px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .mobile-header-actions {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
