import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'ראשי' },
    { href: '#about', label: 'אודות' },
    { href: '#services', label: 'שירותים' },
    { href: '#gallery', label: 'עבודות' },
    { href: '#contact', label: 'צור קשר' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/98 shadow-lg py-2 border-b-4 border-primary' 
          : 'bg-background/90 shadow-sm py-3 border-b-4 border-primary'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 z-50">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heebo font-black text-2xl">
              ס
            </div>
            <div className="flex flex-col">
              <span className="font-heebo font-black text-2xl text-primary">סולטן</span>
              <span className="font-heebo font-medium text-sm text-secondary">תיקון מוצרי חשמל</span>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2 text-secondary"
            aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links */}
          <ul className={`
            md:flex md:items-center md:gap-8
            fixed md:static top-20 right-0 w-full md:w-auto h-[calc(100vh-5rem)] md:h-auto
            bg-background md:bg-transparent
            flex-col md:flex-row items-center justify-start md:justify-end
            pt-12 md:pt-0 gap-8
            transition-all duration-400 ease-in-out
            ${isMenuOpen ? 'flex translate-x-0' : 'hidden md:flex translate-x-full md:translate-x-0'}
          `}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-heebo font-semibold text-lg md:text-base text-secondary hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
            <li>
              <a 
                href="tel:0524066783"
                className="flex items-center gap-2 font-heebo font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <Phone size={18} />
                <span>052-406-6783</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
