import Image from 'next/image';

import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

const TopArticalCard = () => {
  return (
    <Container
      flexDirection="column"
      bgColor="bg-none"
      className="flex max-h-[777px] w-full min-w-[60%] items-center xl:max-w-[755px]"
    >
      <Container
        flexDirection="column"
        bgColor="none"
        className="flex w-full gap-8"
      >
        <Container
          bgColor="none"
          flexDirection="row"
          className="flex justify-center gap-24"
        >
          <TypographyText
            tag="p"
            className="text-[14px] font-bold text-gray-normal"
          >
            Author
          </TypographyText>
          <TypographyText
            tag="p"
            className="text-[14px] font-medium text-gray-light"
          >
            view reads
          </TypographyText>
        </Container>

        <Container
          bgColor="none"
          flexDirection="column"
          className="flex items-center gap-4 text-center"
        >
          <TypographyText
            tag="p"
            className="text-[30px] font-bold text-black-normal xl:text-[36px]"
          >
            The best choices for power engineering
          </TypographyText>
          <TypographyText
            tag="p"
            className="text-[16px] font-medium text-gray-normal xl:px-16"
          >
            The best choices for power engineeringThe best choices for power
            engineering st choices for power engineering
          </TypographyText>
        </Container>
        <Container
          bgColor="none"
          className="relative h-[300px] w-full xl:h-[500px]"
        >
          <Image
            alt="artical"
            fill
            className="rounded-b-2xl object-cover"
            src="https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        </Container>
      </Container>
    </Container>
  );
};

export default TopArticalCard;
