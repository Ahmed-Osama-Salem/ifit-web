'use client';

import '@/component/modules/navbar.css';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import type { UserModel } from '@/app/[lang]/page';
import { setPopupName, showPopup } from '@/apps/redux/slice/popupSlice';
import logo from '@/public/assets/images/logo.png';

import { Button } from '../elements/Button';
import Container from '../elements/Container';
import TypographyText from '../elements/Typography';
import AuthModal from './auth/AuthModal';
import Hamburger from './Hamburger';

const Navbar = ({ user }: { user?: UserModel }) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggleNavbar = (): void => {
    setIsOpen(!isOpen);
  };
  // const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navigationTabs = [
    { id: 1, label: 'My Questions', href: '/', x: 20, delay: 0.25 },
    { id: 2, label: 'Articles', href: '/', x: 30, delay: 0.45 },
    { id: 3, label: 'Home', href: '/', x: 40, delay: 0.65 },
    { id: 4, label: 'My Setting', href: '/', x: 50, delay: 0.75 },
  ];

  const navigationTags = [
    { id: 1, label: 'Ask now', href: '/', x: 20, delay: 0.25 },
    { id: 2, label: 'Blog', href: '/', x: 30, delay: 0.45 },
    { id: 3, label: 'Contact us', href: '/', x: 40, delay: 0.65 },
  ];

  return (
    <>
      <Container
        flexDirection="row"
        bgColor="bg-white"
        className="fixed top-0 z-10 flex h-[87px] w-full items-center justify-between px-[150px]"
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
          bgColor="bg-white"
          className="flex h-full items-center"
        >
          {/* <img src={logo.src} className="h-auto w-[4rem]" alt="ifit" /> */}
          <Image src={logo.src} alt="ifit" width={64} height={100} />
          <TypographyText
            tag="h3"
            className="translate-x-[-10px] pt-2 text-[36px] font-bold text-brown-normal"
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
        {isOpen && (
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-[87px] z-10 h-[90vh] w-full bg-yellow-light px-[150px]"
          >
            <Container tag="main" bgColor="bg-none" flexDirection="column">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                exit={{ opacity: 0 }}
              >
                <Container
                  bgColor="bg-none"
                  flexDirection="row"
                  tag="div"
                  className="flex gap-3 py-10"
                >
                  {navigationTags.map((el) => {
                    return (
                      <button
                        key={el.id}
                        type="button"
                        className="group rounded-full border-[1px] px-4 transition-colors duration-200 ease-linear hover:bg-yellow-normal"
                      >
                        <TypographyText
                          tag="p"
                          className="text-2xl font-bold text-brown-normal transition-colors duration-200 ease-in-out group-hover:text-white"
                        >
                          {el.label}
                        </TypographyText>
                      </button>
                    );
                  })}
                </Container>
              </motion.div>
              <Container
                tag="div"
                bgColor="bg-brown-light"
                className="h-[0.5px] w-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                exit={{ opacity: 0 }}
              >
                <div className="w-[40%] py-2">
                  {navigationTabs.map((el) => (
                    <motion.h3
                      key={el.id}
                      initial={{ opacity: 0, x: el.x }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: el.delay,
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <TypographyText
                        tag="h3"
                        className="nav-item w-fit cursor-pointer text-[5rem] font-bold uppercase"
                      >
                        {el.label}
                      </TypographyText>
                    </motion.h3>
                  ))}
                </div>
              </motion.div>
            </Container>
          </motion.article>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
