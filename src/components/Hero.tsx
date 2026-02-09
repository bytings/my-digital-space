import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Terminal, ChevronDown, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { generateCV } from "@/utils/generateCV";

const Hero = () => {
  const { t, language } = useLanguage();

  const handleDownloadCV = () => {
    generateCV({ language });
  };

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
          {/* Terminal-style intro – Glass container */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glass-hover mb-8">
            <Terminal className="w-4 h-4 text-primary" />
            <code className="text-sm text-muted-foreground">
              <span className="text-primary">~/portfolio</span> → welcome
            </code>
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </div>

          {/* Name as brand label */}
          <p className="text-xl md:text-2xl font-semibold text-primary mb-4" itemProp="name">
            Daniel Mendoza
          </p>
          
          {/* Main H1 - SEO optimized headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-foreground">
            {t('hero.headline')}
          </h1>
          
          {/* Sub-headline with job title */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light mb-4">
            <span itemProp="jobTitle">{t('hero.title')}</span>
          </h2>
          
          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span>{t('hero.location')}</span>
          </div>

          {/* Description - Results oriented */}
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons – Glass styled */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg" asChild>
              <a href="mailto:daniel.mendozac@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                {t('hero.cta')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="glass glass-hover border-0"
            >
              <Download className="w-4 h-4 mr-2" />
              {t('hero.download')}
            </Button>
            <Button size="lg" variant="outline" className="glass glass-hover border-0" asChild>
              <a href="https://www.linkedin.com/in/daniel-mendoza-c" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass glass-hover border-0" asChild>
              <a href="https://github.com/bytings" target="_blank" rel="noopener noreferrer">
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
