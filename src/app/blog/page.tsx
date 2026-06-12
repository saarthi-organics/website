import type { Metadata } from 'next';
import BlogHubClient from './BlogHubClient';

export const metadata: Metadata = {
  title: 'Molasses Procurement & Sourcing Intelligence Blog | Saarthi Organics',
  description: 'Technical B2B publications, excise compliance updates, and logistics engineering insights on industrial sugarcane blackstrap molasses sourcing in North India.',
  alternates: {
    canonical: 'https://www.saarthiorganics.com/blog',
  },
};

export default function BlogHubPage() {
  return (
    <main style={{ marginTop: '72px', background: 'var(--bg-primary)' }}>
      <BlogHubClient />
    </main>
  );
}
