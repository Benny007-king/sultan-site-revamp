import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen font-assistant">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Brands />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppButton />
      <AccessibilityWidget />
      <CookieConsent />
    </div>
  );
};

export default Index;
