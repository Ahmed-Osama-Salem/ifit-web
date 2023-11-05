import HomeView from '@/component/sections/HomeView';

export interface UserModel {
  name: string;
  email: string;
  image: string;
  provider?: string;
}

const Page = async () => {
  return <HomeView />;
};

export default Page;
