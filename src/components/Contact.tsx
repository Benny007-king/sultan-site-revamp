import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    title: 'טלפון',
    content: '052-406-6783',
    href: 'tel:+972524066783',
  },
  {
    icon: MessageCircle,
    title: 'וואטסאפ',
    content: 'שלח הודעה',
    href: 'https://wa.me/972524066783?text=שלום, אשמח לקבל הצעת מחיר',
  },
  {
    icon: MapPin,
    title: 'אזור שירות',
    content: 'ירושלים, גוש דן והמרכז',
  },
  {
    icon: Clock,
    title: 'שעות פעילות',
    content: 'א׳-ה׳ 08:00-19:00',
  },
];

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-24 bg-gradient-to-br from-secondary to-secondary/90 text-primary-foreground relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 text-primary/5 text-[20rem] font-black pointer-events-none select-none transform -translate-x-1/4 translate-y-1/4">
        ⚡
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-heebo font-bold text-center mb-4">
          צור קשר
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-12" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item) => {
            const IconComponent = item.icon;
            const Wrapper = item.href ? 'a' : 'div';
            
            return (
              <Wrapper
                key={item.title}
                {...(item.href && { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' })}
                className="contact-card text-center cursor-pointer"
              >
                <IconComponent size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-heebo font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-primary-foreground/80">{item.content}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
