import { Styles } from './Styles';

export const BackgroundWrapper = ({ children, toggleMenu, toggleSearch }) => {
  return (
    <div
      className={`absolute fill-current bg-fixed bg-cover bg-shapes z-0 ${
        Styles.transition
      } ${toggleMenu || toggleSearch ? 'filter blur-max' : 'filter blur-none'}`}
    >
      {children}
    </div>
  );
};
