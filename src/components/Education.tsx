import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t, language } = useLanguage();

  const education = [
    {
      degree: t('education.degree1'),
      institution: "Instituto Universitario Politécnico Santiago Mariño",
      period: "2008 - 2011",
    },
    {
      degree: t('education.degree2'),
      institution: "IUTIRLA",
      period: "2000 - 2002",
    },
  ];

  const certifications = [
    { 
      name: language === 'en' ? "C# Development Specialist" : "Especialista en desarrollo C#", 
      issuer: "LinkedIn", 
      date: language === 'en' ? "Nov. 2022" : "Nov. 2022",
      link: "https://www.linkedin.com/learning/certificates/787b1864d2631cde32e9f70ab7d14df690105bcaab6ef563d6557da882d68c14" 
    },
    { 
      name: language === 'en' ? "C# Advanced 1" : "C# Avanzado 1", 
      issuer: "LinkedIn", 
      date: language === 'en' ? "Oct. 2022" : "Oct. 2022",
      link: "https://www.linkedin.com/learning/certificates/8e1405decda0c5213047eb7a6c4502dd41b8e5d26776c6cb4d3e5a448613c08e" 
    },
    { 
      name: language === 'en' ? "C# Advanced 2" : "C# Avanzado 2", 
      issuer: "LinkedIn", 
      date: language === 'en' ? "Oct. 2022" : "Oct. 2022",
      link: "https://www.linkedin.com/learning/certificates/4dc35fe30eab76a6cb412d9362f2a2415a2fd0d692a0baf9681fde7a0fea1d80" 
    },
    { 
      name: "C#: LINQ", 
      issuer: "LinkedIn", 
      date: language === 'en' ? "Oct. 2022" : "Oct. 2022",
      link: "https://www.linkedin.com/learning/certificates/262dbf6d2b4385a8ff5da99893408a57401c068a0da2bd7460cde30da9c784b3" 
    },
    { 
      name: language === 'en' ? "Software Architecture Specialist" : "Especialista en Arquitectura de Software", 
      issuer: "LinkedIn", 
      date: language === 'en' ? "Oct. 2022" : "Oct. 2022",
      link: "https://www.linkedin.com/learning/certificates/a0460a30a945cc5e3f216c75cd964d693e360fd52abdab681987d8df43126920" 
    },
    { 
      name: language === 'en' ? "GIT Certified" : "Certificado en GIT", 
      issuer: "Next U", 
      date: language === 'en' ? "Oct. 2021" : "Oct. 2021",
      link: "https://www.credential.net/8f0df0a2-035e-4704-8fd1-72683e02f583" 
    },
    { 
      name: language === 'en' ? "Advanced Angular" : "Angular Avanzado", 
      issuer: "LinkedIn", 
      date: language === 'en' ? "Apr. 2021" : "Abr. 2021",
      link: "https://www.linkedin.com/learning/certificates/d113bc96faa27decb1b3276ae45f16da854097a9efdb6e61ea1854aa59756900" 
    },
    { 
      name: language === 'en' ? "Advanced .NET Core" : ".NET Core Avanzado", 
      issuer: "LinkedIn", 
      date: language === 'en' ? "Feb. 2021" : "Feb. 2021",
      link: "https://www.linkedin.com/learning/certificates/66afb5f20c7b1869635a0a7e6d385e4c04db253cad58b6c2ea1cdeb44fa040e1" 
    },
    { 
      name: language === 'en' ? "Essential .NET Core" : ".NET Core Esencial", 
      issuer: "LinkedIn", 
      date: language === 'en' ? "Feb. 2021" : "Feb. 2021",
      link: "https://www.linkedin.com/learning/certificates/9e24f18a9d9b4b338084b53271fba114b2d3fd0a57fe65e09f90fadf09240fdf" 
    },
    { 
      name: "Entity Framework in Depth", 
      issuer: "Udemy", 
      date: language === 'en' ? "Jan. 2021" : "Ene. 2021",
      link: null 
    },
    { 
      name: "REST APIs in ASP.NET Core and C#", 
      issuer: "Udemy", 
      date: language === 'en' ? "Jan. 2021" : "Ene. 2021",
      link: null 
    },
    { 
      name: ".NET Core Clean Architecture", 
      issuer: "Udemy", 
      date: language === 'en' ? "Nov. 2020" : "Nov. 2020",
      link: null 
    },
  ];

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          {t('education.title')}
        </h2>
        <div className="w-24 h-1 bg-gradient-primary mx-auto mb-16 rounded-full" />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Academic Background */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              {t('education.academic')}
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="glass glass-hover">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-foreground">{edu.degree}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="glass-pill">{edu.period}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              {t('education.certifications')}
            </h3>
            <Card className="glass">
              <CardContent className="pt-6">
                <div className="grid gap-3 max-h-[400px] overflow-y-auto pr-2">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between gap-3 p-3 rounded-lg glass-pill transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-foreground">{cert.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {cert.issuer} · {cert.date}
                          </p>
                        </div>
                      </div>
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
