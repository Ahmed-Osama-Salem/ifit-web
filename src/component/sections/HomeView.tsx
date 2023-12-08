/* eslint-disable import/extensions */

import Container from '../elements/Container';
import BlogsSection from '../modules/home/BlogsSection';
import CoursesSection from '../modules/home/CoursesSection';
import HeroSection from '../modules/home/HeroSection';
import TopQuestionsSection from '../modules/home/TopQuestionsSection';

const HomeView = async ({ dict }: { dict: any }) => {
  return (
    <Container flexDirection="column" tag="section">
      {/* Hero section */}
      <HeroSection dict={dict} />
      <Container flexDirection="column" className="flex flex-col gap-24">
        {/* newest blog section */}
        <BlogsSection />

        {/* Top Question section */}
        <TopQuestionsSection />

        {/* Courses section */}
        <CoursesSection />
      </Container>
    </Container>
  );
};

export default HomeView;
