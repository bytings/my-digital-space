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
    name: "Miguel Angel Patiño Hernandez",
    role: ". Net Developer | C# | MVC | Web API | SQL | ASP .NET",
    company: "ESVENCA",
    quote:
      "I had the opportunity to work with Daniel for about two years and I can say a lot of things (all good), but I just want to say that I think it's more important, he's a software developer, and at work he always got earlier, doing his work he's the best, contributing ideas, he knows C#. .NET, SQL SERVER, responsible for his work and dedicated, I can also say he is very friendly and I am sure he will make the most of his education and experience in any company",
    initials: "MP",
  },
  {
    id: 2,
    name: "Santiago Faverio",
    role: "Desarrollador Full-stack | C#, Angular, SQL Server",
    company: "Mobeats",
    quote:
      "Me ha tocado trabajar con Dani en distintos proyectos y siempre se ha adaptado de forma rapida aportando de manera eficiente tanto ideas como soluciones para mejorar el software en cuestion. Es una persona responsable, y con ganas de trabajar, aprender y enseñar",
    initials: "SF",
  },
  {
    id: 3,
    name: "Nelson R. Ochoa B.",
    role: "CEO en LNC Producciones",
    company: "MI CASA EAP",
    quote:
      "Daniel es un excelente profesional, proactivo, autodidacta, con una asombrosa capacidad de aprendizaje y adaptación. Si tienes un reto, el lo cumplirá!",
    initials: "NO",
  },
  {
    id: 4,
    name: "Diego Salvatore",
    role: ".NET Software Engineer in Taller Technologies",
    company: "HealthEquity",
    quote:
      "Daniel is a professional with a lot of technical knowledge and high human quality, very committed to his work and his colleagues. Always available to collaborate and give his opinion in solving the problem.",
    initials: "DS",
  },
  {
    id: 5,
    name: "Marcos Rivero",
    role: "Profesor Desarrollo Front End y Desarrollo Back End",
    company: "HealthEquity",
    quote:
      "Daniel is an excellent teammate. He's always there if you need anything. You can trust him and his knowledge; he always gives his best when it comes to his work.",
    initials: "MR",
  },
  {
    id: 6,
    name: "Aretina Nolan",
    role: "Product Owner",
    company: "HealthEquity",
    quote:
      "Daniel came in to our company and quickly picked up on the project at hand, understanding our existing code base and converting our platform to new technology. His knowledge and expertise was top notch and we'll miss having him on our team. If you need a solid developer, he's it!",
    initials: "AN",
  },
  {
    id: 7,
    name: "Mahipal Kante",
    role: "Software Architect at HealthEquity",
    company: "HealthEquity",
    quote:
      "Daniel has been a great contributer to our tech upgrade project and demonstrated excellent development skills in ASP.NET core, .Net core microservices and SQL Server. He is a great team player and easy to work with. He can be an excellent asset to any team.",
    initials: "MK",
  },
];
