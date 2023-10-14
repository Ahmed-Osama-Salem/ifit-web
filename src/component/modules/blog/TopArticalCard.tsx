import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

const TopArticalCard = () => {
  return (
    <Container
      flexDirection="column"
      bgColor="none"
      className="flex max-h-[777px] w-[50%] items-center"
    >
      <Container
        flexDirection="column"
        bgColor="none"
        className="flex w-[90%] gap-8"
      >
        <Container
          bgColor="none"
          flexDirection="row"
          className="flex justify-center gap-24"
        >
          <TypographyText
            tag="p"
            className="text-[14px] font-bold text-black-normal"
          >
            Author
          </TypographyText>
          <TypographyText
            tag="p"
            className="text-[14px] font-bold text-black-normal"
          >
            view reads
          </TypographyText>
        </Container>

        <Container
          bgColor="none"
          flexDirection="column"
          className="flex items-center gap-4 px-32 text-center"
        >
          <TypographyText
            tag="p"
            className="text-[36px] font-bold text-black-normal"
          >
            The best choices for power engineering
          </TypographyText>
          <TypographyText
            tag="p"
            className="px-16 text-[16px] font-bold text-black-normal"
          >
            The best choices for power engineeringThe best choices for power
            engineering st choices for power engineering
          </TypographyText>
        </Container>
        <Container bgColor="none" className="h-[500px] w-full">
          <img
            alt="artical"
            className="h-full w-full rounded-b-2xl object-cover"
            src="https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default TopArticalCard;
