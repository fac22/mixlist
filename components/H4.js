export const H4 = ({ children, color }) => {
  return (
    <span
      className={`font-body text-xs tracking-widest mt-1 text-${color} w-auto`}
    >
      {children}
    </span>
  );
};
