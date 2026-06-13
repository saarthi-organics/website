"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Inquiry {
  submissionId: string;
  dateTime: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  industryType: string;
  requiredQuantity: string;
  deliveryLocation: string;
  packagingRequirement: string;
  monthlyRequirement: string;
  message: string;
  sourcePage: string;

  // Sourcing Lead Marketing Attribution
  landingPageUrl?: string;
  formPageUrl?: string;
  referringUrl?: string;
  pageName?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  trafficSource?: string;
  ipAddress?: string;
  browserType?: string;
  deviceType?: string;
  mobileDesktop?: string;
  country?: string;
  stateRegion?: string;
}

interface SearchStat {
  totalSearches: number;
  uniqueQueries: number;
  totalNoResults: number;
  clickThroughRate: number;
}

interface TopSearchItem {
  query: string;
  count: number;
  noResults: boolean;
}

interface PopularContentItem {
  url: string;
  title: string;
  clicks: number;
  queries: string[];
}

interface SearchHistoryItem {
  timestamp: string;
  query: string;
  resultsCount: number;
}

interface SearchAnalyticsData {
  success: boolean;
  stats: SearchStat;
  topSearches: TopSearchItem[];
  noResultSearches: TopSearchItem[];
  popularContent: PopularContentItem[];
  history: SearchHistoryItem[];
}

