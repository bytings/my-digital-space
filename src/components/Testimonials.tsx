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
      {/* Card */}
      <div
        className="
          relative z-10 p-6 rounded-2xl
          transition-all duration-300 ease-out
          
          /* Light Mode - Clean Minimalist */
          bg-white/70 backdrop-blur-xl
          border border-gray-200
          shadow-xl
          hover:border-primary/50
          hover:shadow-2xl
          
          /* Dark Mode - Neon Glass */
          dark:bg-white/5 dark:backdrop-blur-xl
          dark:border-white/10
          dark:shadow-none
          dark:hover:border-primary/50
          dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]
        "
      >
        {/* LinkedIn Icon */}
        <div className="absolute top-4 right-4">
          <div
            className="
              p-2 rounded-full
              bg-muted/50 dark:bg-white/10
              text-muted-foreground dark:text-white/60
              transition-colors duration-300
              group-hover:bg-primary/10 group-hover:text-primary
              dark:group-hover:bg-primary/20 dark:group-hover:text-primary
            "
          >
            <Linkedin size={16} />
          </div>
        </div>

        {/* Quote */}
        <blockquote className="mb-6 pr-8">
          <p
            className="
              text-foreground dark:text-white
              text-base leading-relaxed
              italic
            "
          >
            "{testimonial.quote}"
          </p>
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div
            className="
              w-12 h-12 rounded-full
              flex items-center justify-center
              font-semibold text-sm
              bg-gradient-to-br from-primary to-accent
              text-primary-foreground
              shadow-lg
            "
          >
            {testimonial.initials}
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
      <div className="absolute inset-0 pointer-events-none">
        {/* Light mode orb - Soft Lavender */}
        <div
          className="
            absolute top-1/4 left-1/4 
            w-96 h-96 
            rounded-full 
            bg-gradient-to-br from-violet-200/40 to-blue-200/40
            blur-3xl
            dark:opacity-0
            transition-opacity duration-500
          "
        />
        <div
          className="
            absolute bottom-1/4 right-1/4 
            w-80 h-80 
            rounded-full 
            bg-gradient-to-br from-blue-200/30 to-purple-200/30
            blur-3xl
            dark:opacity-0
            transition-opacity duration-500
          "
        />

        {/* Dark mode orbs - Cyan/Blue Neon */}
        <div
          className="
            absolute top-1/4 left-1/4 
            w-96 h-96 
            rounded-full 
            bg-gradient-to-br from-cyan-500/20 to-blue-600/20
            blur-3xl
            opacity-0 dark:opacity-100
            transition-opacity duration-500
          "
        />
        <div
          className="
            absolute bottom-1/4 right-1/4 
            w-80 h-80 
            rounded-full 
            bg-gradient-to-br from-blue-500/15 to-indigo-600/15
            blur-3xl
            opacity-0 dark:opacity-100
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
