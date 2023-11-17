import React from 'react';

import TypographyText from '@/component/elements/Typography';
import mainImage from '@/public/assets/images/image-1.png';

const MiniCardBlog = () => {
  return (
    <div className="flex w-full min-w-min max-w-sm flex-col gap-4 rounded-xl border border-[#D9D9D980] ">
      <div className="flex w-full flex-col gap-3 p-3">
        <div className="w-full">
          <img src={mainImage.src} alt="" className="w-full" />
        </div>
        <div className="flex  flex-col gap-3">
          <div className="w-fit rounded-full bg-gray-lighter p-1 px-2 text-black-dark">
            <TypographyText tag="h3" className=" text-xs ">
              Engineering 3
            </TypographyText>
          </div>
          <TypographyText tag="h3" className=" text-xl ">
            Power engineering
          </TypographyText>
          <TypographyText tag="p" className=" text-base text-gray-light ">
            Imagine that youve created your HelloFresh bundle, and the weekly
            price is
          </TypographyText>
          <div className="flex  w-full items-center justify-between ">
            <div className="flex items-center gap-5">
              <img
                src={mainImage.src}
                alt=""
                className="h-[50px] w-[50px]  rounded-full"
              />
              <TypographyText
                tag="p"
                className=" text-sm font-semibold text-gray-light "
              >
                Fady Adalat
              </TypographyText>
            </div>
            <div className="">
              <TypographyText tag="p" className=" text-xs text-gray-light">
                7 Jun <span className="mx-1">&#x2022;</span>7 min Read
              </TypographyText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCardBlog;
