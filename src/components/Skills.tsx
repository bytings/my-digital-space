import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.backend'),
      icon: Code,
      skills: [".NET Core", ".NET Framework", "ASP.NET", "C#", "Entity Framework", "WCF", "REST API", "Classic ASP"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t('skills.frontend'),
      icon: Wrench,
      skills: ["Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: t('skills.databases'),
      icon: Database,
      skills: ["Microsoft SQL Server", "Entity Framework", "Database Design", "Query Optimization", "Performance Tuning"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: t('skills.devops'),
      icon: Cloud,
      skills: ["Azure DevOps", "Azure", "Git", "Docker", "AWS", "Cloud Architecture", "Microservices", "Swagger", "Postman", "VeraCode", "Unit Testing", "Moq"],
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t('skills.title')}
        </h2>
        <div className="w-24 h-1 bg-gradient-primary mx-auto mb-16 rounded-full" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isHighlighted = ["Cloud Architecture", "Microservices", "Query Optimization", "Azure"].includes(skill);
                    return (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className={`text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default ${
                          isHighlighted ? "bg-primary/20 text-primary font-bold border border-primary/30" : ""
                        }`}
                      >
                        {skill}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
