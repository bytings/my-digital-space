import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  tasks?: string[];
  projects?: {
    name: string;
    description: string;
  }[];
  stack?: string[];
}

const Experience = () => {
  const { t, language } = useLanguage();
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  const experiences: ExperienceItem[] = [
    {
      title: ".NET Engineer",
      company: "Kenility",
      period: language === 'en' ? "Dec. 2022 - Present" : "Dic. 2022 - Actualidad",
      duration: language === 'en' ? "3 years 2 months" : "3 años 2 meses",
      location: `Argentina · ${t('experience.remote')}`,
      description: t('exp.kenility.description'),
      technologies: [".NET Core", ".NET Framework", "REST API", "WCF", "Entity Framework", "SQL Server", "Azure DevOps", "VeraCode", "Unit Test", "Moq"],
      tasks: language === 'en' 
        ? [
            "Development and implementation of functionalities in both BackEnd and FrontEnd",
            "Analysis and estimation of tasks",
            "Creation and management of database tables",
            "Management of repositories in GitLab",
            "Reviewing and approving pull requests on Azure"
          ]
        : [
            "Desarrollo e implementación de funcionalidades tanto en BackEnd como en FrontEnd",
            "Análisis y estimación de tareas",
            "Creación y gestión de tablas de base de datos",
            "Gestión de repositorios en GitLab",
            "Revisión y aprobación de pull requests en Azure"
          ],
      projects: [
        {
          name: "Cobra Product",
          description: language === 'en' 
            ? "Redesign and code update of a legacy application, using .NET technology with Razor pages and Microsoft SQL, to enhance application speed and performance. Additionally, incorporating a CI/CD pipeline that has reduced time-to-deployment."
            : "Rediseño y actualización de código de una aplicación legacy, utilizando tecnología .NET con Razor pages y Microsoft SQL, para mejorar la velocidad y el rendimiento de la aplicación. Además, incorporando un pipeline CI/CD que ha reducido el tiempo de despliegue."
        }
      ],
      stack: [".NET Core", ".NET Framework", "Classic ASP", "API Rest", "WCF", "Entity Framework", "Microsoft SQL", "VeraCode", "Unit Test", "Moqs", "Azure DevOps", "Git", "Swagger", "Postman"]
    },
    {
      title: "Fullstack Developer",
      company: "MOBEATS",
      period: language === 'en' ? "Apr. 2021 - Jun. 2023" : "Abr. 2021 - Jun. 2023",
      duration: language === 'en' ? "2 years 3 months" : "2 años 3 meses",
      location: "Argentina",
      description: t('exp.mobeats.description'),
      technologies: ["C# .NET Core", "Angular", "SQL Server", "Docker", "AWS", "WebSockets", "GitLab"],
      tasks: language === 'en'
        ? [
            "Development and implementation of functionalities in both BackEnd and FrontEnd",
            "Analysis and estimation of tasks",
            "Creation and management of database tables",
            "Management of repositories in GitLab/Bitbucket"
          ]
        : [
            "Desarrollo e implementación de funcionalidades tanto en BackEnd como en FrontEnd",
            "Análisis y estimación de tareas",
            "Creación y gestión de tablas de base de datos",
            "Gestión de repositorios en GitLab/Bitbucket"
          ],
      projects: [
        {
          name: "Panther E-commerce",
          description: language === 'en'
            ? "Creation of e-commerce and web app for its management (back office)"
            : "Creación de e-commerce y aplicación web para su gestión (back office)"
        },
        {
          name: "C-Control VideoWalls",
          description: language === 'en'
            ? "Content visualization, control and operation monitoring coming from IP cameras, HDMI inputs, live TV, dashboards, web pages, all this over VideoWalls"
            : "Visualización de contenido, control y monitoreo de operaciones provenientes de cámaras IP, entradas HDMI, TV en vivo, dashboards, páginas web, todo esto sobre VideoWalls"
        },
        {
          name: "MegaTrans GPS",
          description: language === 'en'
            ? "Real time monitoring the location of vehicles and assets, using an integrated GPS system"
            : "Monitoreo en tiempo real de la ubicación de vehículos y activos, utilizando un sistema GPS integrado"
        },
        {
          name: "MOP Intranet",
          description: language === 'en'
            ? "Intranet creation for the Ministry of Public Works of Argentina"
            : "Creación de Intranet para el Ministerio de Obras Públicas de Argentina"
        }
      ],
      stack: ["C# .NET Core", "Angular", "Microsoft SQL", "Docker", "WebSockets", "Win32API", "GitLab", "Bitbucket"]
    },
    {
      title: ".NET Developer",
      company: "Cognizant",
      period: language === 'en' ? "Mar. 2018 - Apr. 2021" : "Mar. 2018 - Abr. 2021",
      duration: language === 'en' ? "3 years 2 months" : "3 años 2 meses",
      location: "Buenos Aires, Argentina",
      description: t('exp.cognizant.description'),
      technologies: ["C# .NET Framework", "Microsoft SQL"],
      tasks: language === 'en'
        ? [
            "Development and implementation of functionalities in Back End",
            "Analysis and estimation of tasks"
          ]
        : [
            "Desarrollo e implementación de funcionalidades en Back End",
            "Análisis y estimación de tareas"
          ],
      projects: [
        {
          name: "Metlife",
          description: language === 'en'
            ? "Analysis and development of an insurance file process app for a multinational company. Maintenance, creation and improvements to web application in charge of policy reception."
            : "Análisis y desarrollo de una aplicación de proceso de archivos de seguros para una empresa multinacional. Mantenimiento, creación y mejoras a la aplicación web encargada de la recepción de pólizas."
        }
      ],
      stack: ["C# .NET Framework", "Microsoft SQL"]
    },
    {
      title: "Application Developer",
      company: "PDVSA",
      period: language === 'en' ? "Mar. 2017 - Jan. 2018" : "Mar. 2017 - Ene. 2018",
      duration: language === 'en' ? "11 months" : "11 meses",
      location: "Maturín, Venezuela",
      description: t('exp.pdvsa.dev.description'),
      technologies: [".NET", "SQL Server", "PHP", "MySQL"],
      tasks: language === 'en'
        ? ["Development of a transport maintenance platform with PHP environment and MySQL"]
        : ["Desarrollo de una plataforma de mantenimiento de transporte con entorno PHP y MySQL"]
    },
    {
      title: t('exp.pdvsa.engineer.title'),
      company: "PDVSA",
      period: language === 'en' ? "Jan. 2013 - Mar. 2017" : "Ene. 2013 - Mar. 2017",
      duration: language === 'en' ? "4 years 3 months" : "4 años 3 meses",
      location: "Maturín, Monagas, Venezuela",
      description: t('exp.pdvsa.engineer.description'),
      technologies: [],
      tasks: language === 'en'
        ? ["Develop, implement and provide centralized planning and scheduling on many Petroleum projects"]
        : ["Desarrollar, implementar y proporcionar planificación centralizada y programación en múltiples proyectos petroleros"]
    },
    {
      title: t('exp.najort.title'),
      company: "Najort Computer Services",
      period: language === 'en' ? "Aug. 2012 - Dec. 2012" : "Ago. 2012 - Dic. 2012",
      duration: language === 'en' ? "5 months" : "5 meses",
      location: "Venezuela",
      description: t('exp.najort.description'),
      technologies: [".NET", "Microsoft SQL"],
      tasks: language === 'en'
        ? ["Analysis, development and architecture of systems with .NET environment + Microsoft SQL"]
        : ["Análisis, desarrollo y arquitectura de sistemas con entorno .NET + Microsoft SQL"]
    },
    {
      title: t('exp.esvenca.title'),
      company: "ESVENCA",
      period: language === 'en' ? "Oct. 2010 - Aug. 2012" : "Oct. 2010 - Ago. 2012",
      duration: language === 'en' ? "1 year 11 months" : "1 año 11 meses",
      location: "Venezuela",
      description: t('exp.esvenca.description'),
      technologies: [".NET", "SQL Server 2008"]
    },
    {
      title: t('exp.micasa.title'),
      company: "Mi Casa Eap",
      period: language === 'en' ? "Dec. 2007 - Oct. 2010" : "Dic. 2007 - Oct. 2010",
      duration: language === 'en' ? "2 years 11 months" : "2 años 11 meses",
      location: "Venezuela",
      description: t('exp.micasa.description'),
      technologies: []
    },
  ];

  const hasDetails = (exp: ExperienceItem) => {
    return (exp.tasks && exp.tasks.length > 0) || (exp.projects && exp.projects.length > 0);
  };

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
                
                <Card 
                  className={`glass overflow-hidden ${hasDetails(exp) ? 'cursor-pointer hover-lift group' : ''}`}
                  onClick={() => hasDetails(exp) && setSelectedExp(exp)}
                >
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
                      <div className="flex items-center gap-4">
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
                        {hasDetails(exp) && (
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        )}
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
                    {hasDetails(exp) && (
                      <p className="text-xs text-primary mt-4 flex items-center gap-1">
                        {t('experience.clickDetails')}
                        <ChevronRight className="w-3 h-3" />
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedExp} onOpenChange={() => setSelectedExp(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedExp && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedExp.title}</DialogTitle>
                <DialogDescription className="text-lg font-semibold text-primary">
                  {selectedExp.company} · {selectedExp.period}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                {/* Projects */}
                {selectedExp.projects && selectedExp.projects.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      📂 {t('experience.projects')}
                    </h4>
                    <div className="space-y-3">
                      {selectedExp.projects.map((project, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-muted/50 border border-border">
                          <h5 className="font-semibold text-primary mb-1">{project.name}</h5>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tasks */}
                {selectedExp.tasks && selectedExp.tasks.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      ✅ {t('experience.tasks')}
                    </h4>
                    <ul className="space-y-2">
                      {selectedExp.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Full Stack */}
                {selectedExp.stack && selectedExp.stack.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      🛠️ {t('experience.stack')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Experience;
