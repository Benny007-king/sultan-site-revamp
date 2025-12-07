import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/972524066783?text=שלום, אשמח לקבל הצעת מחיר"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="שלח הודעה בוואטסאפ"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
