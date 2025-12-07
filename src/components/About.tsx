import { useEffect, useRef, useState } from 'react';
import technicianImg from '@/assets/technician-portrait.jpg';

const skills = [
  { name: 'אמינות ושקיפות', value: 100 },
  { name: 'מקצועיות תיקונים', value: 100 },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title font-heebo">קצת עלי</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-none">
            <div className="relative">
              {/* Decorative Border */}
              <div className="absolute top-4 right-4 w-full h-full border-4 border-primary rounded-2xl -z-10" />
              
              <img
                src={technicianImg}
                alt="טכנאי מוסמך בעבודה"
                className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-right">
            <h3 className="font-heebo font-bold text-2xl md:text-3xl text-secondary mb-6">
              סולטן – איכות ללא פשרות
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              כבר למעלה מ-10 שנים שאני דואג שהבית שלכם יחזור לתפקד במהירות. 
              אני מאמין ששירות טוב מתחיל באבחון מדויק ומסתיים בחיוך ובשטח נקי.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              אני מתמחה בתיקון המותגים המובילים (אלקטרה, תדיראן, LG ועוד), 
              תוך שימוש בכלי עבודה מתקדמים וחלפים איכותיים בלבד.
            </p>
            
            {/* Skills */}
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-heebo font-bold text-secondary">{skill.name}</span>
                    <span className="font-heebo font-bold text-primary">{skill.value}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: isVisible ? `${skill.value}%` : '0%',
                        transitionDelay: '0.3s'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
