import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: ".NET Engineer",
    company: "Kenility",
    period: "Dic. 2022 - Actualidad",
    location: "Argentina · Remoto",
    description: "Health Equity - COBRA Product. Desarrollo y mantenimiento de aplicaciones enterprise.",
    technologies: [".Net Core", ".Net Framework", "API Rest", "WCF", "Entity Framework", "SQL Server", "Azure DevOps"],
  },
  {
    title: "Fullstack Developer",
    company: "MOBEATS",
    period: "Abr. 2021 - Jun. 2023",
    location: "Argentina",
    description: "Desarrollo de múltiples proyectos: E-commerce Panther, C-Control (VideoWalls), MegaTrans (GPS tracking), MOP (Intranet gubernamental).",
    technologies: ["C# .Net Core", "Angular", "SQL Server", "Docker", "AWS", "WebSockets"],
  },
  {
    title: ".NET Developer",
    company: "Cognizant",
    period: "Mar. 2018 - Abr. 2021",
    location: "Buenos Aires, Argentina",
    description: "Metlife: Mantenimiento y mejoras a la aplicación web de recepción de pólizas de seguros.",
    technologies: ["C# .Net Framework", "Microsoft SQL"],
  },
  {
    title: "Application Developer",
    company: "PDVSA",
    period: "Mar. 2017 - Ene. 2018",
    location: "Maturín, Venezuela",
    description: "Desarrollo de aplicaciones internas para la empresa petrolera estatal.",
    technologies: [".NET", "SQL Server"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Experiencia Profesional
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-20">
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
                
                <Card className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary md:hidden" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
