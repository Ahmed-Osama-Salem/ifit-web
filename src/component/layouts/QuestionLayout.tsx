import type { ReactNode } from 'react';

import Container from '../elements/Container';

interface QuestionLayoutProps {
  children: ReactNode;
  dependChildren: ReactNode;
}
const QuestionLayout = (props: QuestionLayoutProps) => {
  return (
    <Container
      tag="section"
      flexDirection="row"
      className="flex h-[90px] min-h-screen w-full max-w-full flex-row items-center justify-center gap-8 pt-[120px]"
    >
      <Container
        tag="main"
        className="h-[100%] w-[30%] rounded-t-3xl bg-yellow-light px-5 py-7"
      >
        <article className="h-full rounded-t-3xl bg-white p-7">
          {props.children}
        </article>
      </Container>
      <Container
        tag="main"
        className="h-[100%] w-[70%] rounded-t-3xl bg-yellow-light px-5 py-7"
      >
        <article className="h-full rounded-t-3xl bg-white">
          {props.dependChildren}
        </article>
      </Container>
    </Container>
  );
};

export default QuestionLayout;
