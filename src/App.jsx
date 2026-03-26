import { useEffect } from "react";
import BrandStats from "./components/BrandStats";
import BenefitsSection from "./components/BenefitsSection";
import CategoryShowcase from "./components/CategoryShowcase";
import CollectionSection from "./components/CollectionSection";
import FeaturedProducts from "./components/FeaturedProducts";
import FixedNav from "./components/FixedNav";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import LookbookSection from "./components/LookbookSection";
import NewsletterSection from "./components/NewsletterSection";
import SiteFooter from "./components/SiteFooter";
import SizeGuideSection from "./components/SizeGuideSection";
import Testimonials from "./components/Testimonials";

const App = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrap">
      <FixedNav />
      <HeroSection />
      <main>
        <div className="reveal">
          <CollectionSection />
        </div>
        <div className="reveal reveal--delay-1">
          <BrandStats />
        </div>
        <div className="reveal">
          <CategoryShowcase />
        </div>
        <div className="reveal reveal--delay-1">
          <LookbookSection />
        </div>
        <div className="reveal">
          <FeaturedProducts />
        </div>
        <div className="reveal reveal--delay-1">
          <BenefitsSection />
        </div>
        <div className="reveal">
          <HowItWorksSection />
        </div>
        <div className="reveal reveal--delay-1">
          <SizeGuideSection />
        </div>
        <div className="reveal">
          <Testimonials />
        </div>
        <div className="reveal reveal--delay-1">
          <FaqSection />
        </div>
        <div className="reveal">
          <NewsletterSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
