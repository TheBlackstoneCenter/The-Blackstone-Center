import Layout from '@/components/Layout';
import { SITE_NAME } from '@/utils/constants';

export const metadata = {
  title: SITE_NAME,
};

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-dark-navy text-white py-24 text-center">
        <div className="container-narrow">
          <h1 className="text-5xl font-serif mb-6">The Blackstone Center</h1>
          <p className="text-xl text-cream/90 max-w-2xl mx-auto mb-8">
            Dedicated to scholarship, research, and publication in the fields of
            theology, history, and culture.
          </p>
          <a href="/about" className="btn-primary">
            Learn More
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-cream">
        <div className="container-wide">
          <h2 className="section-heading text-center">
            The William E. Blackstone Center
          </h2>
          <p className="text-center text-dark-navy/80 max-w-3xl mx-auto mb-12">
            Welcome to The Blackstone Center — a hub for serious scholarship
            exploring the life and legacy of William E. Blackstone and the
            broader landscape of theological and historical study.
          </p>

          {/* Quick links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-cream-dark">
              <h3 className="text-xl font-serif text-primary-green mb-2">
                Publications
              </h3>
              <p className="text-dark-navy/70 mb-4">
                Browse scholarly works produced by and about The Blackstone Center.
              </p>
              <a href="/publications" className="text-primary-green font-semibold hover:underline">
                View Publications →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-cream-dark">
              <h3 className="text-xl font-serif text-primary-green mb-2">
                Beauty for Ashes
              </h3>
              <p className="text-dark-navy/70 mb-4">
                Explore Judith Mendelson Rood&apos;s book on healing, history, and hope.
              </p>
              <a href="/beauty-for-ashes" className="text-primary-green font-semibold hover:underline">
                Explore the Book →
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-cream-dark">
              <h3 className="text-xl font-serif text-primary-green mb-2">
                Blog
              </h3>
              <p className="text-dark-navy/70 mb-4">
                Articles, essays, and reflections from The Blackstone Center.
              </p>
              <a href="/blog" className="text-primary-green font-semibold hover:underline">
                Read the Blog →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
