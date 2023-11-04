import { cookies } from 'next/headers';

import MainLayout from '@/component/layouts/MainLayout';
import HomeView from '@/component/sections/HomeView';

export interface UserModel {
  name: string;
  email: string;
  image: string;
  provider?: string;
}

const googleAuth = async () => {
  const data = cookies().get('_user');

  if (!data) {
    return {
      props: {},
    };
  }
  return {
    props: { user: JSON.parse(data.value) },
  };
};

const Page = async () => {
  const { props } = await googleAuth();

  return (
    <MainLayout user={props.user}>
      <HomeView />
    </MainLayout>
  );
};

export default Page;
