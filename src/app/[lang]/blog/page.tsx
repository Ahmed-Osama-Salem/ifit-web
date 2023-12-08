import React from 'react';

import TypographyText from '@/component/elements/Typography';
import RegularArticalCard from '@/component/modules/blog/RegularArticalCard';
import MainBlogCard from '@/component/modules/blog2/MainBlogCard';
import MiniCardBlog from '@/component/modules/blog2/MiniCardBlog';
import Tag from '@/component/modules/Tag';

const Blog = () => {
  return (
    <div className="h-auto">
      <div className="flex flex-col gap-8">
        <div>
          <TypographyText tag="h1" className="mt-24 text-4xl font-semibold">
            Articles
          </TypographyText>
        </div>
        <div className="flex w-full gap-3 ">
          <Tag background="bg-black-dark" content="Engineering 3" />
          <Tag
            background="bg-none"
            text="text-gray-light"
            content="Engineering 3"
          />
          {/* <Tag
            background="bg-none"
            text="text-gray-light"
            content="Engineering 3"
          /> */}
        </div>
      </div>
      <div className="flex flex-col gap-14 xl:gap-10">
        <div className="mt-7 flex flex-col gap-14 xl:flex-row xl:gap-10">
          <div className="xl:w-2/3">
            <MainBlogCard />
          </div>
          <div className=" flex flex-col gap-8 xl:w-2/3">
            <RegularArticalCard />
            <RegularArticalCard />
            <RegularArticalCard />
          </div>
        </div>
        <div className="w-full ">
          <MiniCardBlog />
        </div>
      </div>
    </div>
  );
};

export default Blog;
