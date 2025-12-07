import { useState, useEffect } from 'react';

const CONSENT_KEY = 'sultan_cookie_consent';
const CONSENT_TIME_KEY = 'sultan_cookie_time';
const EXPIRY_HOURS = 48;

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  useEffect(() => {
    const checkConsent = () => {
      const consentTime = localStorage.getItem(CONSENT_TIME_KEY);
      
      if (consentTime) {
        const now = new Date().getTime();
        const hoursPassed = (now - parseInt(consentTime)) / (1000 * 60 * 60);
        
        if (hoursPassed < EXPIRY_HOURS) {
          return; // Consent still valid
        }
      }
      
      // Show popup after delay
      setTimeout(() => setIsVisible(true), 1000);
    };

    checkConsent();
  }, []);

  const saveConsent = (marketing: boolean) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ necessary: true, marketing }));
    localStorage.setItem(CONSENT_TIME_KEY, new Date().getTime().toString());
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveConsent(true);
  };

  const handleSaveSettings = () => {
    saveConsent(marketingEnabled);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary/60 backdrop-blur-sm z-[90] flex justify-center p-4">
      <div className="bg-background w-full max-w-xl rounded-xl shadow-2xl border-t-4 border-primary p-6 animate-fade-in-up">
        <h3 className="font-heebo font-bold text-lg text-secondary mb-3">
          אנו מכבדים את הפרטיות שלך
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          האתר משתמש בעוגיות כדי לשפר את חווית הגלישה. חלקן נחוצות לתפקוד האתר ואחרות לסטטיסטיקה.
        </p>
        
        {showSettings && (
          <div className="bg-muted p-4 rounded-lg mb-4 space-y-3">
            <label className="flex items-center justify-between">
              <span className="font-heebo font-semibold text-secondary">עוגיות הכרחיות (תמיד פעיל)</span>
              <div className="w-10 h-6 bg-primary/50 rounded-full relative cursor-not-allowed">
                <div className="absolute right-1 top-1 w-4 h-4 bg-primary rounded-full" />
              </div>
            </label>
            
            <label className="flex items-center justify-between cursor-pointer">
              <span className="font-heebo font-semibold text-secondary">סטטיסטיקה ושיווק</span>
              <button
                onClick={() => setMarketingEnabled(!marketingEnabled)}
                className={`w-10 h-6 rounded-full relative transition-colors ${
                  marketingEnabled ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              >
                <div 
                  className={`absolute top-1 w-4 h-4 bg-background rounded-full transition-all ${
                    marketingEnabled ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </label>
          </div>
        )}
        
        <div className="flex gap-3">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-primary text-primary-foreground font-heebo font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            אשר הכל
          </button>
          <button
            onClick={showSettings ? handleSaveSettings : () => setShowSettings(true)}
            className="flex-1 bg-muted text-secondary font-heebo font-bold py-3 rounded-lg hover:bg-muted/80 transition-colors"
          >
            {showSettings ? 'שמור העדפות' : 'הגדרות'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
