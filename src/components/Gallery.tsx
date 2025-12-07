import galleryAc from '@/assets/gallery-ac.jpg';
import galleryFridge from '@/assets/gallery-fridge.jpg';
import galleryWasher from '@/assets/gallery-washer.jpg';

const galleryItems = [
  {
    image: galleryAc,
    title: 'תיקון מדחס מזגן',
    description: 'החלפת מדחס במזגן תדיראן 2.5 כ"ס',
  },
  {
    image: galleryFridge,
    title: 'תיקון מקרר',
    description: 'תיקון מערכת קירור במקרר LG',
  },
  {
    image: galleryWasher,
    title: 'שיפוץ מכונת כביסה',
    description: 'החלפת מסבים ומשאבה במכונה',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title font-heebo">תיקונים מהשטח</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <article 
              key={item.title}
              className="gallery-item group"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-secondary/95 via-secondary/70 to-transparent text-primary-foreground transition-all duration-300 group-hover:pb-8 group-hover:from-primary">
                <h3 className="font-heebo font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
