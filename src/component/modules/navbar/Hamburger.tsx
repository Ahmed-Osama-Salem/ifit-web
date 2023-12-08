const Hamburger = (props: any) => {
  const genericHamburgerLine = `h-1 w-9 my-1 rounded-full bg-black-normal transition ease transform duration-300`;

  return (
    <button
      type="button"
      className="group flex flex-col items-center justify-center"
      onClick={props.toggleNavbar}
    >
      {/* {' '} */}
      <div
        className={`${genericHamburgerLine} ${
          props.isOpen
            ? 'translate-y-3 rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          props.isOpen ? 'opacity-0' : 'hidden'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          props.isOpen
            ? '-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
};

export default Hamburger;
