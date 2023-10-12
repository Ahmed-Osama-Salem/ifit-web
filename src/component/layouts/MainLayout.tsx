import type { ReactNode } from 'react';

import Container from '../elements/Container';
import Navbar from '../modules/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
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
        {props.children}
      </Container>
    </Container>
  );
};

export default MainLayout;
