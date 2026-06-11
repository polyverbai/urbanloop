import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import ImpactCounter from "../components/home/ImpactCounter";
import HowItWorks from "../components/home/HowItWorks";
import Services from "../components/home/Services";
import WhyUrbanLoop from "../components/home/WhyUrbanLoop";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
  <Header />
  <Hero />
  <ImpactCounter />
  <HowItWorks />
  <Services />
  <WhyUrbanLoop />
  <CTA />
  <Footer />
</>
  );
}