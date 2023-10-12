import { getCookie } from 'cookies-next';
import type { GetServerSidePropsContext } from 'next';

import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';
import MainLayout from '@/component/layouts/MainLayout';
import { Meta } from '@/component/layouts/Meta';
import { Main } from '@/component/templates/Main';

interface UserModel {
  name: string;
  email: string;
  image: string;
  provider?: string;
}

const Index = ({ user }: { user: UserModel }) => {
  console.log(user, 'xxxxxxxxxxxxxxxxxxxxx');

  return (
    <Main meta={<Meta title="ifit" description="ifit." />}>
      <MainLayout>
        {user ? (
          <Container
            bgColor="none"
            className="flex flex-col items-center text-center"
          >
            <TypographyText
              tag="h3"
              className=" text-[36px] font-bold text-brown-normal"
            >
              {user.name}
            </TypographyText>
            <img
              src={user.image}
              alt="user_avatar"
              className="h-full w-[100px] rounded-full"
            />
          </Container>
        ) : (
          <Container bgColor="bg-yellow-light text-center">content</Container>
        )}
      </MainLayout>
    </Main>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { req, res } = ctx;
  // const session = await getSession(ctx);
  const data = await getCookie('_user', { req, res });

  if (!data) {
    return {
      props: {},
    };
  }
  // const { user } = session;
  return {
    props: { user: JSON.parse(data) },
  };
}
