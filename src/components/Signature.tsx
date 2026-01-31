import profilePhoto from "@/assets/daniel-mendoza-profile.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Signature = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 px-6 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Profile Photo with Glowing Border */}
        <div className="relative mb-8">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl scale-110" />
          
          {/* Photo container */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-primary via-accent to-primary">
            <div className="w-full h-full rounded-full overflow-hidden bg-secondary">
              <img
                src={profilePhoto}
                alt="Daniel Mendoza - .NET Full Stack Software Engineer"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </div>
        </div>

        {/* Role Title */}
        <h3 className="text-lg md:text-xl font-bold text-foreground uppercase tracking-[0.2em] mb-6">
          .NET Full Stack Software Engineer
        </h3>

        {/* Quote */}
        <p className="text-base md:text-lg italic text-muted-foreground max-w-2xl leading-relaxed">
          {t('signature.quote')}
        </p>
      </div>
    </section>
  );
};

export default Signature;
