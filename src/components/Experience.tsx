import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      title: ".NET Engineer",
      company: "Kenility",
      period: language === 'en' ? "Dec. 2022 - Present" : "Dic. 2022 - Actualidad",
      duration: language === 'en' ? "3 years 2 months" : "3 años 2 meses",
      location: `Argentina · ${t('experience.remote')}`,
      description: t('exp.kenility.description'),
      technologies: [".NET Core", ".NET Framework", "REST API", "WCF", "Entity Framework", "SQL Server", "Azure DevOps", "VeraCode", "Unit Test", "Moq"],
    },
    {
      title: "Fullstack Developer",
      company: "MOBEATS",
      period: language === 'en' ? "Apr. 2021 - Jun. 2023" : "Abr. 2021 - Jun. 2023",
      duration: language === 'en' ? "2 years 3 months" : "2 años 3 meses",
      location: "Argentina",
      description: t('exp.mobeats.description'),
      technologies: ["C# .NET Core", "Angular", "SQL Server", "Docker", "AWS", "WebSockets", "GitLab"],
    },
    {
      title: ".NET Developer",
      company: "Cognizant",
      period: language === 'en' ? "Mar. 2018 - Apr. 2021" : "Mar. 2018 - Abr. 2021",
      duration: language === 'en' ? "3 years 2 months" : "3 años 2 meses",
      location: "Buenos Aires, Argentina",
      description: t('exp.cognizant.description'),
      technologies: ["C# .NET Framework", "Microsoft SQL"],
    },
    {
      title: "Application Developer",
      company: "PDVSA",
      period: language === 'en' ? "Mar. 2017 - Jan. 2018" : "Mar. 2017 - Ene. 2018",
      duration: language === 'en' ? "11 months" : "11 meses",
      location: "Maturín, Venezuela",
      description: t('exp.pdvsa.dev.description'),
      technologies: [".NET", "SQL Server"],
    },
    {
      title: t('exp.pdvsa.engineer.title'),
      company: "PDVSA",
      period: language === 'en' ? "Jan. 2013 - Mar. 2017" : "Ene. 2013 - Mar. 2017",
      duration: language === 'en' ? "4 years 3 months" : "4 años 3 meses",
      location: "Maturín, Monagas, Venezuela",
      description: t('exp.pdvsa.engineer.description'),
      technologies: [],
    },
    {
      title: t('exp.najort.title'),
      company: "Najort Computer Services",
      period: language === 'en' ? "Aug. 2012 - Dec. 2012" : "Ago. 2012 - Dic. 2012",
      duration: language === 'en' ? "5 months" : "5 meses",
      location: "Venezuela",
      description: t('exp.najort.description'),
      technologies: [],
    },
    {
      title: t('exp.esvenca.title'),
      company: "ESVENCA",
      period: language === 'en' ? "Oct. 2010 - Aug. 2012" : "Oct. 2010 - Ago. 2012",
      duration: language === 'en' ? "1 year 11 months" : "1 año 11 meses",
      location: "Venezuela",
      description: t('exp.esvenca.description'),
      technologies: [".NET", "SQL Server 2008"],
    },
    {
      title: t('exp.micasa.title'),
      company: "Mi Casa Eap",
      period: language === 'en' ? "Dec. 2007 - Oct. 2010" : "Dic. 2007 - Oct. 2010",
      duration: language === 'en' ? "2 years 11 months" : "2 años 11 meses",
      location: "Venezuela",
      description: t('exp.micasa.description'),
      technologies: [],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t('experience.title')}
        </h2>
        <div className="w-24 h-1 bg-gradient-primary mx-auto mb-16 rounded-full" />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-20 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-primary border-4 border-background shadow-lg hidden md:block" />
                
                <Card className="glass hover-lift overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary" />
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-3">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary md:hidden" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base font-semibold text-primary mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </p>
                        <p className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    {exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
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
