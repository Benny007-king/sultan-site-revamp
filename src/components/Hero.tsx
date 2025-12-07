import { Phone, ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <img 
        src={heroBg}
        alt="טכנאי מזגנים מקצועי"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-primary/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <span className="inline-block text-primary font-heebo font-medium text-lg md:text-xl mb-4 tracking-wide">
            שירות טכנאי מוסמך
          </span>
          
          <h1 className="font-heebo font-black text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight drop-shadow-lg">
            המומחה שלך
            <br />
            <span className="text-primary">למוצרי חשמל</span>
          </h1>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            תיקון, התקנה ותחזוקת מזגנים, מקררים ומכונות כביסה.
            <br className="hidden md:block" />
            שירות מהיר, נקי ומקצועי בבית הלקוח.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+972524066783" 
              className="btn-hero flex items-center gap-3 text-lg"
            >
              <Phone size={20} />
              <span>הזמן טכנאי</span>
            </a>
            
            <a 
              href="#services" 
              className="btn-hero-outline flex items-center gap-3 text-lg"
            >
              <span>ראה שירותים</span>
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <a 
          href="#about" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 animate-float"
          aria-label="גלול למטה"
        >
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
