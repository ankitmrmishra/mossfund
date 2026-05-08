import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import ProblemStatement from "@/components/ProblemStatement";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BentoGrid from "@/components/BentoGrid";
import ProofOfWork from "@/components/ProofOfWork";
import PhotoSection from "@/components/PhotoSection";
import FAQ from "@/components/FAQ";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FooterReveal from "@/components/FooterReveal";
import { StructuredData } from "./structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />

      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <ProblemStatement />
        <HowItWorks />
        <Testimonials />
        <BentoGrid />
        <ProofOfWork />
        <PhotoSection />
        <FAQ />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
