import { Shield, Clock, Award, Wrench } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'אחריות מלאה',
    description: 'אחריות על כל העבודות והחלפים',
  },
  {
    icon: Clock,
    title: 'זמינות גבוהה',
    description: 'מגיע לביתך תוך שעות בודדות',
  },
  {
    icon: Award,
    title: 'מקצועיות מוכחת',
    description: 'יותר מ-10 שנות ניסיון בתחום',
  },
  {
    icon: Wrench,
    title: 'ציוד מתקדם',
    description: 'שימוש בכלי עבודה וחלפים איכותיים',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <IconComponent size={28} className="text-primary" />
                </div>
                <h3 className="font-heebo font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
