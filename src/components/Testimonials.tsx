import { Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'James Carter',
    role: 'VP of Engineering',
    company: 'HealthTech Solutions',
    quote: "Daniel is one of those rare engineers who understands both the code and the business. His architectural decisions in .NET reduced our processing time by 40%.",
    initials: 'JC',
  },
  {
    id: 2,
    name: 'Sofia Rodriguez',
    role: 'Product Owner',
    company: 'Fintech Global',
    quote: "Impeccable attention to detail. Daniel managed the entire ALM lifecycle for our core product, ensuring zero-downtime releases for months.",
    initials: 'SR',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="group relative">
      {/* Glow effect behind card - visible on hover */}
      <div
        className="
          absolute -inset-1 rounded-3xl opacity-0 
          group-hover:opacity-100 transition-opacity duration-500
          bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30
          blur-xl
          dark:from-primary/40 dark:via-accent/40 dark:to-primary/40
        "
      />
      
      {/* Card */}
      <div
        className="
          relative z-10 p-6 rounded-2xl
          transition-all duration-300 ease-out
          backdrop-blur-xl
          
          bg-white/80 
          border border-white/50
          shadow-[0_8px_32px_rgba(0,0,0,0.08)]
          hover:border-primary/40
          hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)]
          hover:bg-white/90
          
          dark:bg-white/[0.08]
          dark:border-white/[0.15]
          dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
          dark:hover:border-primary/60
          dark:hover:shadow-[0_0_40px_rgba(99,102,241,0.4),0_0_80px_rgba(99,102,241,0.2)]
          dark:hover:bg-white/[0.12]
        "
      >
        {/* Inner glass reflection - light mode */}
        <div 
          className="
            absolute inset-0 rounded-2xl overflow-hidden pointer-events-none
            bg-gradient-to-br from-white/60 via-transparent to-transparent
            dark:from-white/10 dark:via-transparent
          "
        />
        
        {/* LinkedIn Icon */}
        <div className="absolute top-4 right-4 z-20">
          <div
            className="
              p-2 rounded-full
              bg-primary/10 dark:bg-white/10
              text-primary dark:text-white/70
              transition-all duration-300
              group-hover:bg-primary/20 group-hover:text-primary
              dark:group-hover:bg-primary/30 dark:group-hover:text-primary
              group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]
            "
          >
            <Linkedin size={16} />
          </div>
        </div>

        {/* Quote */}
        <blockquote className="mb-6 pr-8 relative z-10">
          <p
            className="
              text-foreground dark:text-white/90
              text-base leading-relaxed
              italic
            "
          >
            "{testimonial.quote}"
          </p>
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4 relative z-10">
          {/* Avatar with glow */}
          <div className="relative">
            <div
              className="
                absolute inset-0 rounded-full blur-md opacity-60
                bg-gradient-to-br from-primary to-accent
                group-hover:opacity-80 transition-opacity duration-300
              "
            />
            <div
              className="
                relative w-12 h-12 rounded-full
                flex items-center justify-center
                font-semibold text-sm
                bg-gradient-to-br from-primary to-accent
                text-primary-foreground
                shadow-lg
              "
            >
              {testimonial.initials}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="font-semibold text-foreground dark:text-white">
              {testimonial.name}
            </p>
            <p className="text-sm text-muted-foreground dark:text-white/60">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { language } = useLanguage();

  const sectionTitle = language === 'en' 
    ? 'Trusted by Industry Leaders' 
    : 'Confianza de Líderes de la Industria';

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Floating Gradient Orbs - Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Light mode orbs - Soft Lavender/Blue */}
        <div
          className="
            absolute top-0 left-1/4 -translate-x-1/2
            w-[500px] h-[500px] 
            rounded-full 
            bg-gradient-to-br from-violet-300/50 to-blue-300/50
            blur-[100px]
            dark:opacity-0
            transition-opacity duration-500
            animate-pulse
          "
          style={{ animationDuration: '4s' }}
        />
        <div
          className="
            absolute bottom-0 right-1/4 translate-x-1/2
            w-[400px] h-[400px] 
            rounded-full 
            bg-gradient-to-br from-blue-300/40 to-purple-300/40
            blur-[80px]
            dark:opacity-0
            transition-opacity duration-500
            animate-pulse
          "
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />

        {/* Dark mode orbs - Cyan/Blue Neon */}
        <div
          className="
            absolute top-0 left-1/4 -translate-x-1/2
            w-[500px] h-[500px] 
            rounded-full 
            bg-gradient-to-br from-cyan-500/30 to-blue-600/30
            blur-[100px]
            opacity-0 dark:opacity-100
            transition-opacity duration-500
            animate-pulse
          "
          style={{ animationDuration: '4s' }}
        />
        <div
          className="
            absolute bottom-0 right-1/4 translate-x-1/2
            w-[400px] h-[400px] 
            rounded-full 
            bg-gradient-to-br from-blue-500/25 to-indigo-600/25
            blur-[80px]
            opacity-0 dark:opacity-100
            transition-opacity duration-500
            animate-pulse
          "
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />
        
        {/* Additional accent orb for more depth */}
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[600px] h-[300px] 
            rounded-full 
            bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20
            blur-[120px]
            opacity-50 dark:opacity-30
            transition-opacity duration-500
          "
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="
              text-3xl md:text-4xl font-bold
              text-foreground dark:text-white
              mb-4
            "
          >
            {sectionTitle}
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
