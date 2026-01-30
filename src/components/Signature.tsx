import profilePhoto from "@/assets/daniel-mendoza-profile.jpg";

const Signature = () => {
  return (
    <section className="py-24 px-6 bg-[hsl(220_25%_6%)]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Profile Photo with Glowing Border */}
        <div className="relative mb-8">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl scale-110" />
          
          {/* Photo container */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-primary via-accent to-primary">
            <div className="w-full h-full rounded-full overflow-hidden bg-[hsl(220_25%_10%)]">
              <img
                src={profilePhoto}
                alt="Daniel Mendoza - .NET Full Stack Software Engineer"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </div>
        </div>

        {/* Role Title */}
        <h3 className="text-lg md:text-xl font-bold text-[hsl(220_15%_95%)] uppercase tracking-[0.2em] mb-6">
          .NET Full Stack Software Engineer
        </h3>

        {/* Quote */}
        <p className="text-base md:text-lg italic text-[hsl(220_10%_60%)] max-w-2xl leading-relaxed">
          "Building robust systems so you can focus on scaling your business, not fixing bugs."
        </p>
      </div>
    </section>
  );
};

export default Signature;
