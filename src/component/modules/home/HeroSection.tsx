'use client';

import React from 'react';

import { Button } from '../../elements/Button';
import Container from '../../elements/Container';
import TypographyText from '../../elements/Typography';

const HeroSection = () => {
  return (
    <Container
      bgColor="none"
      flexDirection="column"
      className="flex h-[75vh] items-center justify-center gap-[30px]"
    >
      <TypographyText
        tag="span"
        className="text-[57px] font-bold text-brown-normal"
      >
        Ask
        <TypographyText
          tag="span"
          className="mx-3 text-[57px] font-bold text-yellow-normal"
        >
          i Fit
        </TypographyText>
        for any consultant
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
          Now with Ifit you can answer for all questions you need and learn
        </TypographyText>
        <TypographyText
          tag="p"
          className="text-[24px] font-bold text-brown-normal"
        >
          more about work for article and blogs to be brans and tob el nob
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
