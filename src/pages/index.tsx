import type { GetSessionParams } from 'next-auth/react';
import { getSession } from 'next-auth/react';

import Container from '@/component/elements/Container';
import { Meta } from '@/component/layouts/Meta';
import Navbar from '@/component/modules/Navbar';
import { Main } from '@/component/templates/Main';

const Index = ({ user }: { user: any }) => {
  console.log(user, 'xxxxxxxxxxxxxxxxxxxxx');

  return (
    <Main meta={<Meta title="ifit" description="ifit." />}>
      <Container
        flexDirection="column"
        className="flex flex-col items-center justify-center"
        tag="section"
      >
        <Navbar />
        <Container
          tag="div"
          bgColor="bg-gradient-to-b from-yellow-light to-transparent via-transparent"
          className="h-auto min-h-screen w-full max-w-[1920px]"
        >
          <Container bgColor="bg-yellow-light text-center">content</Container>
        </Container>
      </Container>
      {/* <Container
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
      </Container> */}
    </Main>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetSessionParams | undefined) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      props: {},
    };
  }
  const { user } = session;
  return {
    props: { user },
  };
}
