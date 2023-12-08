import Image from 'next/image';

import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

const RegularArticalCard = () => {
  return (
    <Container
      bgColor="bg-none"
      flexDirection=""
      className="flex w-[100%] flex-col gap-5 xl:flex-row"
    >
      <Container
        bgColor="none"
        className="relative h-[150px] w-[300px] xl:h-[200px] xl:w-[400px]"
      >
        <Image
          alt="artical"
          fill
          className=" rounded-2xl object-cover"
          src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        />
      </Container>
      <Container
        flexDirection="column"
        className="flex max-w-[100%] gap-3 xl:max-w-[60%]"
      >
        <Container bgColor="none" flexDirection="row" className="flex gap-10">
          <TypographyText
            tag="p"
            className="text-[12px] font-bold text-gray-normal sm:text-[14px]"
          >
            Author
          </TypographyText>
          <TypographyText
            tag="p"
            className="text-[12px] font-bold text-gray-light sm:text-[14px]"
          >
            view
          </TypographyText>
        </Container>
        <Container
          bgColor="bg-none"
          flexDirection="column"
          className=" flex  gap-3"
        >
          <TypographyText
            tag="p"
            className="text-[16px] font-bold text-black-normal sm:text-[22px]"
          >
            engineering
          </TypographyText>
          <TypographyText
            tag="p"
            className="text-[12px] font-bold text-[#98A1B3] sm:text-[16px]"
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
