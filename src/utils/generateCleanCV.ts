import jsPDF from 'jspdf';

interface CVData {
  language: 'en' | 'es';
}

export const generateCleanCV = ({ language }: CVData) => {
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

  // Clean color palette - Black, White, Deep Slate accent
  const black: [number, number, number] = [17, 24, 39]; // #111827
  const slate: [number, number, number] = [51, 65, 85]; // #334155 - Deep Slate accent
  const muted: [number, number, number] = [107, 114, 128]; // #6B7280
  const divider: [number, number, number] = [229, 231, 235]; // #E5E7EB

  const texts = {
    en: {
      summary: 'Summary',
      experience: 'Experience',
      skills: 'Technical Skills',
      education: 'Education',
      present: 'Present',
      languages: 'Languages & Frameworks',
      tools: 'Tools & DevOps',
      soft: 'Soft Skills',
    },
    es: {
      summary: 'Resumen',
      experience: 'Experiencia',
      skills: 'Aptitudes Técnicas',
      education: 'Educación',
      present: 'Actualidad',
      languages: 'Lenguajes & Frameworks',
      tools: 'Herramientas & DevOps',
      soft: 'Habilidades Blandas',
    },
  };

  const t = texts[language];

  // Helper: Draw divider line
  const drawDivider = () => {
    doc.setDrawColor(...divider);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;
  };

  // Helper: Section title
  const addSectionTitle = (title: string) => {
    if (y > pageHeight - 30) {
      doc.addPage();
      y = margin;
    }
    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...slate);
    doc.text(title.toUpperCase(), margin, y);
    y += 6;
    drawDivider();
  };

  // Helper: Experience entry
  const addExperience = (
    role: string,
    company: string,
    period: string,
    bullets: string[]
  ) => {
    if (y > pageHeight - 45) {
      doc.addPage();
      y = margin;
    }

    // Role (bold)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...black);
    doc.text(role, margin, y);

    // Period (right aligned, muted)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...muted);
    doc.text(period, pageWidth - margin, y, { align: 'right' });

    y += 5;

    // Company
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...slate);
    doc.text(company, margin, y);
    y += 6;

    // Bullet points
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...black);
    bullets.forEach((bullet) => {
      const bulletText = `• ${bullet}`;
      const lines = doc.splitTextToSize(bulletText, contentWidth - 4);
      doc.text(lines, margin + 2, y);
      y += lines.length * 4;
    });

    y += 4;
  };

  // ============ HEADER ============
  // Name - Large, bold, centered
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(...black);
  doc.text('DANIEL MENDOZA', pageWidth / 2, y + 8, { align: 'center' });
  y += 14;

  // Title
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(...slate);
  doc.text('Senior .NET Full Stack Software Engineer', pageWidth / 2, y, { align: 'center' });
  y += 8;

  // Contact line
  doc.setFontSize(9);
  doc.setTextColor(...muted);
  const contactLine = 'daniel.mendozac@gmail.com  •  linkedin.com/in/daniel-mendoza-c  •  github.com/bytings';
  doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
  y += 10;

  drawDivider();

  // ============ SUMMARY ============
  addSectionTitle(t.summary);

  const summaryText = language === 'en'
    ? 'Full Stack Software Engineer with over 10 years of experience, specializing in developing robust applications with .NET and Angular. Proven ability to optimize application performance and modernize legacy systems. Expert in Azure DevOps (ALM), CI/CD pipeline optimization, and AI-assisted development. A proactive team collaborator committed to delivering high-quality solutions for healthcare, e-commerce, and enterprise sectors.'
    : 'Ingeniero de Software Full Stack con más de 10 años de experiencia, especializado en el desarrollo de aplicaciones robustas con .NET y Angular. Capacidad comprobada para optimizar rendimiento de aplicaciones y modernizar sistemas legacy. Experto en Azure DevOps (ALM), optimización de pipelines CI/CD y desarrollo asistido por IA. Colaborador proactivo comprometido con entregar soluciones de alta calidad para sectores de salud, e-commerce y empresarial.';

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...black);
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4 + 6;

  // ============ EXPERIENCE ============
  addSectionTitle(t.experience);

  const experiences = language === 'en' ? [
    {
      role: '.NET Engineer',
      company: 'Kenility (Health Equity - COBRA Product)',
      period: `Dec 2022 - ${t.present}`,
      bullets: [
        'Redesigned and updated legacy healthcare application using .NET Core with Razor Pages and Microsoft SQL, significantly improving speed and performance.',
        'Incorporated CI/CD pipeline in Azure DevOps (ALM) that significantly reduced deployment time through automated testing and VeraCode integration.',
        'Used AI-based tools to streamline development cycles, optimize code generation, and efficiently troubleshoot complex issues.',
        'Reviewed and approved pull requests in Azure to ensure code quality.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'MOBEATS',
      period: 'Apr 2021 - Jun 2023',
      bullets: [
        'Led the analysis, architecture, and development of systems in a .NET and Angular environment, handling full-stack development and requirements analysis.',
        'Designed e-commerce platform handling high-volume transactions using .NET Core, Angular, and Docker on AWS.',
        'Developed real-time video wall control system (C-Control) with WebSockets and Win32API for multi-display monitoring.',
        'Built GPS tracking solution (MegaTrans) with real-time location updates and SQL Server performance tuning.',
      ],
    },
    {
      role: '.NET Developer',
      company: 'Cognizant (MetLife)',
      period: 'Mar 2018 - Apr 2021',
      bullets: [
        'Developed insurance file processing application for a multinational company using .NET C# and Microsoft SQL.',
        'Performed maintenance and improvements on the web application in charge of policy reception.',
        'Designed data validation workflows reducing manual review time through process optimization.',
      ],
    },
  ] : [
    {
      role: 'Ingeniero .NET',
      company: 'Kenility (Health Equity - Producto COBRA)',
      period: `Dic 2022 - ${t.present}`,
      bullets: [
        'Rediseñé y actualicé aplicación legacy de salud usando .NET Core con Razor Pages y Microsoft SQL, mejorando ampliamente la velocidad y rendimiento.',
        'Incorporé pipeline CI/CD en Azure DevOps (ALM) reduciendo significativamente el tiempo de despliegue mediante testing automatizado e integración con VeraCode.',
        'Utilicé herramientas basadas en IA para agilizar ciclos de desarrollo, optimizar generación de código y resolver problemas complejos eficientemente.',
        'Revisé y aprobé pull requests en Azure para asegurar la calidad del código.',
      ],
    },
    {
      role: 'Desarrollador Full Stack',
      company: 'MOBEATS',
      period: 'Abr 2021 - Jun 2023',
      bullets: [
        'Lideré el análisis, arquitectura y desarrollo de sistemas en entorno .NET y Angular, manejando desarrollo full-stack y análisis de requerimientos.',
        'Diseñé plataforma e-commerce manejando gran cantidad de transacciones usando .NET Core, Angular y Docker en AWS.',
        'Desarrollé sistema de control de video walls en tiempo real (C-Control) con WebSockets y Win32API para monitoreo multi-pantalla.',
        'Construí solución de rastreo GPS (MegaTrans) con actualizaciones de ubicación en tiempo real y tuning de SQL Server.',
      ],
    },
    {
      role: 'Desarrollador .NET',
      company: 'Cognizant (MetLife)',
      period: 'Mar 2018 - Abr 2021',
      bullets: [
        'Desarrollé aplicación de procesamiento de archivos de seguros para empresa multinacional usando .NET C# y Microsoft SQL.',
        'Realicé mantenimiento y mejoras en la aplicación web encargada de la recepción de pólizas.',
        'Diseñé flujos de validación de datos reduciendo tiempo de revisión manual mediante optimización de procesos.',
      ],
    },
  ];

  experiences.forEach((exp) => {
    addExperience(exp.role, exp.company, exp.period, exp.bullets);
  });

  // ============ TECHNICAL SKILLS ============
  addSectionTitle(t.skills);

  const skillCategories = [
    {
      label: t.languages,
      skills: 'C#, .NET Core, .NET Framework, ASP.NET, Entity Framework, Angular, TypeScript, JavaScript, SQL',
    },
    {
      label: t.tools,
      skills: 'Azure DevOps (ALM), Docker, AWS, Git, CI/CD, VeraCode, Swagger, Postman, Microservices, AI-Assisted Dev',
    },
    {
      label: t.soft,
      skills: language === 'en' 
        ? 'Technical Leadership, Problem Solving, Cross-functional Collaboration, Agile/Scrum, Mentoring'
        : 'Liderazgo Técnico, Resolución de Problemas, Colaboración Multifuncional, Agile/Scrum, Mentoría',
    },
  ];

  skillCategories.forEach((cat) => {
    if (y > pageHeight - 20) {
      doc.addPage();
      y = margin;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...slate);
    doc.text(cat.label + ':', margin, y);
    y += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(...black);
    const skillLines = doc.splitTextToSize(cat.skills, contentWidth);
    doc.text(skillLines, margin, y);
    y += skillLines.length * 4 + 3;
  });

  y += 2;

  // ============ EDUCATION ============
  addSectionTitle(t.education);

  const education = language === 'en'
    ? [
        { degree: 'Systems Engineer', school: 'Instituto Universitario Politécnico Santiago Mariño', year: '2008 - 2011' },
        { degree: 'University Technician in Computer Science', school: 'IUTIRLA', year: '2000 - 2002' },
      ]
    : [
        { degree: 'Ingeniero de Sistemas', school: 'Instituto Universitario Politécnico Santiago Mariño', year: '2008 - 2011' },
        { degree: 'Técnico Superior Universitario en Informática', school: 'IUTIRLA', year: '2000 - 2002' },
      ];

  education.forEach((edu) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...black);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...muted);
    doc.text(edu.year, pageWidth - margin, y, { align: 'right' });

    y += 4;

    doc.setTextColor(...slate);
    doc.text(edu.school, margin, y);
    y += 6;
  });

  // Save
  doc.save(`Daniel_Mendoza_CV_Clean_${language.toUpperCase()}.pdf`);
};
