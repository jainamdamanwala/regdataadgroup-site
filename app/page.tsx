import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingCTA from "@/components/FloatingCTA";
import MetricsStrip from "@/components/MetricsStrip";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseHighlights from "@/components/CaseHighlights";
import ConsultationBand from "@/components/ConsultationBand";
import WhoWeServe from "@/components/WhoWeServe";
import HowClientsEngage from "@/components/HowClientsEngage";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import CoreValues from "@/components/CoreValues";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FloatingCTA />

      <MetricsStrip />
      <TrustStrip />

      <About />
      <Services />

      <CaseHighlights />
      <ConsultationBand />

      <WhoWeServe />
      <HowClientsEngage />
      <WhyChooseUs />
      <FAQ />

      <CoreValues />
      <Contact />
      <Footer />
    </main>
  );
}