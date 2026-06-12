"use client";

import { useState, useEffect } from 'react';
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

export default function AdminPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [submissions, setSubmissions] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Auto-fill password if saved in sessionStorage
  useEffect(() => {
    const savedCode = sessionStorage.getItem('admin_sourcing_passcode');
    if (savedCode) {
      handleAuthSubmit(savedCode);
    }
  }, []);

  const handleAuthSubmit = async (codeToVerify?: string) => {
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
      } else {
        setError(data.message || 'Unauthorized passcode. Access Denied.');
        sessionStorage.removeItem('admin_sourcing_passcode');
      }
    } catch (err) {
      setError('Connection failure. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    setSubmissions([]);
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

  const handleExport = () => {
    const savedCode = sessionStorage.getItem('admin_sourcing_passcode') || passcode;
    if (!savedCode) return;
    window.open(`/api/export?code=${encodeURIComponent(savedCode)}`, '_blank');
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
              <Image src="/logo_heritage.jpg" alt="Saarthi Seal Logo" fill style={{ objectFit: 'cover' }} />
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

  // Dashboard render
  return (
    <main style={{ marginTop: '72px', minHeight: 'calc(100vh - 72px)', background: 'var(--bg-primary)', color: 'var(--text-primary)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '32px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
          <div>
            <span className="section-label">Administrative Console</span>
            <h1 style={{ fontSize: '2rem', fontFamily: "'Cinzel', serif", color: 'var(--accent-gold)' }}>Inquiry Management</h1>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={handleExport} className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem', borderRadius: '4px' }}>
              Export Database (CSV)
            </button>
            <button onClick={handleLogout} className="btn-secondary" style={{ padding: '10px 20px', fontSize: '0.9rem', borderRadius: '4px' }}>
              Logout
            </button>
          </div>
        </div>

        {/* Stats Blocks */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '20px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Total Leads</span>
            <h3 style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginTop: '8px', marginBottom: 0 }}>{totalInquiries}</h3>
          </div>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '20px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Unique Entities</span>
            <h3 style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginTop: '8px', marginBottom: 0 }}>{uniqueCompanies}</h3>
          </div>
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '20px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Primary Industry</span>
            <h3 style={{ fontSize: '2rem', color: 'var(--accent-gold)', marginTop: '8px', marginBottom: 0, textTransform: 'capitalize' }}>{majorIndustry}</h3>
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
