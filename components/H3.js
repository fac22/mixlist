export const H3 = ({ children, color }) => {
  return (
    <span
      className={`font-header text-lg tracking-widest mt-1 text-${color} w-auto`}
    >
      {children}
    </span>
  );
};
