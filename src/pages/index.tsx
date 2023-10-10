import Lottie from 'lottie-react';
import { signIn, signOut, useSession } from 'next-auth/react';

import { Button } from '@/component/elements/Button';
import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';
import { Meta } from '@/component/layouts/Meta';
import { Main } from '@/component/templates/Main';
import logoJson from '@/public/assets/json/logo.json';

const Index = () => {
  const { data: session } = useSession();
  console.log(session?.user);

  return (
    <Main meta={<Meta title="ifit" description="ifit." />}>
      <Container
        className="h-screen w-screen rounded-none "
        bgColor="bg-[#00213d]"
      >
        <Container
          className="flex h-full w-full flex-col items-center justify-center"
          bgColor="bg-yellow-normal"
        >
          <Lottie
            animationData={logoJson}
            loop={1}
            autoplay
            className="w-[30rem] translate-x-[-10px]"
          />
          <TypographyText
            tag="h1"
            className="translate-y-[-45px] text-5xl font-extrabold tracking-widest text-brown-normal "
          >
            iFIT
          </TypographyText>
          <Button
            bgType="default"
            bgClass="btn_valid"
            onClick={() => signIn('google')}
          >
            sign in
          </Button>
          <Button
            bgType="default"
            bgClass="btn_critical"
            onClick={() => signOut()}
          >
            sign out
          </Button>
        </Container>
      </Container>
    </Main>
  );
};

export default Index;
