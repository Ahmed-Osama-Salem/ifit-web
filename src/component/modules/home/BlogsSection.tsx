import React from 'react';

import Container from '../../elements/Container';
import BlogCard from '../blog/BlogCard';
import HeaderBar from '../HeaderBar';

const BlogsSection = () => {
  return (
    <Container bgColor="bg-none" flexDirection="column" className="flex gap-16">
      <Container bgColor="bg-none">
        <HeaderBar title="Newest" />
        <Container
          bgColor="bg-none"
          flexDirection="row"
          className="flex w-full gap-[107px] py-7"
        >
          <BlogCard type="top" />
          <Container
            bgColor="bg-none"
            flexDirection="column"
            className="flex w-full gap-12"
          >
            <BlogCard type="topSmall" />
            <BlogCard type="topSmall" />
          </Container>
        </Container>
      </Container>

      {/* all blogs section */}
      <Container bgColor="bg-none">
        <HeaderBar title="Articals" />
        <Container
          bgColor="bg-none"
          flexDirection="row"
          className="flex w-full gap-[107px] py-12"
        >
          <Container
            bgColor="bg-none"
            flexDirection="column"
            className="flex w-[50%] gap-16"
          >
            <BlogCard type="reguler" />
            <BlogCard type="reguler" />
            <BlogCard type="reguler" />
          </Container>
          <Container
            bgColor="bg-none"
            flexDirection="column"
            className="flex w-[50%] gap-16"
          >
            <BlogCard type="reguler" />
            <BlogCard type="reguler" />
            <BlogCard type="reguler" />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default BlogsSection;
