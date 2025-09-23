import { HeroSection } from "@/components/HeroSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { JourneySection } from "@/components/JourneySection";
import { MethodSection } from "@/components/MethodSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Header } from "@/components/Header";
import ScrollAnimations from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <ScrollAnimations />
      <Header />
      
      <main>
        {/* Hero Section - Full Width */}
        <HeroSection />
        
        {/* Main Content Container - Controlled Width */}
        <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
          {/* Content Sections with Consistent Spacing */}
          <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32 xl:space-y-40">
            <TargetAudienceSection />
            
            {/* Section Separator */}
            <div className="section-separator-glow"></div>
            
            <AuthoritySection />
            
            {/* Section Separator */}
            <div className="section-separator"></div>
            
            <JourneySection />
            
            {/* Section Separator */}
            <div className="section-separator-glow"></div>
            
            <MethodSection />
            
            {/* Section Separator */}
            <div className="section-separator"></div>
            
            <FinalCtaSection />
          </div>
          
          {/* Form Section */}
          <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32">
            <ApplicationForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
