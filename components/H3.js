export const H3 = ({ children, color, fontSize }) => {
  return (
    <span
      className={`font-header tracking-widest mt-1 text-${color} text-${fontSize} w-auto`}
    >
      {children}
    </span>
  );
};
