"use client";

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

interface Article {
  id: number;
  title: string;
  category: 'Quality' | 'Logistics' | 'Procurement' | 'Applications';
  summary: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    initials: string;
  };
  content: string[];
}

export default function BlogHub() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['All', 'Procurement', 'Quality', 'Logistics', 'Applications'];

  const articles: Article[] = [
    {
      id: 1,
      title: "GST Compliance & Input Tax Credit (ITC) in Sugarcane Molasses Sourcing",
      category: "Procurement",
      summary: "Understand the regulatory framework governing molasses sourcing under the Indian GST system. Learn how to structure purchases, verify e-way bills, and secure instant input tax reconciliation to avoid corporate tax audit delays.",
      date: "June 08, 2026",
      readTime: "8 min read",
      image: "/molasses_plant.png",
      author: {
        name: "Ambuj Goyal",
        role: "Co-Founder & Sourcing Director",
        initials: "AG"
      },
      content: [
        "Sugarcane molasses is a heavily regulated commodity in India, subject to strict state excise rules and federal tax laws. Under the Indian Goods and Services Tax (GST) regime, molasses is classified under HSN Code 1703, carrying a standard GST rate of 28%. For heavy manufacturing units, distilleries, and chemical plants, managing the tax compliance of raw materials is vital to ensure cash flow efficiency.",
        "For industrial buyers, securing Input Tax Credit (ITC) is essential to reduce overall raw material costs. To successfully claim ITC without query flags, the procuring corporate entity must ensure that the supplier issues a valid tax invoice with matching GSTR-1 entries, which reconcile automatically in the buyer's GSTR-2B. Discrepancies between invoices and filings can result in the freezing of credit, leading to audit delays and cash flow bottlenecks.",
        "Furthermore, every bulk transport movement exceeding Rs. 50,000 requires a registered e-Way Bill specifying the transport vehicle registration number, cargo weight, and dispatch mill coordinates. At Saarthi Organics, we manage all compliance steps. E-Way bills, excise permits, and GST billing are generated instantly upon vehicle dispatch from our partner sugar mills, and our accounting desk ensures that GSTR filings are logged on-time, enabling seamless credit claims for your plant."
      ]
    },
    {
      id: 2,
      title: "Evaluating Total Reducing Sugars (TRS) in Industrial Molasses",
      category: "Quality",
      summary: "A deep dive into why TRS values determine sugar-to-alcohol conversion yields in fermentation chambers, and how to spot-test incoming tanker batches using refractometers and chemical analysis.",
      date: "May 24, 2026",
      readTime: "5 min read",
      image: "/industry_distilleries.png",
      author: {
        name: "Dr. Ananya Sen",
        role: "Head of Laboratory QA",
        initials: "AS"
      },
      content: [
        "In industrial bio-ethanol distilleries, the fermentation yield of sugarcane molasses is directly dictated by its sugar content. Total Reducing Sugars (TRS) represent the combined concentration of sucrose, glucose, and fructose present in the syrup. High-quality blackstrap molasses typically yields a TRS percentage of 45% to 50%. This value determines the total alcohol yield that can be extracted per ton of raw material.",
        "To evaluate TRS, laboratory technicians utilize chemical titration methods, primarily the Lane-Eynon method, or high-performance liquid chromatography (HPLC). Prior to unloading a road tanker, raw material inspectors perform a refractometer test to verify that the Brix density is at least 80% to 82%, and extract samples to run a quick Fehling's solution titration to ensure TRS levels meet contractual agreements. Checking these metrics prevents the unloading of low-sugar cargo.",
        "Low TRS molasses reduces the efficiency of yeast strains, resulting in lower alcohol conversion ratios per metric ton, which raises production costs. Saarthi Organics guarantees TRS levels through certificate of analysis (COA) sheets issued for each tanker load, tested in our own quality control lab prior to shipment, giving plant managers full predictability."
      ]
    },
    {
      id: 3,
      title: "Winter Viscosity Control: Cold-Climate Transport Logistics",
      category: "Logistics",
      summary: "Pumping heavy blackstrap molasses becomes problematic below 15°C. Review logistics engineering best practices, steam-coiled tankers, and intake piping layouts to keep your manufacturing plant running through winter.",
      date: "April 18, 2026",
      readTime: "7 min read",
      image: "/logistics_fleet.png",
      author: {
        name: "Anuj Tayal",
        role: "Co-Founder & Logistics Director",
        initials: "AT"
      },
      content: [
        "The physical flow behavior of sugarcane molasses is highly temperature-dependent. At warm temperatures, molasses acts as a pumpable fluid, but as the ambient temperature drops below 15°C, its viscosity increases exponentially, transforming it into a thick, semi-solid syrup that can clog standard transfer pumps and cause massive delays at the receiving station.",
        "In North India's winter months, bulk transport logistics face major challenges during early morning unloading. To overcome this, we employ dedicated transport road tankers equipped with internal steam-heating coils. Upon arrival at the client's plant, low-pressure steam is injected into the coils for 30 to 45 minutes, reducing the molasses viscosity to a pumpable range (typically around 5,000 to 10,000 centipoise) without scorching the sugars.",
        "Additionally, plants should maintain short intake pipelines, heat-trace their receiving manifolds, and use positive displacement rotary lobe pumps instead of standard centrifugal pumps to ensure smooth, uninterrupted discharge. We coordinate arrival times with plant managers to ensure steam hookups are prepped, reducing idle tanker time."
      ]
    },
    {
      id: 4,
      title: "Brix Concentration and Yeast Yield Optimization in Industrial Fermentation",
      category: "Quality",
      summary: "Explore the biochemistry of sucrose, glucose, and fructose ratios in blackstrap molasses. Discover how minor variations in Brix density directly impact industrial yeast reproduction cycles.",
      date: "April 02, 2026",
      readTime: "6 min read",
      image: "/industry_yeast.png",
      author: {
        name: "Dr. Ananya Sen",
        role: "Head of Laboratory QA",
        initials: "AS"
      },
      content: [
        "Industrial yeast manufacturing and yeast-based fermentation rely on molasses as a primary carbon source. Yeast growth (Saccharomyces cerevisiae) is highly sensitive to the osmotic pressure of the growth medium. If the sugar concentration is too high (excessive Brix), osmotic shock can occur, damaging yeast cell walls and halting reproduction, which ruins fermentation batches.",
        "Conversely, low Brix indicates dilution, which increases the risk of premature bacterial contamination (such as lactic acid bacteria) in storage tanks. The optimal Brix level for raw bulk molasses is 80° to 85° Bx. During yeast media preparation, this is diluted with sterile water to a working Brix of 10° to 15° Bx, supplemented with nitrogen (urea or ammonium salts) and phosphorus to sustain high growth yields.",
        "Saarthi Organics provides standardized, high-purity molasses specifically refined for yeast propagation, ensuring low ash content and high nutritional bioavailability for yeast cultures. We verify every load with refractometer analysis before dispatch."
      ]
    },
    {
      id: 5,
      title: "Molasses as a High-Adhesion Binder in Casting Foundries",
      category: "Applications",
      summary: "A technical evaluation of blackstrap molasses as an organic sand core binder. Learn how thermal degradation properties compare with synthetic resins in high-temperature metal casting.",
      date: "March 15, 2026",
      readTime: "5 min read",
      image: "/industry_foundries.png",
      author: {
        name: "Vikram R. Joshi",
        role: "Materials Engineer",
        initials: "VJ"
      },
      content: [
        "In metal casting foundries, sand molds and cores must withstand intense heat and pressure when molten metal is poured. Traditionally, organic binders like linseed oil or synthetic resins have been used. However, blackstrap molasses represents a highly cost-effective, environmentally friendly organic binder for sand cores.",
        "When mixed with silica sand (typically 2% to 4% by weight) and clay, molasses provides excellent green strength, allowing the sand core to hold its shape prior to baking. During casting, as the molten metal fills the mold, the high heat causes the sugars in the molasses to undergo carbonization, forming a strong carbon bond that temporarily increases mold strength.",
        "Once the casting cools, the carbonized molasses easily crumbles (collapsibility), allowing clean sand removal from the cast metal piece without cracking the finished component, making it an excellent sustainable raw material choice."
      ]
    },
    {
      id: 6,
      title: "Optimizing Cattle Feed Formulations with High-Brix Organic Molasses",
      category: "Applications",
      summary: "Understand how sugarcane molasses improves feed palatability, dust suppression, and digestion rates in dairy cattle feed pellets. Includes a nutrient profile breakdown.",
      date: "February 28, 2026",
      readTime: "6 min read",
      image: "/industry_cattle_feed.png",
      author: {
        name: "Amit Sharma",
        role: "Agricultural Analyst",
        initials: "AS"
      },
      content: [
        "Sugarcane molasses is widely utilized in animal nutrition as an additive in cattle feed formulations. It serves multiple purposes: it suppresses dust in feed mills, binds feed ingredients into compact pellets, and provides a rich source of highly digestible energy (carbohydrates) for livestock.",
        "Furthermore, the naturally sweet aroma and taste of molasses improve the palatability of cattle feed, encouraging feed intake in dairy cows. Molasses also stimulates rumen microbes, enhancing fiber digestion and improving milk yield and fat percentage.",
        "In feed mills, molasses is applied at 5% to 10% of the feed mixture. It is critical to maintain consistent moisture and sugar profiles to ensure feed pellets don't crumble during storage and transit. Saarthi Organics delivers animal-grade molasses with controlled moisture content, ready for industrial pellet mills."
      ]
    }
  ];

  // Helper logic for searching and filtering across all articles
  const isFiltering = activeCategory !== 'All' || searchQuery !== '';

  const allFilteredArticles = articles.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If not filtering, we split out the first article as featured, and show the rest in the grid
  const featuredArticle = articles[0];
  const gridArticles = articles.slice(1);
  const filteredGridArticles = gridArticles.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      
      {/* Subpage Hero Banner */}
      <div className="subpage-hero">
        <div className="subpage-hero-container">
          <span className="section-label">Industrial Insights</span>
          <h1 className="subpage-hero-title">Molasses Sourcing Knowledge Hub</h1>
          <p className="subpage-hero-desc">
            Technical whitepapers, regulatory updates, and logistics guidelines written by industrial procurement specialists at Saarthi Organics.
          </p>
        </div>
      </div>

      {/* Featured Article Section (Only shown when not filtering/searching) */}
      {!isFiltering && (
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px 20px 24px' }}>
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            cursor: 'pointer'
          }} 
            className="featured-blog-card"
            onClick={() => setSelectedArticle(featuredArticle)}
          >
            <div style={{ position: 'relative', minHeight: '320px', width: '100%' }}>
              <Image 
                src={featuredArticle.image} 
                alt={featuredArticle.title} 
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'var(--accent-orange)',
                color: 'var(--text-primary)',
                padding: '6px 12px',
                fontSize: '0.75rem',
                fontWeight: 700,
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Featured: {featuredArticle.category}
              </div>
            </div>

            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <h2 style={{ 
                  fontSize: '1.6rem', 
                  color: 'var(--text-primary)', 
                  marginBottom: '16px', 
                  lineHeight: 1.3,
                  fontWeight: 800
                }}>
                  {featuredArticle.title}
                </h2>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.98rem', 
                  lineHeight: 1.6, 
                  marginBottom: '24px' 
                }}>
                  {featuredArticle.summary}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--accent-gold)',
                    color: '#111111',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.9rem'
                  }}>
                    {featuredArticle.author.initials}
                  </div>
                  <div>
                    <h5 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>{featuredArticle.author.name}</h5>
                    <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.75rem' }}>{featuredArticle.author.role}</p>
                  </div>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(featuredArticle);
                  }}
                  className="btn-primary"
                  style={{ padding: '10px 20px', fontSize: '0.85rem', cursor: 'pointer' }}
                >
                  Read Article &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar Section */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '24px'
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
                  background: activeCategory === cat ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  color: activeCategory === cat ? '#111111' : 'var(--text-primary)',
                  border: `1px solid ${activeCategory === cat ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat ? '0 0 10px rgba(212, 175, 55, 0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input
              type="text"
              placeholder="Search papers & articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px',
                paddingRight: '40px',
                borderRadius: '4px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem'
              }}
            />
            <svg
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-secondary)',
                width: '16px',
                height: '16px'
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ marginTop: '16px', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>
          Showing {isFiltering ? allFilteredArticles.length : articles.length} of {articles.length} articles
          {isFiltering && (
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              style={{
                marginLeft: '12px',
                background: 'transparent',
                border: 'none',
                color: 'var(--accent-gold)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                textDecoration: 'underline',
                padding: 0
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </section>

      {/* Grid of Articles */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px 24px' }}>
        {((isFiltering ? allFilteredArticles : filteredGridArticles).length > 0) ? (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
            gap: '30px' 
          }}>
            {(isFiltering ? allFilteredArticles : filteredGridArticles).map((post) => (
              <div 
                key={post.id}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  animation: 'fadeIn 0.4s ease-out',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  cursor: 'pointer'
                }}
                className="blog-grid-card"
                onClick={() => setSelectedArticle(post)}
              >
                {/* Article Image Cover */}
                <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    className="blog-card-img"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(17, 17, 17, 0.85)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    color: 'var(--accent-gold)',
                    padding: '4px 10px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    borderRadius: '3px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {post.category}
                  </div>
                </div>

                {/* Article Info */}
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyItems: 'center', gap: '12px', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 style={{ 
                      fontSize: '1.2rem', 
                      color: 'var(--text-primary)', 
                      marginBottom: '12px', 
                      lineHeight: 1.4,
                      fontWeight: 700 
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '0.9rem', 
                      lineHeight: 1.5, 
                      marginBottom: '24px' 
                    }}>
                      {post.summary}
                    </p>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    borderTop: '1px solid var(--border-color)', 
                    paddingTop: '16px' 
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--bg-primary)',
                        color: 'var(--accent-gold)',
                        border: '1px solid var(--border-color)',
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

                    <span style={{
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: 'var(--accent-gold)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }} className="read-more-link">
                      Read Article <span style={{ transition: 'transform 0.2s ease' }} className="arrow">&rarr;</span>
                    </span>
                  </div>
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
            <p style={{ fontSize: '0.9rem' }}>We couldn't find any papers matching your filter or search query. Try another keyword.</p>
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

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(17, 17, 17, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.2s ease-out'
          }} 
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              maxWidth: '780px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative',
              padding: '40px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 10
              }}
              className="modal-close-btn"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div style={{ marginBottom: '16px' }}>
              <span style={{
                background: 'var(--accent-orange)',
                color: 'var(--text-primary)',
                padding: '4px 10px',
                fontSize: '0.7rem',
                fontWeight: 700,
                borderRadius: '3px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                {selectedArticle.category}
              </span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '16px', fontWeight: '800' }}>
                {selectedArticle.title}
              </h2>
              <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            {/* Author Profile card inside Modal */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-primary)', padding: '16px', borderRadius: '6px', marginBottom: '24px', border: '1px solid var(--border-color)' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--accent-gold)',
                color: '#111111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '0.9rem'
              }}>
                {selectedArticle.author.initials}
              </div>
              <div>
                <h5 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>{selectedArticle.author.name}</h5>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.75rem' }}>{selectedArticle.author.role}</p>
              </div>
            </div>

            {/* Article paragraphs */}
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem' }}>
              {selectedArticle.content.map((p, idx) => (
                <p key={idx} style={{ marginBottom: '20px' }}>{p}</p>
              ))}
            </div>

            {/* Call to action */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px', marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h5 style={{ color: 'var(--text-primary)', margin: '0 0 4px 0', fontSize: '0.95rem' }}>Secure Sourcing & Contract Pricing</h5>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.85rem' }}>Connect with our commercial desk regarding this topic.</p>
              </div>
              <a 
                href="#quote-form-section" 
                onClick={() => setSelectedArticle(null)}
                className="btn-primary" 
                style={{ padding: '12px 24px', fontSize: '0.9rem', textDecoration: 'none' }}
              >
                Inquire Now &rarr;
              </a>
            </div>

          </div>
        </div>
      )}
      
    </main>
  );
}


