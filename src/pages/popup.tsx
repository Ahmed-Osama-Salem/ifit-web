import React from 'react';

import Container from '@/component/elements/Container';
import { TypographyText } from '@/component/elements/Typography';
import Popups from '@/component/modules/Popup';

const Popup = () => {
  return (
    <Container
      className="h-screen w-screen rounded-none "
      bgColor="bg-[#00213d]/50"
    >
      <Container
        bgColor="bg-[#00213d]/50"
        className="flex h-full w-full flex-col items-center justify-center"
      >
        <TypographyText
          tag="h1"
          className="text-[7rem] font-extrabold text-white"
        >
          Pop
          <TypographyText tag="span" className="font-semibold text-[#437e60]">
            ups
          </TypographyText>
        </TypographyText>
        <Popups />
      </Container>
    </Container>
  );
};

export default Popup;
