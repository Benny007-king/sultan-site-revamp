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
          <button
            onClick={() => setIsPrivacyOpen(true)}
            className="text-muted-foreground/70 hover:text-primary transition-colors text-sm border-b border-transparent hover:border-primary"
          >
            מדיניות פרטיות
          </button>
        </div>
      </footer>
      
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
};

export default Footer;
