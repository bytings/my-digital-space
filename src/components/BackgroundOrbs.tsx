/**
 * BackgroundOrbs - Global floating gradient orbs for glassmorphism atmosphere
 * Dark: Cyan / Deep Blue neon tones
 * Light: Soft Lavender / Sky Blue
 */
const BackgroundOrbs = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* ───────────────── Light Mode Orbs ───────────────── */}
      <div
        className="
          absolute -top-40 left-1/4 -translate-x-1/2
          w-[600px] h-[600px] rounded-full
          bg-[radial-gradient(circle,hsl(250_80%_85%/0.55)_0%,transparent_70%)]
          blur-[100px]
          dark:opacity-0 transition-opacity duration-700
          animate-pulse
        "
        style={{ animationDuration: "6s" }}
      />
      <div
        className="
          absolute bottom-0 right-1/4 translate-x-1/2
          w-[500px] h-[500px] rounded-full
          bg-[radial-gradient(circle,hsl(200_90%_80%/0.45)_0%,transparent_70%)]
          blur-[90px]
          dark:opacity-0 transition-opacity duration-700
          animate-pulse
        "
        style={{ animationDuration: "7s", animationDelay: "1.5s" }}
      />

      {/* ───────────────── Dark Mode Orbs ───────────────── */}
      <div
        className="
          absolute -top-40 left-1/4 -translate-x-1/2
          w-[600px] h-[600px] rounded-full
          bg-[radial-gradient(circle,hsl(185_80%_45%/0.28)_0%,transparent_70%)]
          blur-[110px]
          opacity-0 dark:opacity-100 transition-opacity duration-700
          animate-pulse
        "
        style={{ animationDuration: "6s" }}
      />
      <div
        className="
          absolute bottom-0 right-1/4 translate-x-1/2
          w-[500px] h-[500px] rounded-full
          bg-[radial-gradient(circle,hsl(220_75%_50%/0.25)_0%,transparent_70%)]
          blur-[100px]
          opacity-0 dark:opacity-100 transition-opacity duration-700
          animate-pulse
        "
        style={{ animationDuration: "7s", animationDelay: "1.5s" }}
      />

      {/* Center accent ribbon (both modes) */}
      <div
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[900px] h-[350px] rounded-full
          bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15
          blur-[140px]
          opacity-40 dark:opacity-25
        "
      />
    </div>
  );
};

export default BackgroundOrbs;
