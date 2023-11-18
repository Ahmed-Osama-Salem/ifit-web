import Container from '@/component/elements/Container';
import StatusLabel from '@/component/elements/StatusLabel';
import TypographyText from '@/component/elements/Typography';

const QuestionCard = () => {
  return (
    <Container
      flexDirection="column"
      className="mt-4 flex flex-col gap-1 border-b-[0.5px] border-black-light"
    >
      <Container flexDirection="row" className="flex justify-between">
        <TypographyText
          tag="h3"
          className="text-[16px] font-bold text-gray-dark"
        >
          Title
        </TypographyText>
        <TypographyText tag="h3" className="text-[12px] text-gray-light">
          Date
        </TypographyText>
      </Container>
      <Container>
        <TypographyText tag="h3" className="text-[14px] text-[#666E80]">
          Generate Lorem Ipsum placeholder text. Select the
        </TypographyText>
      </Container>
      <Container flexDirection="row" className="flex justify-between">
        <StatusLabel label="Answered" color="valid" />
      </Container>
    </Container>
  );
};

export default QuestionCard;
