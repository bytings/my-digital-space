import { Linkedin } from "lucide-react";
import type { Testimonial } from "./testimonialsData";

export const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="group relative">
      {/* Outer glow halo (reveals on hover) */}
      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/25 via-accent/25 to-primary/25 blur-xl"
      />

      <div
        className={
          "relative z-10 p-6 rounded-2xl glass-panel glass-panel-hover overflow-hidden"
        }
      >
        {/* Subtle glass reflection */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/35 via-transparent to-transparent dark:from-white/10" />

        {/* LinkedIn badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="p-2 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] dark:bg-white/10 dark:text-white/70 dark:group-hover:bg-white/15">
            <Linkedin size={16} />
          </div>
        </div>

        <blockquote className="mb-6 pr-8 relative z-10">
          <p className="text-foreground dark:text-white/90 text-base leading-relaxed italic">
            “{testimonial.quote}”
          </p>
        </blockquote>

        <div className="flex items-center gap-4 relative z-10">
          {/* Avatar */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-md opacity-60 bg-gradient-to-br from-primary to-accent group-hover:opacity-85 transition-opacity duration-300" />
            <div className="relative w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg">
              {testimonial.initials}
            </div>
          </div>

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
