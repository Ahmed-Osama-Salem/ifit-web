import { getCookie } from 'cookies-next';
import type { GetServerSidePropsContext } from 'next';

import MainLayout from '@/component/layouts/MainLayout';
import { Meta } from '@/component/layouts/Meta';
import HomeView from '@/component/sections/HomeView';
import { Main } from '@/component/templates/Main';

export interface UserModel {
  name: string;
  email: string;
  image: string;
  provider?: string;
}

const Index = ({ user }: { user: UserModel }) => {
  // console.log(user, 'xxxxxxxxxxxxxxxxxxxxx');

  return (
    <Main meta={<Meta title="ifit" description="ifit." />}>
      <MainLayout user={user}>
        <HomeView />
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
