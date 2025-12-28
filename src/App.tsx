import { useTranslation } from 'react-i18next';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessLines from './components/BusinessLines';
import About from './components/About';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "D2F Consulting",
    "url": "https://www.d2fconsulting.com",
    "logo": "https://www.d2fconsulting.com/images/logo-web.jpg",
    "description": t('hero.description'),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogotá",
      "addressCountry": "CO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-300-000-0000", // Placeholder, update if real number known or remove
      "contactType": "customer service",
      "email": "d2fgestion@gmail.com"
    },
    "sameAs": [
      "https://www.instagram.com/d2f_consulting_agency/",
      "https://www.facebook.com/D2FConsultingAgency",
      "https://www.linkedin.com/company/10602504/"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={t('hero.title')}
        description={t('hero.description')}
      />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <Navbar />
      <Hero />
      <BusinessLines />
      <About />
      <Clients />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;