export const BackgroundWrapper = ({ children, toggleMenu, toggleSearch }) => {
  return (
    <div
      className={`absolute w-screen h-screen bg-fixed bg-cover bg-shapes z-0 ${
        toggleMenu || toggleSearch ? 'filter blur-max' : 'filter blur-none'
      }`}
    >
      {children}
    </div>
  );
};
