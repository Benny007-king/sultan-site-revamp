import { useState } from 'react';
import PrivacyModal from './PrivacyModal';

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-secondary py-10 text-center border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-3">
            © {new Date().getFullYear()} סולטן חשמל ומיזוג – כל הזכויות שמורות
          </p>
        <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="text-muted-foreground/70 hover:text-primary transition-colors text-sm border-b border-transparent hover:border-primary"
            >
              מדיניות פרטיות
            </button>
            <span className="text-muted-foreground/50">|</span>
            <a
              href="https://www.nagish.co.il/statement/Xp4KZbAPBW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/70 hover:text-primary transition-colors text-sm border-b border-transparent hover:border-primary"
            >
              הצהרת נגישות
            </a>
          </div>
        </div>
      </footer>
      
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
};

export default Footer;
