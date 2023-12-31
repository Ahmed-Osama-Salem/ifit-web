'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

const NavbarMenu = ({ lang }: { lang: string }) => {
  const navigationTabs = [
    {
      id: 1,
      label: 'My Questions',
      href: `/${lang}/question`,
      x: 20,
      delay: 0.25,
    },
    {
      id: 2,
      label: 'Articles',
      href: `/${lang}/blog`,
      x: 30,
      delay: 0.45,
    },
    { id: 3, label: 'Home', href: `/${lang}`, x: 40, delay: 0.65 },
    {
      id: 4,
      label: 'My Setting',
      href: `/${lang}/settings`,
      x: 50,
      delay: 0.75,
    },
  ];

  const navigationTags = [
    { id: 1, label: 'Ask now', href: `/${lang}/question`, x: 20, delay: 0.25 },
    { id: 2, label: 'Blog', href: `/${lang}/blog`, x: 30, delay: 0.45 },
    { id: 3, label: 'Contact us', href: '/', x: 40, delay: 0.65 },
  ];

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="fixed left-0 top-[87px] z-10 h-[90vh] w-full bg-yellow-light px-[40px] lg:px-[150px]"
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
            className="py-10"
          >
            <div className="flex gap-4 rounded-full">
              {navigationTags.map((el) => {
                return (
                  <Link key={el.id} href={el.href}>
                    <button
                      type="button"
                      className="group relative rounded-full border-[1px] px-2 transition-colors duration-200 ease-linear hover:bg-yellow-normal xl:px-4"
                    >
                      {/* <div className="absolute left-0 h-full w-full rounded-full bg-black-normal group-hover:opacity-60" /> */}
                      <TypographyText
                        tag="p"
                        className="text-lg font-bold text-brown-normal transition-colors duration-200 ease-in-out group-hover:text-white xl:text-3xl"
                      >
                        {el.label}
                      </TypographyText>
                    </button>
                  </Link>
                );
              })}
            </div>
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
          <div className="space-y-3 py-2 xl:w-[40%]">
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
                <Link href={el.href}>
                  <TypographyText
                    tag="h3"
                    className="nav-item desktop:text-[5rem] w-fit cursor-pointer text-[1.7rem] font-bold uppercase md:text-[2rem] lg:text-[3rem] xl:text-[4rem]"
                  >
                    {el.label}
                  </TypographyText>
                </Link>
              </motion.h3>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.article>
  );
};

export default NavbarMenu;
