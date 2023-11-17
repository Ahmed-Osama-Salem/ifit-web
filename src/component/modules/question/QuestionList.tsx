import { Button } from '@/component/elements/Button';
import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

import QuestionCard from './QuestionCard';

const QuestionList = () => {
  return (
    <Container flexDirection="column" className="flex flex-col gap-7">
      <Container flexDirection="row" className="flex gap-3">
        <Button
          bgType="default"
          bgClass="btn_main"
          rounded="rounded-[100px]"
          padding="px-6 py-2"
        >
          Ask
        </Button>
        <Button
          bgType="light"
          bgClass="btn_main"
          rounded="rounded-[100px]"
          padding="px-6 py-2"
        >
          Discover
        </Button>
      </Container>
      <Container flexDirection="column">
        <TypographyText
          tag="h3"
          className="text-[22px] font-bold text-brown-normal"
        >
          My questions
        </TypographyText>
        {[1, 2, 3, 4, 5].map((i) => {
          return <QuestionCard key={i} />;
        })}
      </Container>
    </Container>
  );
};

export default QuestionList;
