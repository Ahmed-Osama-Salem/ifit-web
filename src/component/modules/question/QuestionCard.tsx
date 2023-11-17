import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

const QuestionCard = () => {
  return (
    <Container
      flexDirection="column"
      className="mt-4 flex flex-col gap-2 border-b-[0.5px] border-black-light"
    >
      <Container flexDirection="row" className="flex justify-between">
        <TypographyText
          tag="h3"
          className="text-[16px] font-bold text-brown-normal"
        >
          Title
        </TypographyText>
        <TypographyText tag="h3" className="text-[12px]  text-brown-normal">
          Date
        </TypographyText>
      </Container>
      <Container>
        <TypographyText
          tag="h3"
          className="text-[14px] font-bold text-brown-light"
        >
          Generate Lorem Ipsum placeholder text. Select the
        </TypographyText>
      </Container>
      <Container flexDirection="row" className="flex justify-between">
        hhh
      </Container>
    </Container>
  );
};

export default QuestionCard;
