const brands = [
  { name: 'Electra', logo: 'https://logo.clearbit.com/electra.co.il' },
  { name: 'Tadiran', logo: 'https://logo.clearbit.com/tadiran-international.com' },
  { name: 'LG', logo: 'https://logo.clearbit.com/lg.com' },
  { name: 'Samsung', logo: 'https://logo.clearbit.com/samsung.com' },
  { name: 'Bosch', logo: 'https://logo.clearbit.com/bosch.com' },
  { name: 'Tornado', logo: 'https://logo.clearbit.com/tornado-top.co.il' },
];

const Brands = () => {
  // Duplicate brands for seamless infinite scroll
  const allBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-muted overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-muted-foreground font-heebo text-lg">
          עובד עם המותגים המובילים
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-muted to-transparent z-10" />
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-muted to-transparent z-10" />
        
        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {allBrands.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`}
              className="brand-item flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-auto"
                loading="lazy"
                onError={(e) => {
                  // Fallback if logo doesn't load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="font-heebo font-bold text-muted-foreground">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
