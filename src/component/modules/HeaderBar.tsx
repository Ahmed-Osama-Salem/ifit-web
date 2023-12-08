import Link from 'next/link';

import Container from '../elements/Container';
import TypographyText from '../elements/Typography';

interface HeaderBarProps {
  title: string;
  href?: string;
}

const HeaderBar = (props: HeaderBarProps) => {
  return (
    <Container
      tag="div"
      bgColor="none"
      flexDirection="row"
      className="flex items-center justify-between"
    >
      <TypographyText
        tag="p"
        className="text-[24px] font-bold text-black-normal"
      >
        {props.title}
      </TypographyText>
      <Link href={props?.href || ('/' as string)}>
        <TypographyText
          tag="p"
          className="text-[16px] font-bold text-black-normal"
        >
          View all
        </TypographyText>
      </Link>
    </Container>
  );
};

export default HeaderBar;
