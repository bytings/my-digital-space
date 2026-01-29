import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ShoppingCart, Monitor, MapPin, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.cobra.title'),
      description: t('projects.cobra.description'),
      icon: Building,
      technologies: ["C# .NET Core", "Angular", "SQL Server", "Azure DevOps", "Docker", "Microservices"],
      color: "from-violet-500 to-purple-500",
    },
    {
      title: t('projects.panther.title'),
      description: t('projects.panther.description'),
      icon: ShoppingCart,
      technologies: ["C# .NET Core", "Angular", "SQL Server", "Docker", "AWS"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: t('projects.ccontrol.title'),
      description: t('projects.ccontrol.description'),
      icon: Monitor,
      technologies: ["C# .NET Core", "Win32API", "WebSockets", "Angular", "SQL Server"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t('projects.megatrans.title'),
      description: t('projects.megatrans.description'),
      icon: MapPin,
      technologies: ["C# .NET Core", "Angular", "SQL Server", "Docker", "Real-time GPS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: t('projects.mop.title'),
      description: t('projects.mop.description'),
      icon: Building,
      technologies: ["C# .NET Core", "Angular", "SQL Server", "Docker", "GitLab"],
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t('projects.title')}
        </h2>
        <div className="w-24 h-1 bg-gradient-primary mx-auto mb-16 rounded-full" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
