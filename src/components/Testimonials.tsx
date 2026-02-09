import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { testimonials } from "@/components/testimonials/testimonialsData";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { ChevronDown, ChevronUp } from 'lucide-react';

const INITIAL_VISIBLE = 4;

const Testimonials = () => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const sectionTitle = language === 'en' 
    ? 'Professional Endorsements' 
    : 'Recomendaciones Profesionales';

  const moreText = language === 'en' ? 'More endorsements' : 'Más recomendaciones';
  const lessText = language === 'en' ? 'Show less' : 'Mostrar menos';

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, INITIAL_VISIBLE);
  const hasMore = testimonials.length > INITIAL_VISIBLE;

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Floating Gradient Orbs - Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Light mode orbs */}
        <div
          className="
            absolute top-0 left-1/4 -translate-x-1/2
            w-[500px] h-[500px] 
            rounded-full 
            bg-gradient-to-br from-primary/18 to-accent/18
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
            bg-gradient-to-br from-accent/14 to-primary/14
            blur-[80px]
            dark:opacity-0
            transition-opacity duration-500
            animate-pulse
          "
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />

        {/* Dark mode orbs */}
        <div
          className="
            absolute top-0 left-1/4 -translate-x-1/2
            w-[500px] h-[500px] 
            rounded-full 
            bg-gradient-to-br from-primary/22 to-accent/22
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
            bg-gradient-to-br from-accent/18 to-primary/18
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
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Show more/less button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-sm font-medium text-foreground transition-all"
            >
              {showAll ? (
                <>
                  {lessText}
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  {moreText} ({testimonials.length - INITIAL_VISIBLE})
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
