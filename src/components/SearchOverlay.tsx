"use client";

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SearchResult {
  title: string;
  url: string;
  description: string;
  snippet: string;
  type: 'page' | 'blog';
  matchingTerms: string[];
  score: number;
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Keyboard navigation states
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [activeResultIndex, setActiveResultIndex] = useState(-1);
  const [focusArea, setFocusArea] = useState<'input' | 'suggestions' | 'results'>('input');

  // Handle ESC key to close, and open shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when overlay is open, and auto-focus input
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSuggestions([]);
      setResults([]);
      setHasSearched(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fetch suggestions as user types
  useEffect(() => {
    const fetchSuggestions = async () => {
      const trimmed = query.trim();
      if (!trimmed || trimmed.length < 2) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await fetch(`/api/search/suggest?q=${encodeURIComponent(trimmed)}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data.suggestions || []);
        }
      } catch (e) {
        console.error('Error fetching search suggestions:', e);
      }
    };

    const timer = setTimeout(fetchSuggestions, 150);
    return () => clearTimeout(timer);
  }, [query]);

  // Perform full search query
  const performSearch = async (searchQuery: string) => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return;

    setIsSearching(true);
    setSuggestions([]); // hide suggestions
    setActiveSuggestionIndex(-1);
    setActiveResultIndex(-1);

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(trimmed)}`);
      if (res.ok) {
        const data = await res.json();
        setResults(data.results || []);
        setHasSearched(true);
        setFocusArea('results');
      }
    } catch (e) {
      console.error('Error performing search:', e);
    } finally {
      setIsSearching(false);
    }
  };

  // Log click event and navigate
  const handleResultClick = async (result: SearchResult) => {
    try {
      // Fire-and-forget click log
      fetch('/api/search/click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: query,
          url: result.url,
          title: result.title
        })
      });
    } catch (e) {
      console.error('Failed to log click event:', e);
    }
    onClose();
    router.push(result.url);
  };

  // Keyboard navigation controller
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (focusArea === 'suggestions' && activeSuggestionIndex !== -1) {
        const selectedSuggestion = suggestions[activeSuggestionIndex];
        setQuery(selectedSuggestion);
        performSearch(selectedSuggestion);
      } else {
        performSearch(query);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setFocusArea('suggestions');
        setActiveSuggestionIndex(prev => (prev + 1) % suggestions.length);
      } else if (results.length > 0) {
        setFocusArea('results');
        setActiveResultIndex(0);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (focusArea === 'suggestions' && suggestions.length > 0) {
        setActiveSuggestionIndex(prev => (prev + 1) % suggestions.length);
      } else if (focusArea === 'results' && results.length > 0) {
        setActiveResultIndex(prev => (prev + 1) % results.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (focusArea === 'suggestions') {
        if (activeSuggestionIndex <= 0) {
          setFocusArea('input');
          setActiveSuggestionIndex(-1);
          inputRef.current?.focus();
        } else {
          setActiveSuggestionIndex(prev => prev - 1);
        }
      } else if (focusArea === 'results') {
        if (activeResultIndex <= 0) {
          setFocusArea('input');
          setActiveResultIndex(-1);
          inputRef.current?.focus();
        } else {
          setActiveResultIndex(prev => prev - 1);
        }
      }
    } else if (e.key === 'Enter') {
      if (focusArea === 'suggestions' && activeSuggestionIndex !== -1) {
        e.preventDefault();
        const selected = suggestions[activeSuggestionIndex];
        setQuery(selected);
        performSearch(selected);
      } else if (focusArea === 'results' && activeResultIndex !== -1) {
        e.preventDefault();
        handleResultClick(results[activeResultIndex]);
      }
    }
  };

  // Highlight helper component
  const HighlightedText = ({ text, terms }: { text: string; terms: string[] }) => {
    if (!text || !terms || terms.length === 0) return <span>{text}</span>;
    const escapedTerms = terms
      .map(t => t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
      .filter(t => t.length > 0);
    
    if (escapedTerms.length === 0) return <span>{text}</span>;
    
    const pattern = new RegExp(`(${escapedTerms.join('|')})`, 'gi');
    const parts = text.split(pattern);

    return (
      <span>
        {parts.map((part, index) => 
          pattern.test(part) ? (
            <mark key={index} style={{ background: 'rgba(212, 175, 55, 0.25)', color: 'var(--accent-gold)', borderRadius: '2px', padding: '0 2px' }}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  if (!isOpen) return null;

  return (
    <div 
      className="search-overlay-backdrop"
      ref={overlayRef}
      onKeyDown={handleKeyDown}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(7, 7, 7, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 24px 40px 24px',
        overflowY: 'auto'
      }}
    >
      {/* Search Container */}
      <div 
        style={{
          width: '100%',
          maxWidth: '720px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          aria-label="Close search overlay"
          style={{
            position: 'absolute',
            top: '-50px',
            right: '0',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '2rem',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-gold)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          ✕
        </button>

        {/* Input Bar */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'var(--bg-secondary)',
            border: '2px solid var(--border-color)',
            borderRadius: '8px',
            padding: '16px 20px',
            boxShadow: '0 8px 32px rgba(212, 175, 55, 0.08)',
            position: 'relative'
          }}
        >
          {/* Custom SVG Search Icon */}
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--accent-gold)" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ marginRight: '16px' }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search industries, applications, FAQs, logistics, specifications, and more..." 
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setFocusArea('input');
              setActiveSuggestionIndex(-1);
              if (!e.target.value.trim()) {
                setResults([]);
                setHasSearched(false);
              }
            }}
            onKeyDown={handleInputKeyDown}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.15rem',
              outline: 'none',
              fontFamily: 'inherit',
              paddingRight: '12px'
            }}
          />

          {query && (
            <button 
              onClick={() => { setQuery(''); setResults([]); setHasSearched(false); inputRef.current?.focus(); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Autocomplete Suggestions Panel */}
        {suggestions.length > 0 && (
          <div 
            style={{
              position: 'absolute',
              top: '68px',
              left: 0,
              width: '100%',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--accent-gold)',
              borderRadius: '8px',
              marginTop: '6px',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
              zIndex: 100,
              overflow: 'hidden'
            }}
          >
            {suggestions.map((sug, index) => (
              <div 
                key={index}
                onClick={() => {
                  setQuery(sug);
                  performSearch(sug);
                }}
                style={{
                  padding: '14px 20px',
                  cursor: 'pointer',
                  color: index === activeSuggestionIndex ? 'var(--accent-gold)' : 'var(--text-primary)',
                  background: index === activeSuggestionIndex ? 'rgba(212, 175, 55, 0.08)' : 'transparent',
                  borderBottom: index < suggestions.length - 1 ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'background 0.15s ease'
                }}
                onMouseOver={() => {
                  setFocusArea('suggestions');
                  setActiveSuggestionIndex(index);
                }}
              >
                <span style={{ color: 'var(--accent-dark-gold)', fontSize: '0.9rem' }}>✦</span>
                <HighlightedText text={sug} terms={[query]} />
              </div>
            ))}
          </div>
        )}

        {/* Results / Empty state Area */}
        <div ref={resultsRef} style={{ marginTop: '32px', width: '100%' }}>
          {isSearching && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--accent-gold)' }}>
              <div className="search-spinner" style={{ display: 'inline-block', width: '30px', height: '30px', border: '3px solid rgba(212,175,55,0.2)', borderTopColor: 'var(--accent-gold)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
              <p style={{ marginTop: '16px', fontSize: '0.95rem' }}>Analyzing records...</p>
            </div>
          )}

          {/* Search results list */}
          {!isSearching && hasSearched && results.length > 0 && (
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
                Found {results.length} relevant entries for &ldquo;{query}&rdquo;
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {results.map((res, index) => {
                  const isActive = index === activeResultIndex;
                  return (
                    <div 
                      key={res.url}
                      onClick={() => handleResultClick(res)}
                      style={{
                        background: isActive ? 'rgba(212, 175, 55, 0.02)' : 'var(--bg-secondary)',
                        border: isActive ? '1px solid var(--accent-gold)' : '1px solid var(--border-light)',
                        borderRadius: '6px',
                        padding: '20px',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        boxShadow: isActive ? '0 4px 15px rgba(212,175,55,0.08)' : 'none'
                      }}
                      onMouseOver={() => {
                        setFocusArea('results');
                        setActiveResultIndex(index);
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                        <h3 style={{ fontSize: '1.25rem', fontFamily: "'Manrope', sans-serif", color: isActive ? 'var(--accent-gold)' : 'var(--text-primary)', transition: 'color 0.2s ease' }}>
                          <HighlightedText text={res.title} terms={res.matchingTerms} />
                        </h3>
                        <span style={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          fontWeight: 'bold',
                          color: res.type === 'blog' ? 'var(--accent-gold)' : 'var(--text-secondary)',
                          background: res.type === 'blog' ? 'rgba(212, 175, 55, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          border: res.type === 'blog' ? '1px solid rgba(212,175,55,0.2)' : '1px solid rgba(255,255,255,0.1)'
                        }}>
                          {res.type === 'blog' ? 'Blog' : 'Page'}
                        </span>
                      </div>

                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.5', marginBottom: '12px' }}>
                        <HighlightedText text={res.snippet} terms={res.matchingTerms} />
                      </p>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-dark-gold)', fontFamily: 'monospace' }}>
                          {res.url}
                        </span>

                        {/* Matching Terms badges */}
                        {res.matchingTerms && res.matchingTerms.length > 0 && (
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            {res.matchingTerms.map(term => (
                              <span 
                                key={term}
                                style={{
                                  fontSize: '0.75rem',
                                  background: 'rgba(212, 175, 55, 0.05)',
                                  color: 'var(--accent-soft-gold)',
                                  padding: '2px 6px',
                                  borderRadius: '3px',
                                  border: '1px solid rgba(212, 175, 55, 0.1)'
                                }}
                              >
                                {term}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* No results experience */}
          {!isSearching && hasSearched && results.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 24px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>🔍</span>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px', fontFamily: "'Cinzel', serif" }}>No matching content found</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 32px auto', lineHeight: '1.6' }}>
                We couldn&rsquo;t find anything matching &ldquo;{query}&rdquo;. Check spelling or explore popular procurement resources below:
              </p>

              {/* Quick Links Grid */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px',
                  maxWidth: '640px',
                  margin: '0 auto'
                }}
              >
                {[
                  { title: "Industries We Serve", href: "/#industries", icon: "🏭" },
                  { title: "Product Specifications", href: "/blackstrap-molasses#specifications", icon: "📋" },
                  { title: "Sourcing FAQ Desk", href: "/faq", icon: "❓" },
                  { title: "Contact Us Desk", href: "/contact", icon: "✉️" },
                  { title: "Request Bulk Quote", href: "/contact", icon: "💰" }
                ].map((link, idx) => (
                  <Link 
                    key={idx}
                    href={link.href}
                    onClick={onClose}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '6px',
                      padding: '14px 16px',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      transition: 'all 0.25s ease',
                      textAlign: 'left'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-gold)';
                      e.currentTarget.style.boxShadow = '0 0 10px rgba(212,175,55,0.1)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{link.icon}</span>
                    <span>{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