export default function AdminPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [submissions, setSubmissions] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Search Analytics state declarations
  const [activeTab, setActiveTab] = useState<'inquiries' | 'search-analytics'>('inquiries');
  const [searchAnalytics, setSearchAnalytics] = useState<SearchAnalyticsData | null>(null);

  const fetchSearchAnalytics = useCallback(async (code: string) => {
    try {
      const response = await fetch('/api/admin/search-analytics', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${code}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setSearchAnalytics(data);
        }
      }
    } catch (err) {
      console.error('Failed to fetch search analytics:', err);
    }
  }, []);

  const handleAuthSubmit = useCallback(async (codeToVerify?: string) => {
    const code = codeToVerify || passcode;
    if (!code) {
      setError('Please enter an administrative passcode.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/inquiries', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${code}`
        }
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthorized(true);
        setSubmissions(data.records || []);
        sessionStorage.setItem('admin_sourcing_passcode', code);
        fetchSearchAnalytics(code);
      } else {
        setError(data.message || 'Unauthorized passcode. Access Denied.');
        sessionStorage.removeItem('admin_sourcing_passcode');
      }
    } catch {
      setError('Connection failure. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [passcode, fetchSearchAnalytics]);

  // Auto-fill password if saved in sessionStorage
  useEffect(() => {
    const savedCode = sessionStorage.getItem('admin_sourcing_passcode');
    if (savedCode) {
      handleAuthSubmit(savedCode);
    }
  }, [handleAuthSubmit]);

  const handleLogout = () => {
    setIsAuthorized(false);
    setSubmissions([]);
    setSearchAnalytics(null);
    setPasscode('');
    sessionStorage.removeItem('admin_sourcing_passcode');
  };

  // Filtering Logic
  const filteredSubmissions = submissions.filter((record) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      record.companyName.toLowerCase().includes(query) ||
      record.contactPerson.toLowerCase().includes(query) ||
      record.email.toLowerCase().includes(query) ||
      record.phone.toLowerCase().includes(query) ||
      record.deliveryLocation.toLowerCase().includes(query) ||
      record.submissionId.toLowerCase().includes(query);

    const matchesIndustry =
      industryFilter === 'all' || record.industryType === industryFilter;

    return matchesSearch && matchesIndustry;
  });

  // Calculate Metrics
  const totalInquiries = submissions.length;
  const uniqueCompanies = new Set(submissions.map((s) => s.companyName.toLowerCase())).size;
  
  // Find major industry segment
  const industryCounts: { [key: string]: number } = {};
  submissions.forEach((s) => {
    industryCounts[s.industryType] = (industryCounts[s.industryType] || 0) + 1;
  });
  let majorIndustry = 'None';
  let maxCount = 0;
  Object.keys(industryCounts).forEach((key) => {
    if (industryCounts[key] > maxCount) {
      maxCount = industryCounts[key];
      majorIndustry = key;
    }
  });

  const handleExport = (format: 'csv' | 'xlsx') => {
    const savedCode = sessionStorage.getItem('admin_sourcing_passcode') || passcode;
    if (!savedCode) return;
    window.open(`/api/export?code=${encodeURIComponent(savedCode)}&format=${format}`, '_blank');
  };

  // Passcode prompt render
  if (!isAuthorized) {
    return (
      <main style={{ marginTop: '72px', minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{
          width: '100%',
          maxWidth: '420px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '8px',
          padding: '40px 30px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ position: 'relative', width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <Image src="/logo_heritage.jpg" alt="Saarthi Seal Logo" fill sizes="90px" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", color: 'var(--accent-gold)', fontSize: '1.4rem', marginBottom: '10px' }}>Procurement Database</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: '1.5' }}>
            Enter your secure passcode to access B2B quotations and lead listings.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); handleAuthSubmit(); }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
              <input 
                type="password" 
                placeholder="Secure Passcode" 
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  outline: 'none',
                  textAlign: 'center'
                }}
              />
              {error && <p style={{ color: '#E53E3E', fontSize: '0.85rem', margin: 0 }}>{error}</p>}
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              disabled={isLoading}
              style={{ width: '100%', padding: '12px', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
            >
              {isLoading ? 'Verifying...' : 'Authorize Console'}
            </button>
          </form>
        </div>
      </main>
    );
  }

  // Search export triggers
  const handleSearchExport = (format: 'csv' | 'xlsx') => {
    const savedCode = sessionStorage.getItem('admin_sourcing_passcode') || passcode;
    if (!savedCode) return;
    window.open(`/api/admin/export-search?code=${encodeURIComponent(savedCode)}&format=${format}`, '_blank');
  };

  // Dashboard render
  return (
    <main style={{ marginTop: '72px', minHeight: 'calc(100vh - 72px)', background: 'var(--bg-primary)', color: 'var(--text-primary)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '24px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
          <div>
            <span className="section-label">Administrative Console</span>
            <h1 style={{ fontSize: '2.2rem', fontFamily: "'Cinzel', serif", color: 'var(--accent-gold)' }}>Saarthi Control Panel</h1>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleLogout} className="btn-secondary" style={{ padding: '10px 20px', fontSize: '0.9rem', borderRadius: '4px' }}>
              Logout
            </button>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(212,175,55,0.15)', marginBottom: '32px' }}>
          <button 
            onClick={() => setActiveTab('inquiries')}
            style={{
              padding: '12px 24px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'inquiries' ? '3px solid var(--accent-gold)' : '3px solid transparent',
              color: activeTab === 'inquiries' ? 'var(--accent-gold)' : 'var(--text-secondary)',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            Quotations & Leads ({totalInquiries})
          </button>
          <button 
            onClick={() => {
              setActiveTab('search-analytics');
              const code = sessionStorage.getItem('admin_sourcing_passcode') || passcode;
              if (code) fetchSearchAnalytics(code);
            }}
            style={{
              padding: '12px 24px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'search-analytics' ? '3px solid var(--accent-gold)' : '3px solid transparent',
              color: activeTab === 'search-analytics' ? 'var(--accent-gold)' : 'var(--text-secondary)',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            Search Analytics & SEO
          </button>
        </div>

        {/* TABS 1: INQUIRIES SECTION */}
        {activeTab === 'inquiries' && (
          <div>
            {/* Stats Blocks */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '20px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Leads</span>
                <h3 style={{ fontSize: '2.25rem', color: 'var(--accent-gold)', marginTop: '8px', marginBottom: 0 }}>{totalInquiries}</h3>
              </div>
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '20px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Unique Entities</span>
                <h3 style={{ fontSize: '2.25rem', color: 'var(--accent-gold)', marginTop: '8px', marginBottom: 0 }}>{uniqueCompanies}</h3>
              </div>
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '20px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Primary Industry</span>
                <h3 style={{ fontSize: '2.25rem', color: 'var(--accent-gold)', marginTop: '8px', marginBottom: 0, textTransform: 'capitalize' }}>{majorIndustry}</h3>
              </div>
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
                <button onClick={() => handleExport('csv')} className="btn-primary" style={{ width: '100%', padding: '10px', borderRadius: '4px', textAlign: 'center', fontSize: '0.85rem' }}>
                  Export Leads (CSV)
                </button>
                <button onClick={() => handleExport('xlsx')} className="btn-secondary" style={{ width: '100%', padding: '10px', borderRadius: '4px', textAlign: 'center', fontSize: '0.85rem' }}>
                  Export Leads (Excel)
                </button>
              </div>
            </div>

            {/* Filters and Controls */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px', alignItems: 'center' }}>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <input 
                  type="text" 
                  placeholder="Search by company, manager, email, location, or inquiry ID..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{ minWidth: '200px' }}>
                <select 
                  value={industryFilter} 
                  onChange={(e) => setIndustryFilter(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '4px',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="all">All Industry Segments</option>
                  <option value="distillery">Distillery & Ethanol</option>
                  <option value="cattle-feed">Cattle Feed Mills</option>
                  <option value="yeast">Yeast Propagation</option>
                  <option value="tobacco">Tobacco Processing</option>
                  <option value="food">Food Processing</option>
                  <option value="pharma">Pharma Fermentation</option>
                  <option value="foundries">Foundries Binder</option>
                  <option value="agriculture">Agriculture & Compost</option>
                </select>
              </div>
            </div>

            {/* Records Table */}
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'rgba(212, 175, 55, 0.1)', borderBottom: '2px solid var(--border-color)' }}>
                      <th style={{ padding: '16px 20px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>ID</th>
                      <th style={{ padding: '16px 20px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Date & Time</th>
                      <th style={{ padding: '16px 20px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Company</th>
                      <th style={{ padding: '16px 20px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Contact Person</th>
                      <th style={{ padding: '16px 20px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Industry</th>
                      <th style={{ padding: '16px 20px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Quantity</th>
                      <th style={{ padding: '16px 20px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)', textAlign: 'center' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubmissions.length > 0 ? (
                      filteredSubmissions.map((record) => (
                        <tr key={record.submissionId} className="admin-table-row" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                          <td style={{ padding: '16px 20px', fontSize: '0.9rem', fontFamily: 'monospace' }}>{record.submissionId}</td>
                          <td style={{ padding: '16px 20px', fontSize: '0.9rem' }}>{record.dateTime}</td>
                          <td style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 600 }}>{record.companyName}</td>
                          <td style={{ padding: '16px 20px', fontSize: '0.9rem' }}>{record.contactPerson}</td>
                          <td style={{ padding: '16px 20px', fontSize: '0.9rem', textTransform: 'capitalize' }}>{record.industryType}</td>
                          <td style={{ padding: '16px 20px', fontSize: '0.9rem' }}>{record.requiredQuantity}</td>
                          <td style={{ padding: '16px 20px', textAlign: 'center' }}>
                            <button 
                              onClick={() => setSelectedInquiry(record)} 
                              className="btn-primary" 
                              style={{ padding: '6px 12px', fontSize: '0.8rem', borderRadius: '4px' }}
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                          No submission entries found matching search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TABS 2: SEARCH ANALYTICS SECTION */}
        {activeTab === 'search-analytics' && (
          <div>
            {!searchAnalytics ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--accent-gold)' }}>
                <div style={{ display: 'inline-block', width: '35px', height: '35px', border: '3px solid rgba(212,175,55,0.2)', borderTopColor: 'var(--accent-gold)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                <p style={{ marginTop: '16px', fontSize: '1rem' }}>Compiling search analytics database...</p>
              </div>
            ) : (
              <div>
                {/* Metric Summary Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
                  <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '20px' }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Search Requests</span>
                    <h3 style={{ fontSize: '2.25rem', color: 'var(--accent-gold)', marginTop: '8px', marginBottom: 0 }}>{searchAnalytics.stats.totalSearches}</h3>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '20px' }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Unique Search Queries</span>
                    <h3 style={{ fontSize: '2.25rem', color: 'var(--accent-gold)', marginTop: '8px', marginBottom: 0 }}>{searchAnalytics.stats.uniqueQueries}</h3>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '20px' }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>No-Result Queries</span>
                    <h3 style={{ fontSize: '2.25rem', color: '#E53E3E', marginTop: '8px', marginBottom: 0 }}>{searchAnalytics.stats.totalNoResults}</h3>
                  </div>
                  <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '20px' }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Result Click-Through Rate</span>
                    <h3 style={{ fontSize: '2.25rem', color: 'var(--accent-soft-gold)', marginTop: '8px', marginBottom: 0 }}>{searchAnalytics.stats.clickThroughRate}%</h3>
                  </div>
                </div>

                {/* Exporter triggers */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', background: 'rgba(212,175,55,0.04)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '16px 24px', marginBottom: '32px' }}>
                  <div>
                    <h4 style={{ fontFamily: "'Cinzel', serif", color: 'var(--accent-gold)', fontSize: '1.05rem', marginBottom: '4px' }}>Export SEO Intelligence Reports</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>Download search demand logs to uncover new content opportunities and product market fit.</p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => handleSearchExport('xlsx')} className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem', borderRadius: '4px' }}>
                      Export Excel (.xlsx)
                    </button>
                    <button onClick={() => handleSearchExport('csv')} className="btn-secondary" style={{ padding: '10px 18px', fontSize: '0.85rem', borderRadius: '4px' }}>
                      Export CSV (.csv)
                    </button>
                  </div>
                </div>

                {/* Grid Lists */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '32px', marginBottom: '32px' }}>
                  
                  {/* Top Search Terms */}
                  <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '24px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontFamily: "'Cinzel', serif", color: 'var(--accent-gold)', fontSize: '1.25rem', marginBottom: '16px', borderBottom: '1px solid rgba(212,175,55,0.15)', paddingBottom: '8px' }}>
                      Top Search Queries
                    </h3>
                    <div style={{ overflowX: 'auto', maxHeight: '360px', overflowY: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ borderBottom: '2px solid rgba(212, 175, 55, 0.2)', paddingBottom: '6px' }}>
                            <th style={{ padding: '10px 12px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Rank</th>
                            <th style={{ padding: '10px 12px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Search Term</th>
                            <th style={{ padding: '10px 12px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-gold)', textAlign: 'center' }}>Searches</th>
                            <th style={{ padding: '10px 12px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-gold)', textAlign: 'center' }}>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchAnalytics.topSearches && searchAnalytics.topSearches.length > 0 ? (
                            searchAnalytics.topSearches.map((item: TopSearchItem, idx: number) => (
                              <tr key={idx} className="admin-table-row" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                <td style={{ padding: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{idx + 1}</td>
                                <td style={{ padding: '12px', fontSize: '0.95rem', fontWeight: 600 }}>{item.query}</td>
                                <td style={{ padding: '12px', fontSize: '0.95rem', fontWeight: 600, textAlign: 'center', color: 'var(--accent-gold)' }}>{item.count}</td>
                                <td style={{ padding: '12px', textAlign: 'center' }}>
                                  <span style={{
                                    fontSize: '0.75rem',
                                    padding: '2px 8px',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    background: item.noResults ? 'rgba(229, 62, 62, 0.1)' : 'rgba(72, 187, 120, 0.1)',
                                    color: item.noResults ? '#E53E3E' : '#48BB78',
                                    border: item.noResults ? '1px solid rgba(229,62,62,0.2)' : '1px solid rgba(72,187,120,0.2)'
                                  }}>
                                    {item.noResults ? 'No Results' : 'Success'}
                                  </span>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>No searches performed yet.</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Searches with No Results */}
                  <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '24px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontFamily: "'Cinzel', serif", color: '#E53E3E', fontSize: '1.25rem', marginBottom: '16px', borderBottom: '1px solid rgba(229,62,62,0.15)', paddingBottom: '8px' }}>
                      Searches with No Results (SEO Gaps)
                    </h3>
                    <div style={{ overflowX: 'auto', maxHeight: '360px', overflowY: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ borderBottom: '2px solid rgba(229, 62, 62, 0.2)' }}>
                            <th style={{ padding: '10px 12px', fontSize: '0.8rem', textTransform: 'uppercase', color: '#E53E3E' }}>Rank</th>
                            <th style={{ padding: '10px 12px', fontSize: '0.8rem', textTransform: 'uppercase', color: '#E53E3E' }}>Unmatched Query</th>
                            <th style={{ padding: '10px 12px', fontSize: '0.8rem', textTransform: 'uppercase', color: '#E53E3E', textAlign: 'center' }}>Search Count</th>
                            <th style={{ padding: '10px 12px', fontSize: '0.8rem', textTransform: 'uppercase', color: '#E53E3E', textAlign: 'center' }}>SEO Opportunity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchAnalytics.noResultSearches && searchAnalytics.noResultSearches.length > 0 ? (
                            searchAnalytics.noResultSearches.map((item: TopSearchItem, idx: number) => (
                              <tr key={idx} className="admin-table-row" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                <td style={{ padding: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{idx + 1}</td>
                                <td style={{ padding: '12px', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.query}</td>
                                <td style={{ padding: '12px', fontSize: '0.95rem', fontWeight: 600, textAlign: 'center', color: '#E53E3E' }}>{item.count}</td>
                                <td style={{ padding: '12px', textAlign: 'center', fontSize: '0.82rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                                  💡 Create FAQ/Blog
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>Excellent! No failed searches recorded.</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                {/* Popular Clicked Content */}
                <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '24px', marginBottom: '32px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontFamily: "'Cinzel', serif", color: 'var(--accent-gold)', fontSize: '1.25rem', marginBottom: '16px', borderBottom: '1px solid rgba(212,175,55,0.15)', paddingBottom: '8px' }}>
                    Popular Search Destinations (Clicked Content)
                  </h3>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid rgba(212, 175, 55, 0.2)' }}>
                          <th style={{ padding: '12px 16px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Page Title</th>
                          <th style={{ padding: '12px 16px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Destination URL</th>
                          <th style={{ padding: '12px 16px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)', textAlign: 'center' }}>Total Clicks</th>
                          <th style={{ padding: '12px 16px', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Associated Queries</th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchAnalytics.popularContent && searchAnalytics.popularContent.length > 0 ? (
                          searchAnalytics.popularContent.map((item: PopularContentItem, idx: number) => (
                            <tr key={idx} className="admin-table-row" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                              <td style={{ padding: '14px 16px', fontSize: '0.95rem', fontWeight: 600 }}>{item.title}</td>
                              <td style={{ padding: '14px 16px', fontSize: '0.9rem', fontFamily: 'monospace', color: 'var(--accent-soft-gold)' }}>{item.url}</td>
                              <td style={{ padding: '14px 16px', fontSize: '1.05rem', fontWeight: 700, textAlign: 'center', color: 'var(--accent-gold)' }}>{item.clicks}</td>
                              <td style={{ padding: '14px 16px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                {item.queries.slice(0, 5).join(', ') || 'Direct Link'}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={4} style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>No click logs tracked yet.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* History log */}
                <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '24px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontFamily: "'Cinzel', serif", color: 'var(--accent-gold)', fontSize: '1.25rem', marginBottom: '16px', borderBottom: '1px solid rgba(212,175,55,0.15)', paddingBottom: '8px' }}>
                    Recent Search Log & Trends
                  </h3>
                  <div style={{ overflowX: 'auto', maxHeight: '400px', overflowY: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid rgba(212, 175, 55, 0.2)' }}>
                          <th style={{ padding: '10px 16px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Date & Time</th>
                          <th style={{ padding: '10px 16px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Search query</th>
                          <th style={{ padding: '10px 16px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-gold)', textAlign: 'center' }}>Results found</th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchAnalytics.history && searchAnalytics.history.length > 0 ? (
                          searchAnalytics.history.map((item: SearchHistoryItem, idx: number) => {
                            const date = new Date(item.timestamp).toLocaleString();
                            return (
                              <tr key={idx} className="admin-table-row" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                <td style={{ padding: '12px 16px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{date}</td>
                                <td style={{ padding: '12px 16px', fontSize: '0.95rem', fontWeight: 600 }}>&ldquo;{item.query}&rdquo;</td>
                                <td style={{ padding: '12px 16px', fontSize: '0.95rem', fontWeight: 600, textAlign: 'center', color: item.resultsCount === 0 ? '#E53E3E' : 'var(--accent-gold)' }}>
                                  {item.resultsCount}
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan={3} style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)' }}>No searches logged.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}
          </div>
        )}

      </div>

      {/* Details View Modal */}
      {selectedInquiry && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '24px'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '640px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            {/* Modal Header */}
            <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontFamily: 'monospace' }}>{selectedInquiry.submissionId}</span>
                <h3 style={{ fontSize: '1.25rem', fontFamily: "'Cinzel', serif", margin: 0, color: 'var(--text-primary)' }}>Inquiry Specifications</h3>
              </div>
              <button 
                onClick={() => setSelectedInquiry(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Company Name</label>
                  <p style={{ margin: '4px 0 0 0', fontWeight: 'bold' }}>{selectedInquiry.companyName}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Contact Person</label>
                  <p style={{ margin: '4px 0 0 0', fontWeight: 'bold' }}>{selectedInquiry.contactPerson}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Phone Number</label>
                  <p style={{ margin: '4px 0 0 0' }}><a href={`tel:${selectedInquiry.phone}`} style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>{selectedInquiry.phone}</a></p>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Email Address</label>
                  <p style={{ margin: '4px 0 0 0' }}><a href={`mailto:${selectedInquiry.email}`} style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>{selectedInquiry.email || 'N/A'}</a></p>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Industry Segment</label>
                  <p style={{ margin: '4px 0 0 0', textTransform: 'capitalize' }}>{selectedInquiry.industryType}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Required Quantity</label>
                  <p style={{ margin: '4px 0 0 0' }}>{selectedInquiry.requiredQuantity}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Packaging Format</label>
                  <p style={{ margin: '4px 0 0 0', textTransform: 'capitalize' }}>{selectedInquiry.packagingRequirement}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Monthly Commitment</label>
                  <p style={{ margin: '4px 0 0 0' }}>{selectedInquiry.monthlyRequirement || 'None stated'}</p>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Delivery Location</label>
                  <p style={{ margin: '4px 0 0 0' }}>{selectedInquiry.deliveryLocation}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Source Page</label>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>{selectedInquiry.sourcePage}</p>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Log Date / Time</label>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>{selectedInquiry.dateTime}</p>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Message / Requirements Detail</label>
                <div style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  padding: '16px',
                  marginTop: '6px',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap'
                }}>
                  {selectedInquiry.message || 'No additional message.'}
                </div>
              </div>

              {/* Marketing & Sourcing Analytics Subsection */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', marginTop: '10px' }}>
                <h4 style={{ fontSize: '1.05rem', fontFamily: "'Cinzel', serif", color: 'var(--accent-gold)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Marketing & Sourcing Analytics
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Traffic Source</label>
                    <p style={{ margin: '4px 0 0 0', fontWeight: 'bold', color: 'var(--accent-orange)' }}>{selectedInquiry.trafficSource || 'Direct Visit'}</p>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Referring URL</label>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', overflowWrap: 'anywhere' }}>{selectedInquiry.referringUrl || 'Direct Visit'}</p>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>First Landing Page</label>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', overflowWrap: 'anywhere' }}>{selectedInquiry.landingPageUrl || 'N/A'}</p>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Form Page URL</label>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', overflowWrap: 'anywhere' }}>{selectedInquiry.formPageUrl || 'N/A'}</p>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>UTM Parameters</label>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>
                      Src: {selectedInquiry.utmSource || 'N/A'} | Med: {selectedInquiry.utmMedium || 'N/A'} | Cam: {selectedInquiry.utmCampaign || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>UTM Content & Term</label>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>
                      Content: {selectedInquiry.utmContent || 'N/A'} | Term: {selectedInquiry.utmTerm || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Device & Mobile Status</label>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>
                      {selectedInquiry.mobileDesktop || 'Desktop'} ({selectedInquiry.deviceType || 'Desktop'})
                    </p>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Browser User-Agent</label>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>{selectedInquiry.browserType || 'Unknown Browser'}</p>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Geographical Origin</label>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>
                      {selectedInquiry.stateRegion || 'Unknown'}, {selectedInquiry.country || 'Unknown'}
                    </p>
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>IP Address</label>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', fontFamily: 'monospace' }}>{selectedInquiry.ipAddress || 'Unknown'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <a href={`tel:${selectedInquiry.phone}`} className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem', borderRadius: '4px', textDecoration: 'none' }}>
                Call Manager
              </a>
              <button onClick={() => setSelectedInquiry(null)} className="btn-secondary" style={{ padding: '10px 18px', fontSize: '0.85rem', borderRadius: '4px' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
