import { Wind, Thermometer, Shirt, Flame } from 'lucide-react';

const services = [
  {
    icon: Wind,
    title: 'תיקון מזגנים',
    description: 'איתור דליפות גז, החלפת קבלים, ניקוי עמוק ותיקון כרטיסים אלקטרוניים.',
  },
  {
    icon: Thermometer,
    title: 'מקררים ומקפיאים',
    description: 'טיפול בבעיות הקפאה, החלפת גומיות איטום, מאווררים ומדחסים.',
  },
  {
    icon: Shirt,
    title: 'מכונות כביסה',
    description: 'פתרון תקלות סחיטה, החלפת משאבות מים, תיקון דלתות וגומיות.',
  },
  {
    icon: Flame,
    title: 'מייבשים ותנורים',
    description: 'החלפת גופי חימום, רצועות ותרמוסטטים להבטחת בטיחות מלאה.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title font-heebo">השירותים שלי</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <article 
                key={service.title}
                className="service-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="icon-box">
                  <IconComponent size={32} />
                </div>
                
                <h3 className="font-heebo font-bold text-xl text-secondary mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
