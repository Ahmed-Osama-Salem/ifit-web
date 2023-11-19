import React from 'react';

import TypographyText from '@/component/elements/Typography';
import MainBlogCard from '@/component/modules/blog/MainBlogCard';
import MiniCardWrapper from '@/component/modules/blog/MiniCardWrapper';
import RegularArticalCard from '@/component/modules/blog/RegularArticalCard';
import Tag from '@/component/modules/Tag';

const Blog = () => {
  return (
    <div className="h-[600rem]">
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
          <Tag
            background="bg-none"
            text="text-gray-light"
            content="Engineering 3"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="mt-7 flex gap-10">
          <div className="w-2/3">
            <MainBlogCard />
          </div>
          {/* <div className="flex w-full max-w-[650px] flex-col gap-8"> */}
          <div className=" flex w-2/3 flex-col gap-8">
            <RegularArticalCard />
            <RegularArticalCard />
            <RegularArticalCard />
          </div>
        </div>
        <MiniCardWrapper />
      </div>
    </div>
  );
};

export default Blog;
