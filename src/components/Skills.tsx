import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Code,
    skills: [".NET Core", ".NET Framework", "ASP.NET", "C#", "Entity Framework", "WCF", "API REST"],
  },
  {
    title: "Frontend",
    icon: Wrench,
    skills: ["Angular", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Microsoft SQL Server", "Entity Framework", "Database Design"],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    skills: ["Azure DevOps", "Git", "Docker", "AWS", "Swagger", "Postman", "VeraCode"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tecnologías & Aptitudes
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
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

export default Skills;
