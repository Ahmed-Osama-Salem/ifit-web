'use client';

import '@/component/modules/navbar/navbar.css';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import type { UserModel } from '@/app/[lang]/page';
import { setPopupName, showPopup } from '@/apps/redux/slice/popupSlice';
import { Button } from '@/component/elements/Button';
import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';
import logo from '@/public/assets/images/logo.png';

import AuthModal from '../auth/AuthModal';
import Hamburger from './Hamburger';
import NavbarMenu from './NavbarMenu';

const Navbar = ({ user, lang }: { user?: UserModel; lang: string }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleNavbar = (): void => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolling(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container
        flexDirection="row"
        bgColor={scrolling ? 'bg-white shadow-md' : 'bg-yellow-light'}
        className="fixed top-0 z-10 flex h-[87px] w-full items-center  px-[40px]  transition-all duration-150 ease-linear sm:justify-between lg:px-[150px]"
      >
        <Container
          bgColor="none"
          flexDirection="row"
          className="flex flex-row gap-10"
        >
          <Hamburger isOpen={isOpen} toggleNavbar={toggleNavbar} />
        </Container>
        <Container
          flexDirection="row"
          bgColor="bg-none"
          className="flex h-full items-center"
        >
          {/* <img src={logo.src} className="h-auto w-[4rem]" alt="ifit" /> */}
          <div className="relative h-[80px] w-[54px] xl:h-[100px] xl:w-[64px]">
            <Image src={logo.src} alt="ifit" fill className="object-contain" />
          </div>
          <TypographyText
            tag="h3"
            className="translate-x-[-10px] pt-2 text-[30px] font-bold text-brown-normal xl:text-[36px]"
          >
            i Fit
          </TypographyText>
        </Container>
        {!user ? (
          <Button
            bgType="default"
            bgClass="btn_main"
            rounded="rounded-[100px]"
            padding="px-6 py-2"
            className="hidden sm:block"
            onClick={() => {
              dispatch(setPopupName('Auth'));
              dispatch(showPopup(<AuthModal />));
            }}
          >
            sign in
          </Button>
        ) : (
          <Container
            bgColor="none"
            className="flex flex-row items-center justify-center gap-2 text-center"
            flexDirection="row"
          >
            <Image
              src={user?.image}
              alt="user_avatar"
              className="h-full w-[50px] rounded-full"
              width={50}
              height={100}
            />
          </Container>
        )}
      </Container>
      <AnimatePresence initial={false} mode="wait">
        {isOpen && <NavbarMenu lang={lang} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
