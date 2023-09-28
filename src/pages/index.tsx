import Lottie from 'lottie-react';

import Container from '@/component/elements/Container';
import { TypographyText } from '@/component/elements/Typography';
import { Meta } from '@/component/layouts/Meta';
import { Main } from '@/component/templates/Main';
import logoJson from '@/public/assets/json/logo.json';

const Index = () => {
  return (
    <Main meta={<Meta title="ifit" description="ifit." />}>
      <Container
        className="h-screen w-screen rounded-none "
        bgColor="bg-[#00213d]"
      >
        <Container
          className="flex h-full w-full flex-col items-center justify-center"
          bgColor="bg-[#F6E117]"
        >
          <Lottie
            animationData={logoJson}
            loop={1}
            autoplay
            className="w-[500px] translate-x-[-10px]"
          />
          <TypographyText
            tag="h1"
            className="translate-y-[-48px] text-5xl font-extrabold tracking-widest text-[#231A16]"
          >
            iFIT
          </TypographyText>
        </Container>
      </Container>
    </Main>
  );
};

export default Index;
