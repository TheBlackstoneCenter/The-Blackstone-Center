import Header from './Header';
import Footer from './Footer';

/**
 * Root layout wrapper — wraps every page with Header and Footer.
 *
 * Usage:
 *   <Layout>
 *     <YourPageContent />
 *   </Layout>
 */
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
