'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

import Container from '../../elements/Container';
import BlogCard from '../blog/BlogCard';
import HeaderBar from '../HeaderBar';

const BlogsSection = () => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1.2], [0.1, 8]);
  const y = useTransform(scrollYProgress, [0.2, 1.7], [0, -100]);

  return (
    <motion.article
      // bgColor="bg-none"
      // flexDirection="column"
      ref={cardRef}
      style={{ opacity, y }}
      className="flex flex-col gap-16"
    >
      <Container bgColor="bg-none">
        <HeaderBar title="Newest" />
        <Container
          bgColor="bg-none"
          className="flex w-full flex-col gap-[107px] py-7 xl:flex-row"
        >
          <BlogCard type="top" />
          <Container
            bgColor="bg-none"
            flexDirection=""
            className="flex w-full flex-col gap-12 lg:flex-row xl:flex-col"
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
          flexDirection=""
          className="flex w-full flex-col gap-[107px] py-12 xl:flex-row"
        >
          <Container
            bgColor="bg-none"
            flexDirection="column"
            className="flex w-full gap-16 xl:w-[50%]"
          >
            <BlogCard type="reguler" />
            <BlogCard type="reguler" />
            <BlogCard type="reguler" />
          </Container>
          <Container
            bgColor="bg-none"
            flexDirection="column"
            className="flex w-full gap-16 xl:w-[50%]"
          >
            <BlogCard type="reguler" />
            <BlogCard type="reguler" />
            <BlogCard type="reguler" />
          </Container>
        </Container>
      </Container>
    </motion.article>
  );
};

export default BlogsSection;
