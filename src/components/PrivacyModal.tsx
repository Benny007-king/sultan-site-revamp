import { X } from 'lucide-react';
import { useEffect } from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-secondary/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-background w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl shadow-2xl border-t-4 border-primary">
        <div className="sticky top-0 bg-background p-4 border-b border-border flex items-center justify-between">
          <h2 className="font-heebo font-bold text-xl text-primary">מדיניות פרטיות</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="סגור"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-6 text-foreground">
          <p className="text-muted-foreground">
            ברוכים הבאים לאתר סולטן חשמל ומיזוג. הפרטיות שלכם חשובה לנו, ומסמך זה נועד להסביר בצורה שקופה איזה מידע אנו אוספים וכיצד אנו משתמשים בו.
          </p>
          
          <div>
            <h3 className="font-heebo font-bold text-lg text-secondary mb-3">1. איסוף מידע</h3>
            <p className="text-muted-foreground mb-2">
              כאשר אתם יוצרים איתנו קשר דרך האתר (טלפון, וואטסאפ או טופס), אנו עשויים לקבל מידע הכולל:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
              <li>שם מלא</li>
              <li>מספר טלפון</li>
              <li>כתובת למתן השירות</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heebo font-bold text-lg text-secondary mb-3">2. שימוש בקבצי עוגיות (Cookies)</h3>
            <p className="text-muted-foreground mb-2">
              האתר עושה שימוש בקבצי "עוגיות" (Cookies) על מנת לשפר את חווית המשתמש וליצור סטטיסטיקות שימוש.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mr-4">
              <li><strong>עוגיות הכרחיות:</strong> נדרשות לתפעול תקין של האתר.</li>
              <li><strong>עוגיות סטטיסטיקה ושיווק:</strong> עוזרות לנו להבין כיצד גולשים משתמשים באתר.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heebo font-bold text-lg text-secondary mb-3">3. אבטחת מידע</h3>
            <p className="text-muted-foreground">
              אנו נוקטים באמצעי זהירות מקובלים על מנת לשמור על סודיות המידע. המידע האישי שלכם לא יועבר לצד ג' ללא הסכמתכם.
            </p>
          </div>
          
          <div>
            <h3 className="font-heebo font-bold text-lg text-secondary mb-3">4. יצירת קשר</h3>
            <p className="text-muted-foreground">
              בכל שאלה בנוגע לפרטיות, ניתן לפנות אלינו בטלפון 052-406-6783.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
