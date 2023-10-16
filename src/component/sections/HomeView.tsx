import { Button } from '../elements/Button';
import Container from '../elements/Container';
import TypographyText from '../elements/Typography';
import BlogCard from '../modules/blog/BlogCard';
import HeaderBar from '../modules/HeaderBar';

const HomeView = () => {
  return (
    <>
      {/* Hero section */}
      <Container
        bgColor="none"
        flexDirection="column"
        className="flex h-[75vh] items-center justify-center gap-[30px]"
      >
        <TypographyText
          tag="span"
          className="text-[57px] font-bold text-brown-normal"
        >
          Ask{' '}
          <TypographyText
            tag="span"
            className="text-[57px] font-bold text-yellow-normal"
          >
            i Fit
          </TypographyText>{' '}
          for any consultant
        </TypographyText>
        <Container
          bgColor="none"
          flexDirection="column"
          className="flex justify-center"
        >
          <TypographyText
            tag="p"
            className="text-[24px] font-bold text-brown-normal"
          >
            Now with Ifit you can answer for all questions you need and learn
          </TypographyText>
          <TypographyText
            tag="p"
            className="text-[24px] font-bold text-brown-normal"
          >
            more about work for article and blogs to be brans and tob el nob
          </TypographyText>
        </Container>
        <Button
          bgType="default"
          bgClass="btn_main"
          rounded="rounded-[8px]"
          className="h-[48px]  w-[255px] text-[18px] font-bold"
        >
          Ask now
        </Button>
      </Container>

      {/* newest blog section */}
      <Container
        bgColor="bg-none"
        flexDirection="column"
        className="flex gap-16"
      >
        <Container bgColor="bg-none">
          <HeaderBar title="Newest" />
          <Container
            bgColor="bg-none"
            flexDirection="row"
            className="flex w-full gap-[107px] py-7"
          >
            <BlogCard type="top" />
            <Container
              bgColor="bg-none"
              flexDirection="column"
              className="flex w-full gap-12"
            >
              <BlogCard type="topSmall" />
              <BlogCard type="topSmall" />
            </Container>
          </Container>
        </Container>

        {/* all blogs section */}
        <Container bgColor="bg-none">
          <HeaderBar title="Articals" />
          <Container
            bgColor="bg-none"
            flexDirection="row"
            className="flex w-full gap-[107px] py-12"
          >
            <Container
              bgColor="bg-none"
              flexDirection="column"
              className="flex w-[50%] gap-16"
            >
              <BlogCard type="reguler" />
              <BlogCard type="reguler" />
              <BlogCard type="reguler" />
            </Container>
            <Container
              bgColor="bg-none"
              flexDirection="column"
              className="flex w-[50%] gap-16"
            >
              <BlogCard type="reguler" />
              <BlogCard type="reguler" />
              <BlogCard type="reguler" />
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default HomeView;
