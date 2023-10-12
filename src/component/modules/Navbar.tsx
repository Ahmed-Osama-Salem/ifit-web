import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signIn } from 'next-auth/react';

import logo from '@/public/assets/images/logo.png';

import { Button } from '../elements/Button';
import Container from '../elements/Container';
import TypographyText from '../elements/Typography';

const Navbar = () => {
  const pathname = usePathname();

  const navigationTabs = [
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/articles' },
    { label: 'Questions', href: '/questions' },
    { label: 'Community', href: '/community' },
  ];

  return (
    <Container
      flexDirection="row"
      bgColor="bg-white"
      className="flex h-[87px] w-full items-center justify-between px-[60px]"
    >
      <Container
        flexDirection="row"
        bgColor="bg-white"
        className="flex h-full items-center"
      >
        <img src={logo.src} className="h-auto w-[4rem]" alt="ifit" />
        <TypographyText
          tag="h3"
          className="translate-x-[-10px] pt-2 text-[36px] font-bold text-brown-normal"
        >
          i Fit
        </TypographyText>
      </Container>
      <Container
        bgColor="none"
        flexDirection="row"
        className="flex flex-row gap-10"
      >
        {navigationTabs.map((el, i) => {
          return (
            <Link key={i as number} href={el.href}>
              <TypographyText
                tag="h3"
                className={`cursor-pointer text-[16px] font-bold  ${
                  pathname === el.href ? 'text-brown-normal' : 'text-[#98A1B3]'
                }`}
              >
                {el.label}
              </TypographyText>
            </Link>
          );
        })}
      </Container>
      <Button
        bgType="default"
        bgClass="btn_main"
        rounded="rounded-[100px]"
        padding="px-6 py-2"
        onClick={() => signIn('google')}
      >
        sign in
      </Button>
    </Container>
  );
};

export default Navbar;
