import { Styles } from './Styles';

export const Main = ({ children, toggleMenu, toggleSearch }) => {
  return (
    <main
      className={`w-full p-5 ${
        toggleMenu || toggleSearch
          ? `filter ${Styles.transition} pointer-events-none filter blur-2xl`
          : 'visible'
      }`}
    >
      {children}
    </main>
  );
};
