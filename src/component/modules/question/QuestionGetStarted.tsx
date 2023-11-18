import { Button } from '@/component/elements/Button';
import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';
// import logo from '@/public/assets/images/Group 165.png';

const QuestionGetStarted = () => {
  return (
    <Container
      flexDirection="column"
      className="flex h-full flex-col items-center justify-center"
    >
      <TypographyText
        tag="h3"
        className="text-[22px] font-bold text-brown-normal"
      >
        Don’t confused
      </TypographyText>
      <img alt="alt" src="/assets/images/Group 168.png" />

      <Button
        bgType="default"
        bgClass="btn_main"
        rounded="rounded-[100px]"
        padding="px-6 py-2"
      >
        Get started
      </Button>
    </Container>
  );
};

export default QuestionGetStarted;
