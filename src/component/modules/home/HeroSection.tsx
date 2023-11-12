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
      className="flex h-[75vh] items-center justify-center gap-[30px]"
    >
      {/* <LangSwitch /> */}
      <TypographyText
        tag="span"
        className="text-[57px] font-bold text-brown-normal"
      >
        {`${dict.Index.title} `}
        <TypographyText
          tag="span"
          className="mx-1 text-[57px] font-bold text-yellow-normal"
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
          className="text-[24px] font-bold text-brown-normal"
        >
          {`${dict.Index.slogan1} `}
          {/* Now with Ifit you can answer for all questions you need and learn */}
        </TypographyText>
        <TypographyText
          tag="p"
          className="text-[24px] font-bold text-brown-normal"
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
