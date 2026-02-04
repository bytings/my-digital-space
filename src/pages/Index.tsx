import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import Signature from "@/components/Signature";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Global floating gradient orbs */}
      <BackgroundOrbs />

      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Education />
        <Signature />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
