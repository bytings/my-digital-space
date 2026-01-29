import jsPDF from 'jspdf';

interface CVData {
  language: 'en' | 'es';
}

export const generateCV = ({ language }: CVData) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Colors
  const primaryColor: [number, number, number] = [59, 91, 219]; // Blue
  const textColor: [number, number, number] = [30, 35, 50];
  const mutedColor: [number, number, number] = [100, 110, 130];
  const accentColor: [number, number, number] = [124, 77, 255]; // Purple

  const texts = {
    en: {
      title: '.NET Full Stack Software Engineer',
      location: 'Buenos Aires, Argentina',
      summary: 'With over 10 years of experience in application development, I have dedicated my career to being a creative problem solver. My passion lies in driving innovation and optimizing operational processes. I have consistently demonstrated my ability to identify improvement opportunities, simplify workflows, and contribute valuable ideas to tackle complex challenges.',
      experience: 'Professional Experience',
      education: 'Education',
      skills: 'Technical Skills',
      present: 'Present',
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Databases',
      devops: 'DevOps & Tools',
      degree1: 'Systems Engineer',
      degree2: 'University Technician in Computer Science',
    },
    es: {
      title: 'Ingeniero de Software Full Stack .NET',
      location: 'Buenos Aires, Argentina',
      summary: 'Con más de 10 años de experiencia en el desarrollo de aplicaciones, he dedicado mi carrera a ser un creativo solucionador de problemas. Mi pasión radica en impulsar la innovación y optimizar los procesos operativos. He demostrado consistentemente mi capacidad para identificar oportunidades de mejora, simplificar flujos de trabajo y aportar ideas valiosas para enfrentar desafíos complejos.',
      experience: 'Experiencia Profesional',
      education: 'Educación',
      skills: 'Aptitudes Técnicas',
      present: 'Actualidad',
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Bases de Datos',
      devops: 'DevOps y Herramientas',
      degree1: 'Ingeniero de Sistemas',
      degree2: 'Técnico Superior Universitario en Informática',
    },
  };

  const t = texts[language];

  // Helper functions
  const addSectionTitle = (title: string) => {
    if (y > pageHeight - 40) {
      doc.addPage();
      y = margin;
    }
    y += 8;
    doc.setFillColor(...primaryColor);
    doc.rect(margin, y - 1, 4, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.text(title.toUpperCase(), margin + 8, y + 5);
    y += 14;
  };

  const addExperience = (
    company: string,
    role: string,
    period: string,
    location: string,
    description: string,
    stack: string[]
  ) => {
    if (y > pageHeight - 50) {
      doc.addPage();
      y = margin;
    }

    // Company & Role
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...textColor);
    doc.text(role, margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(...accentColor);
    doc.text(company, margin, y + 5);
    
    // Period & Location (right aligned)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...mutedColor);
    doc.text(period, pageWidth - margin, y, { align: 'right' });
    doc.text(location, pageWidth - margin, y + 5, { align: 'right' });
    
    y += 12;

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...textColor);
    const descLines = doc.splitTextToSize(description, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 4 + 2;

    // Tech Stack
    if (stack.length > 0) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(...mutedColor);
      const stackText = stack.join(' • ');
      const stackLines = doc.splitTextToSize(stackText, contentWidth);
      doc.text(stackLines, margin, y);
      y += stackLines.length * 3.5 + 6;
    }

    y += 4;
  };

  // ============ HEADER ============
  // Gradient-style header bar
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, pageWidth, 45, 'F');
  
  // Accent stripe
  doc.setFillColor(...accentColor);
  doc.rect(0, 45, pageWidth, 3, 'F');

  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(28);
  doc.setTextColor(255, 255, 255);
  doc.text('Daniel Mendoza', margin, 22);

  // Title
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(220, 225, 255);
  doc.text(t.title, margin, 32);

  // Contact Info (right side)
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text('daniel.mendozac@gmail.com', pageWidth - margin, 18, { align: 'right' });
  doc.text('linkedin.com/in/daniel-mendoza-c', pageWidth - margin, 24, { align: 'right' });
  doc.text('github.com/bytings', pageWidth - margin, 30, { align: 'right' });
  doc.text(t.location, pageWidth - margin, 36, { align: 'right' });

  y = 58;

  // ============ SUMMARY ============
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  const summaryLines = doc.splitTextToSize(t.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.5 + 6;

  // ============ SKILLS ============
  addSectionTitle(t.skills);

  const skillCategories = [
    { label: t.backend, skills: 'C# .NET Core, .NET Framework, Web API, Entity Framework, MVC, SignalR' },
    { label: t.frontend, skills: 'Angular, React, TypeScript, JavaScript, HTML5, CSS3, Bootstrap' },
    { label: t.databases, skills: 'SQL Server, PostgreSQL, MongoDB, Redis' },
    { label: t.devops, skills: 'Docker, AWS, Azure DevOps, GitLab, Git, CI/CD, Jira' },
  ];

  skillCategories.forEach((cat) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...accentColor);
    doc.text(cat.label + ':', margin, y);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);
    const skillsWidth = contentWidth - 30;
    const skillLines = doc.splitTextToSize(cat.skills, skillsWidth);
    doc.text(skillLines, margin + 30, y);
    y += Math.max(skillLines.length * 4, 5) + 2;
  });

  y += 4;

  // ============ EXPERIENCE ============
  addSectionTitle(t.experience);

  const experiences = language === 'en' ? [
    {
      company: 'Kenility',
      role: 'Semi Senior Software Developer',
      period: `2023 - ${t.present}`,
      location: 'Remote',
      description: 'Health Equity - COBRA Product. Development and maintenance of enterprise healthcare benefits administration platform. Building APIs, microservices, and frontend features for benefits enrollment and management.',
      stack: ['C# .NET Core', 'Angular', 'SQL Server', 'Azure DevOps', 'Docker', 'Microservices'],
    },
    {
      company: 'MOBEATS',
      role: 'Software Developer',
      period: '2019 - 2023',
      location: 'Buenos Aires, Argentina',
      description: 'Full-stack development across multiple high-impact projects including e-commerce platforms, video wall control systems, GPS tracking solutions, and government intranet systems.',
      stack: ['C# .NET Core', 'Angular', 'SQL Server', 'Docker', 'AWS', 'WebSockets', 'Real-time GPS'],
    },
    {
      company: 'Cognizant',
      role: 'Software Developer',
      period: '2018 - 2019',
      location: 'Buenos Aires, Argentina',
      description: 'MetLife: Maintenance, creation, and improvements to the web application responsible for insurance policy reception and processing.',
      stack: ['C# .NET', 'Angular', 'SQL Server', 'TFS'],
    },
    {
      company: 'PDVSA',
      role: 'Application Developer',
      period: '2014 - 2017',
      location: 'Venezuela',
      description: 'Development of internal applications for the state oil company, including operational management systems and data analysis tools.',
      stack: ['C# .NET', 'SQL Server', 'WPF', 'Crystal Reports'],
    },
  ] : [
    {
      company: 'Kenility',
      role: 'Desarrollador de Software Semi Senior',
      period: `2023 - ${t.present}`,
      location: 'Remoto',
      description: 'Health Equity - Producto COBRA. Desarrollo y mantenimiento de plataforma empresarial de administración de beneficios de salud. Construcción de APIs, microservicios y funcionalidades frontend para inscripción y gestión de beneficios.',
      stack: ['C# .NET Core', 'Angular', 'SQL Server', 'Azure DevOps', 'Docker', 'Microservices'],
    },
    {
      company: 'MOBEATS',
      role: 'Desarrollador de Software',
      period: '2019 - 2023',
      location: 'Buenos Aires, Argentina',
      description: 'Desarrollo full-stack en múltiples proyectos de alto impacto incluyendo plataformas de e-commerce, sistemas de control de video walls, soluciones de rastreo GPS y sistemas de intranet gubernamental.',
      stack: ['C# .NET Core', 'Angular', 'SQL Server', 'Docker', 'AWS', 'WebSockets', 'Real-time GPS'],
    },
    {
      company: 'Cognizant',
      role: 'Desarrollador de Software',
      period: '2018 - 2019',
      location: 'Buenos Aires, Argentina',
      description: 'MetLife: Mantenimiento, creación y mejoras a la aplicación web responsable de la recepción y procesamiento de pólizas de seguros.',
      stack: ['C# .NET', 'Angular', 'SQL Server', 'TFS'],
    },
    {
      company: 'PDVSA',
      role: 'Desarrollador de Aplicaciones',
      period: '2014 - 2017',
      location: 'Venezuela',
      description: 'Desarrollo de aplicaciones internas para la empresa petrolera estatal, incluyendo sistemas de gestión operativa y herramientas de análisis de datos.',
      stack: ['C# .NET', 'SQL Server', 'WPF', 'Crystal Reports'],
    },
  ];

  experiences.forEach((exp) => {
    addExperience(exp.company, exp.role, exp.period, exp.location, exp.description, exp.stack);
  });

  // ============ EDUCATION ============
  addSectionTitle(t.education);

  // Degree 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  doc.text(t.degree1, margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...accentColor);
  doc.text('Universidad Nacional Experimental de la Fuerza Armada', margin, y + 5);
  
  doc.setTextColor(...mutedColor);
  doc.text('2011 - 2014', pageWidth - margin, y, { align: 'right' });
  
  y += 14;

  // Degree 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...textColor);
  doc.text(t.degree2, margin, y);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...accentColor);
  doc.text('Instituto Universitario de Tecnología del Estado Portuguesa', margin, y + 5);
  
  doc.setTextColor(...mutedColor);
  doc.text('2006 - 2009', pageWidth - margin, y, { align: 'right' });

  // Save
  doc.save(`Daniel_Mendoza_CV_${language.toUpperCase()}.pdf`);
};
