import { useState } from 'react';
import { Accessibility, X, ZoomIn, Eye, Palette, Type, RotateCcw } from 'lucide-react';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOptions, setActiveOptions] = useState<Set<string>>(new Set());

  const options = [
    { id: 'large-text', icon: ZoomIn, label: 'הגדל טקסט', className: 'acc-large-text' },
    { id: 'contrast', icon: Eye, label: 'ניגודיות גבוהה', className: 'acc-contrast' },
    { id: 'grayscale', icon: Palette, label: 'גווני אפור', className: 'acc-grayscale' },
    { id: 'links', icon: Type, label: 'הדגש קישורים', className: 'acc-links' },
    { id: 'readable', icon: Type, label: 'פונט קריא', className: 'acc-readable-font' },
  ];

  const toggleOption = (option: typeof options[0]) => {
    const html = document.documentElement;
    html.classList.toggle(option.className);
    
    setActiveOptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(option.id)) {
        newSet.delete(option.id);
      } else {
        newSet.add(option.id);
      }
      return newSet;
    });
  };

  const resetAll = () => {
    const html = document.documentElement;
    options.forEach(opt => {
      html.classList.remove(opt.className);
    });
    setActiveOptions(new Set());
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 right-0 -translate-y-1/2 z-[80] bg-primary text-primary-foreground p-3 rounded-r-none rounded-l-lg shadow-lg hover:pr-5 transition-all"
        aria-label="פתח תפריט נגישות"
      >
        <Accessibility size={24} />
      </button>

      {/* Menu */}
      <div 
        className={`fixed top-1/2 -translate-y-1/2 z-[79] w-72 bg-background shadow-2xl rounded-r-none rounded-l-xl border-r-4 border-primary p-5 transition-all duration-300 ${
          isOpen ? 'right-0' : '-right-80'
        }`}
      >
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
          <h3 className="font-heebo font-bold text-secondary">נגישות</h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground"
            aria-label="סגור תפריט נגישות"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => {
            const IconComponent = option.icon;
            const isActive = activeOptions.has(option.id);
            
            return (
              <button
                key={option.id}
                onClick={() => toggleOption(option)}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border text-center text-sm transition-colors ${
                  isActive 
                    ? 'bg-accent border-primary text-primary' 
                    : 'bg-muted border-border text-secondary hover:bg-accent/50'
                }`}
              >
                <IconComponent size={20} className="mb-1 text-primary" />
                <span className="font-heebo">{option.label}</span>
              </button>
            );
          })}
          
          {/* Reset Button */}
          <button
            onClick={resetAll}
            className="col-span-2 flex items-center justify-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive hover:bg-destructive/20 transition-colors"
          >
            <RotateCcw size={18} />
            <span className="font-heebo font-semibold">איפוס</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AccessibilityWidget;
