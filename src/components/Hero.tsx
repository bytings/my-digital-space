import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Terminal, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-gradient-hero">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-up">
          {/* Terminal-style intro */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
            <Terminal className="w-4 h-4 text-primary" />
            <code className="text-sm text-muted-foreground">
              <span className="text-primary">~/portfolio</span> → welcome
            </code>
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Daniel Mendoza
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-4">
            {t('hero.title')}
          </p>
          
          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>{t('hero.location')}</span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg" asChild>
              <a href="mailto:daniel.mendozac@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                {t('hero.cta')}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover-lift" asChild>
              <a href="https://www.linkedin.com/in/daniel-mendoza-c" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="hover-lift" asChild>
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
