import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Breadcrumb Schema JSON-LD
  // We prepend Home to the schema list as item position 1
  const fullItems = [{ name: 'Home', href: '/' }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href ? `https://www.saarthiorganics.com${item.href === '/' ? '' : item.href}` : undefined
    }))
  };

  return (
    <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)', padding: '16px 24px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" style={{ maxWidth: '1280px', margin: '0 auto', fontSize: '0.85rem', display: 'flex', gap: '8px', flexWrap: 'wrap', color: 'var(--text-secondary)' }}>
        <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="breadcrumb-link">
          Home
        </Link>
        {items.map((item, index) => (
          <div key={index} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ opacity: 0.6 }}>&rarr;</span>
            {index === items.length - 1 ? (
              <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>{item.name}</span>
            ) : (
              <Link href={item.href} style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} className="breadcrumb-link">
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
