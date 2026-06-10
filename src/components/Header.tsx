"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <>
      <header className="nav-header">
        <div className="nav-logo">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <Image 
              src="/Logo2_transparent.png" 
              alt="Saarthi Organics Logo" 
              width={38} 
              height={38} 
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(197, 160, 89, 0.3))' }} 
              priority 
            />
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
            <li>
              <Link href="/contact" className="nav-cta">
                Request Quote
              </Link>
            </li>
          </ul>
        </nav>

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
            display: 'none'
          }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
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

      {/* Inline styles to handle hamburger show/hide on mobile */}
      <style jsx global>{`
        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
