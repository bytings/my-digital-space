import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import Signature from "@/components/Signature";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
