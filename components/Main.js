export const Main = ({ children, toggleMenu, toggleSearch }) => {
  return (
    <main
      className={`w-full p-5 ${
        toggleMenu || toggleSearch
          ? 'filter transition duration-300 ease-out  pointer-events-none filter blur-2xl'
          : 'visible'
      }`}
    >
      {children}
    </main>
  );
};
