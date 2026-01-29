import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': '.NET Full Stack Software Engineer',
    'hero.location': 'Buenos Aires, Argentina',
    'hero.description': 'With over 10 years of experience in application development, I have dedicated my career to being a creative problem solver. My passion lies in driving innovation and optimizing operational processes. I have consistently demonstrated my ability to identify improvement opportunities, simplify workflows, and contribute valuable ideas to tackle complex challenges.',
    'hero.cta': 'Get in Touch',
    'hero.download': 'Download CV',
    
    // Skills
    'skills.title': 'Technologies & Skills',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.databases': 'Databases',
    'skills.devops': 'DevOps & Tools',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.present': 'Present',
    'experience.remote': 'Remote',
    'experience.clickDetails': 'Click for more details',
    'experience.projects': 'Projects',
    'experience.tasks': 'Tasks',
    'experience.stack': 'Technology Stack',
    
    // Kenility
    'exp.kenility.description': 'Health Equity - COBRA Product. Development and maintenance of enterprise applications with focus on healthcare benefits administration.',
    
    // MOBEATS
    'exp.mobeats.description': 'Full-stack development across multiple high-impact projects including e-commerce platforms, video wall control systems, GPS tracking solutions, and government intranet systems.',
    
    // Cognizant
    'exp.cognizant.description': 'Metlife: Maintenance, creation, and improvements to the web application responsible for insurance policy reception.',
    
    // PDVSA App Developer
    'exp.pdvsa.dev.description': 'Development of internal applications for the state oil company.',
    
    // PDVSA Engineer
    'exp.pdvsa.engineer.title': 'Project Tracking & Control Engineer',
    'exp.pdvsa.engineer.description': 'Project tracking, control, and management for oil operations.',
    
    // Najort
    'exp.najort.title': 'Consultant/Developer',
    'exp.najort.description': 'Software consulting and development services.',
    
    // ESVENCA
    'exp.esvenca.title': 'Systems Developer',
    'exp.esvenca.description': '.NET and SQL Server 2008 platform development focused on well drilling operations and administrative management.',
    
    // Mi Casa Eap
    'exp.micasa.title': 'Web Developer',
    'exp.micasa.description': 'Development of web applications focused on the financial sector.',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.cobra.title': 'Health Equity - COBRA',
    'projects.cobra.description': 'Enterprise healthcare benefits administration platform. Building APIs, microservices, and frontend features for benefits enrollment and management.',
    
    'projects.panther.title': 'Panther E-commerce',
    'projects.panther.description': 'Complete e-commerce platform with backoffice management system. Full-stack development with frontend and backend implementation.',
    
    'projects.ccontrol.title': 'C-Control VideoWalls',
    'projects.ccontrol.description': 'Content visualization, control, and monitoring system for IP cameras, HDMI inputs, live TV, dashboards on VideoWalls using WebSockets.',
    
    'projects.megatrans.title': 'MegaTrans GPS',
    'projects.megatrans.description': 'Real-time vehicle and asset location monitoring through an integrated GPS system with web and desktop applications.',
    
    'projects.mop.title': 'MOP Intranet',
    'projects.mop.description': 'Intranet development for the Ministry of Public Works of Argentina with complete web and desktop application support.',
    
    // Education
    'education.title': 'Education & Certifications',
    'education.academic': 'Academic Background',
    'education.certifications': 'Certifications',
    'education.degree1': 'Systems Engineer',
    'education.degree2': 'University Technician in Computer Science',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with passion and',
    
    // Common
    'common.viewProject': 'View Project',
    'common.viewCredential': 'View Credential',
  },
  es: {
    // Navigation
    'nav.skills': 'Aptitudes',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.education': 'Educación',
    'nav.contact': 'Contactar',
    
    // Hero
    'hero.title': 'Ingeniero de Software Full Stack .NET',
    'hero.location': 'Buenos Aires, Argentina',
    'hero.description': 'Con más de 10 años de experiencia en el desarrollo de aplicaciones, he dedicado mi carrera a ser un creativo solucionador de problemas. Mi pasión radica en impulsar la innovación y optimizar los procesos operativos. He demostrado consistentemente mi capacidad para identificar oportunidades de mejora, simplificar flujos de trabajo y aportar ideas valiosas para enfrentar desafíos complejos.',
    'hero.cta': 'Contactar',
    'hero.download': 'Descargar CV',
    
    // Skills
    'skills.title': 'Tecnologías y Aptitudes',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.databases': 'Bases de Datos',
    'skills.devops': 'DevOps y Herramientas',
    
    // Experience
    'experience.title': 'Experiencia Profesional',
    'experience.present': 'Actualidad',
    'experience.remote': 'Remoto',
    'experience.clickDetails': 'Clic para más detalles',
    'experience.projects': 'Proyectos',
    'experience.tasks': 'Tareas',
    'experience.stack': 'Stack Tecnológico',
    
    // Kenility
    'exp.kenility.description': 'Health Equity - Producto COBRA. Desarrollo y mantenimiento de aplicaciones empresariales enfocadas en la administración de beneficios de salud.',
    
    // MOBEATS
    'exp.mobeats.description': 'Desarrollo full-stack en múltiples proyectos de alto impacto incluyendo plataformas de e-commerce, sistemas de control de video walls, soluciones de rastreo GPS y sistemas de intranet gubernamental.',
    
    // Cognizant
    'exp.cognizant.description': 'Metlife: Mantenimiento, creación y mejoras a la aplicación web responsable de la recepción de pólizas de seguros.',
    
    // PDVSA App Developer
    'exp.pdvsa.dev.description': 'Desarrollo de aplicaciones internas para la empresa petrolera estatal.',
    
    // PDVSA Engineer
    'exp.pdvsa.engineer.title': 'Ingeniero de Seguimiento y Control de Proyectos',
    'exp.pdvsa.engineer.description': 'Seguimiento, control y gestión de proyectos para operaciones petroleras.',
    
    // Najort
    'exp.najort.title': 'Consultor/Desarrollador',
    'exp.najort.description': 'Servicios de consultoría y desarrollo de software.',
    
    // ESVENCA
    'exp.esvenca.title': 'Desarrollador de Sistemas',
    'exp.esvenca.description': 'Desarrollo en plataforma .NET y SQL Server 2008 orientado al área de operaciones de perforación de pozos y su manejo administrativo.',
    
    // Mi Casa Eap
    'exp.micasa.title': 'Desarrollador Web',
    'exp.micasa.description': 'Desarrollo de aplicaciones web basadas en el área financiera.',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.cobra.title': 'Health Equity - COBRA',
    'projects.cobra.description': 'Plataforma empresarial de administración de beneficios de salud. Construcción de APIs, microservicios y funcionalidades frontend para inscripción y gestión de beneficios.',
    
    'projects.panther.title': 'Panther E-commerce',
    'projects.panther.description': 'Plataforma de e-commerce completa con sistema de gestión backoffice. Desarrollo full-stack con implementación frontend y backend.',
    
    'projects.ccontrol.title': 'C-Control VideoWalls',
    'projects.ccontrol.description': 'Sistema de visualización, control y monitoreo de contenido para cámaras IP, entradas HDMI, TV en vivo, dashboards en VideoWalls usando WebSockets.',
    
    'projects.megatrans.title': 'MegaTrans GPS',
    'projects.megatrans.description': 'Monitoreo en tiempo real de ubicación de vehículos y activos a través de un sistema GPS integrado con aplicaciones web y de escritorio.',
    
    'projects.mop.title': 'MOP Intranet',
    'projects.mop.description': 'Desarrollo de Intranet para el Ministerio de Obras Públicas de Argentina con soporte completo de aplicaciones web y de escritorio.',
    
    // Education
    'education.title': 'Educación y Certificaciones',
    'education.academic': 'Formación Académica',
    'education.certifications': 'Certificaciones',
    'education.degree1': 'Ingeniero de Sistemas',
    'education.degree2': 'Técnico Superior Universitario en Informática',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Construido con pasión y',
    
    // Common
    'common.viewProject': 'Ver Proyecto',
    'common.viewCredential': 'Ver Credencial',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
