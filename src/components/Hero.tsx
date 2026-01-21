import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground">
            DM
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Daniel Mendoza
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
            .NET Full Stack Software Engineer
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Con más de 10 años de experiencia en desarrollo de aplicaciones, dedicado a ser un 
          creativo solucionador de problemas. Apasionado por impulsar la innovación y 
          optimizar procesos operativos con soluciones eficientes y de vanguardia.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="mailto:contact@danielmendoza.dev">
              <Mail className="w-4 h-4 mr-2" />
              Contactar
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/danielmendoza" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/danielmendoza" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
