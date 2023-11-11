/* eslint-disable import/extensions */

import BlogsSection from '../modules/home/BlogsSection';
import HeroSection from '../modules/home/HeroSection';
import TopQuestionsSection from '../modules/home/TopQuestionsSection';

const HomeView = async ({ dict }: { dict: any }) => {
  return (
    <>
      {/* Hero section */}
      <HeroSection dict={dict} />

      {/* newest blog section */}
      <BlogsSection />

      {/* Top Question section */}
      <TopQuestionsSection />
    </>
  );
};

export default HomeView;
