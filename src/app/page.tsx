import { cookies } from 'next/headers';

import MainLayout from '@/component/layouts/MainLayout';
import HomeView from '@/component/sections/HomeView';

export interface UserModel {
  name: string;
  email: string;
  image: string;
  provider?: string;
}

export const getServerSideProps = async () => {
  // const session = await getSession(ctx);
  // const data = await getCookie('_user', { req, res });
  const data = cookies().get('_user');

  if (!data) {
    return {
      props: {},
    };
  }
  // const { user } = session;
  return {
    props: { user: JSON.parse(data.value) },
  };
};

const Page = async () => {
  // console.log(user, 'xxxxxxxxxxxxxxxxxxxxx');

  const { props } = await getServerSideProps();
  console.log(props.user);

  return (
    <MainLayout user={props.user}>
      <HomeView />
    </MainLayout>
  );
};

export default Page;
