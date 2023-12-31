import type { ReactNode } from 'react';

import type { UserModel } from '@/app/[lang]/page';

import Container from '../elements/Container';
import Navbar from '../modules/navbar/Navbar';
import Popup from '../modules/Popup';

interface MainLayoutProps {
  children: ReactNode;
  user?: UserModel | undefined;
  lang: string;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <Container
      flexDirection="column"
      className="flex flex-col items-center justify-center"
      tag="section"
    >
      <Navbar user={props.user} lang={props.lang} />
      <Popup />
      <Container
        tag="div"
        bgColor="bg-gradient-to-b from-yellow-light to-transparent via-transparent"
        className="h-auto min-h-screen w-full max-w-[1920px] px-[40px] lg:px-[150px]"
      >
        {props.children}
      </Container>
    </Container>
  );
};

export default MainLayout;
