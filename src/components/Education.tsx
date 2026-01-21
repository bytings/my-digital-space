import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Ingeniero de Sistemas",
    institution: "Instituto Universitario Politécnico Santiago Mariño",
    period: "2008 - 2011",
  },
  {
    degree: "Técnico Superior Universitario en Informática",
    institution: "IUTIRLA",
    period: "2000 - 2002",
  },
];

const certifications = [
  "Especialista en desarrollo C# - LinkedIn",
  "C# Avanzado 1 - LinkedIn",
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Educación & Certificaciones
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Formación Académica
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Certificaciones
            </h3>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
