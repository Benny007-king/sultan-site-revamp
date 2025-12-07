import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'יוסי כהן',
    location: 'ירושלים',
    text: 'שירות מעולה! הגיע מהר, תיקן את המזגן ביעילות והשאיר את הבית נקי. ממליץ בחום!',
    rating: 5,
  },
  {
    name: 'רחל לוי',
    location: 'פתח תקווה',
    text: 'טכנאי מקצועי ואמין. הסביר בדיוק מה הבעיה ותיקן במחיר הוגן. בטוח אתקשר שוב.',
    rating: 5,
  },
  {
    name: 'משה אברהם',
    location: 'רמת גן',
    text: 'המקרר פסק לעבוד באמצע הלילה. דניאל הגיע למחרת בבוקר ותיקן תוך שעה. תודה רבה!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title font-heebo">מה לקוחות אומרים</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article 
              key={testimonial.name}
              className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-heebo font-bold text-secondary">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
