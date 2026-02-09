export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Diego Salvatore",
    role: ".NET Software Engineer in Taller Technologies",
    company: "HealthEquity",
    quote:
      "Daniel is a professional with a lot of technical knowledge and high human quality, very committed to his work and his colleagues. Always available to collaborate and give his opinion in solving the problem.",
    initials: "DS",
  },
  {
    id: 2,
    name: "Nelson R. Ochoa B.",
    role: "CEO en LNC Producciones",
    company: "MI CASA EAP",
    quote:
      "Daniel es un excelente profesional, proactivo, autodidacta, con una asombrosa capacidad de aprendizaje y adaptación. Si tienes un reto, el lo cumplirá!",
    initials: "NO",
  },
  {
    id: 3,
    name: "Santiago Faverio",
    role: "Desarrollador Full-stack | C#, Angular, SQL Server",
    company: "Mobeats",
    quote:
      "Me ha tocado trabajar con Dani en distintos proyectos y siempre se ha adaptado de forma rapida aportando de manera eficiente tanto ideas como soluciones para mejorar el software en cuestion. Es una persona responsable, y con ganas de trabajar, aprender y enseñar",
    initials: "SF",
  },
  {
    id: 4,
    name: "Miguel Angel Patiño Hernandez",
    role: ". Net Developer | C# | MVC | Web API | SQL | ASP .NET",
    company: "ESVENCA",
    quote:
      "I had the opportunity to work with Daniel for about two years and I can say a lot of things (all good), but I just want to say that I think it's more important, he's a software developer, and at work he always got earlier, doing his work he's the best, contributing ideas, he knows C#. .NET, SQL SERVER, responsible for his work and dedicated, I can also say he is very friendly and I am sure he will make the most of his education and experience in any company",
    initials: "MP",
  },
];
