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
      className="flex max-h-screen w-full max-w-full flex-row items-center justify-center gap-8 overflow-y-hidden pt-[160px]"
    >
      <Container
        tag="main"
        className="h-[93vh] w-[30%] rounded-t-3xl bg-yellow-light px-5 py-7"
      >
        <article className="h-full rounded-t-3xl bg-white p-7">
          {props.children}
        </article>
      </Container>
      <Container
        tag="main"
        className="h-[93vh] w-[70%] rounded-t-3xl bg-yellow-light px-5 py-7"
      >
        <article className="h-full rounded-t-3xl bg-white">
          {props.dependChildren}
        </article>
      </Container>
    </Container>
  );
};

export default QuestionLayout;
