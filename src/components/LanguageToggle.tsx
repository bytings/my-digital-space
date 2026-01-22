import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 font-medium hover:bg-primary/10"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{language === 'en' ? 'ES' : 'EN'}</span>
    </Button>
  );
};

export default LanguageToggle;
