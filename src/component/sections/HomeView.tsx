import BlogsSection from '../modules/home/BlogsSection';
import HeroSection from '../modules/home/HeroSection';
import TopQuestionsSection from '../modules/home/TopQuestionsSection';

const HomeView = () => {
  return (
    <>
      {/* Hero section */}
      <HeroSection />

      {/* newest blog section */}
      <BlogsSection />

      {/* Top Question section */}
      <TopQuestionsSection />
    </>
  );
};

export default HomeView;
