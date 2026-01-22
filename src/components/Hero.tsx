import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Download, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-up">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-primary p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-5xl font-bold text-gradient">DM</span>
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Daniel <span className="text-gradient">Mendoza</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            {t('hero.title')}
          </p>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>{t('hero.location')}</span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg" asChild>
              <a href="mailto:contact@danielmendoza.dev">
                <Mail className="w-4 h-4 mr-2" />
                {t('hero.cta')}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass hover-lift" asChild>
              <a href="https://linkedin.com/in/danielmendoza" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass hover-lift" asChild>
              <a href="https://github.com/danielmendoza" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToSkills}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to skills"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
