import { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const genericHamburgerLine = `h-1 w-9 my-1 rounded-full bg-black-normal transition ease transform duration-300 bg-slate-200`;

  return (
    <button
      type="button"
      className="group flex flex-col items-center justify-center"
      onClick={toggleNavbar}
    >
      {/* {' '} */}
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'translate-y-3 rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${isOpen ? 'opacity-0' : 'hidden'}`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
};

export default Hamburger;
