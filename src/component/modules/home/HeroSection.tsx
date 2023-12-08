'use client';

import React from 'react';

import { Button } from '../../elements/Button';
import Container from '../../elements/Container';
import TypographyText from '../../elements/Typography';

const HeroSection = ({ dict }: { dict: any }) => {
  return (
    <Container
      bgColor="none"
      flexDirection="column"
      className="mt-7 flex h-[75vh] items-center justify-center gap-10 sm:mt-0 lg:gap-[30px]"
    >
      {/* <LangSwitch /> */}
      <TypographyText
        tag="span"
        className="text-[44px] font-bold text-brown-normal lg:text-[57px] xl:text-[70px]"
      >
        {`${dict.Index.title} `}
        <TypographyText
          tag="span"
          className="mx-1 text-justify text-[44px]  font-bold text-yellow-normal lg:text-[57px] xl:text-[70px]"
        >
          {` ${dict.Index.brand} `}
        </TypographyText>
        {`${dict.Index.subTitle} `}
      </TypographyText>
      <Container
        bgColor="none"
        flexDirection="column"
        className="flex justify-center"
      >
        <TypographyText
          tag="p"
          className="text-[18px] font-bold text-brown-normal lg:text-[24px] xl:text-[30px]"
        >
          {`${dict.Index.slogan1} `}
          {/* Now with Ifit you can answer for all questions you need and learn */}
        </TypographyText>
        <TypographyText
          tag="p"
          className="text-[18px] font-bold text-brown-normal lg:text-[24px] xl:text-[30px]"
        >
          {`${dict.Index.slogan2} `}
          {/* more about work for article and blogs to be brans and tob el nob */}
        </TypographyText>
      </Container>
      <Button
        bgType="default"
        bgClass="btn_main"
        rounded="rounded-[8px]"
        className="h-[48px]  w-[255px] text-[18px] font-bold"
      >
        Ask now
      </Button>
    </Container>
  );
};

export default HeroSection;
