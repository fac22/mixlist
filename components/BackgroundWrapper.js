import { Styles } from './Styles';

export const BackgroundWrapper = ({ children, toggleMenu, toggleSearch }) => {
  return (
    <div
      className={`w-full h-full bg-fixed bg-cover bg-repeat bg-shapes z-0 ${
        Styles.transition
      } ${toggleMenu || toggleSearch ? 'filter blur-max' : 'filter blur-none'}`}
    >
      {children}
    </div>
  );
};
