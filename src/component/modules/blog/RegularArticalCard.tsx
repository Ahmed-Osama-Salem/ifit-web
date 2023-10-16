import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

const RegularArticalCard = () => {
  return (
    <Container bgColor="bg-none" flexDirection="row" className="w-[100%] gap-5">
      <Container bgColor="none" className="h-[200px] w-[40%]">
        <img
          alt="artical"
          className="h-full w-full rounded-2xl object-cover"
          src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        />
      </Container>
      <Container flexDirection="column" className="flex max-w-[60%] gap-3">
        <Container bgColor="none" flexDirection="row" className="flex gap-10">
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
          bgColor="bg-none"
          flexDirection="column"
          className=" flex  gap-3"
        >
          <TypographyText
            tag="p"
            className="text-[22px] font-bold text-black-normal"
          >
            engineering
          </TypographyText>
          <TypographyText
            tag="p"
            className=" text-[16px] font-bold text-[#98A1B3]"
          >
            The best choices for power engineeringThe best choices for power
            engineering st choices for power engineering
          </TypographyText>
        </Container>
      </Container>
    </Container>
  );
};

export default RegularArticalCard;
