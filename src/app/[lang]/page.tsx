import HomeView from '@/component/sections/HomeView';

import { getDictionary } from './dictionaries';

export interface UserModel {
  name: string;
  email: string;
  image: string;
  provider?: string;
}

const Page = async ({ params }: { params: any }) => {
  const dict = await getDictionary(params.lang); // en
  return <HomeView dict={dict} />;
};

export default Page;
