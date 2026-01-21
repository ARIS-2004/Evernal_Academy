import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import PopularCoursesSection from '@/components/popular-courses-section';
import WhyUsSection from '@/components/why-us-section';
import HowItWorksSection from '@/components/how-it-works-section';
import TestimonialsSection from '@/components/testimonials-section';
import AchievementsSection from '@/components/achievements-section';
import TrainersSection from '@/components/trainers-section';
import CTASection from '@/components/cta-section';
import EarlyEducationSection from '@/components/EarlyEducationSection';
import ProgrammesSection from '@/components/ProgrammesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
     
      <HeroSection />
      <AchievementsSection />
      {/* <PopularCoursesSection /> */}
      <EarlyEducationSection />
      <ProgrammesSection />
      <WhyUsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <TrainersSection />
      <CTASection />
      {/* <Footer /> */}
    </main>
  );
}
