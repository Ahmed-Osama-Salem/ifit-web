'use client';

import { motion } from 'framer-motion';

import Container from '@/component/elements/Container';
import TypographyText from '@/component/elements/Typography';

const NavbarMenu = () => {
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
                  className="group relative rounded-full border-[1px] px-4 transition-colors duration-200 ease-linear hover:bg-yellow-normal"
                >
                  {/* <div className="absolute left-0 h-full w-full rounded-full bg-black-normal/40" /> */}
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
  );
};

export default NavbarMenu;
